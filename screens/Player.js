import React, { useContext, useState ,useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Headers from "../components/Headers";
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as SecureStore from "expo-secure-store"
import GlobalState from "../globalstate/GlobalState"
import { Item } from 'native-base';

export default function Player(props) {

  const [creQuests, setcreQuests] = useState([])
  const [comQuests, setcomQuests] = useState([])
  const { state } = useContext(GlobalState)

   useEffect(()=>{
  loadData()
  },[]) 
  const loadData = async () => {
    console.log("working")
    const getLocalStorage = await SecureStore.getItemAsync("data_store")
    const User = await JSON.parse(getLocalStorage)
     if (User) {
      User.completeQuests.map(quest => {
       return fetch(`https://geo-app-server.herokuapp.com/completequests/${quest}`)
        .then(data => data.json())
        .then(myquest => {
          if(myquest.coompleteQuest){
            let obj={key:myquest.coompleteQuest.title }
         setcomQuests(prev=>[...prev, obj])
         }
        })
      })
  
    User.userQuests.map(uquest => {
      return fetch(`https://geo-app-server.herokuapp.com/userquests/${uquest}`)
      .then(res => res.json())
      .then(res1 => {
        if(res1.userCreatedQuest){
           let obj={key:res1.userCreatedQuest.title }
        setcreQuests(prev=>[...prev, obj])
        }
       })
    }) 
  }
  }
  return (
    <View style={{ flex: 1 }}>
      <Headers
        name='My Data'
        navigation={props.navigation}
      />
      {state.login ? <View><Text style={{fontSize:20,backgroundColor:"gray",color:"white",padding:5}}>Created Quests</Text>{creQuests.map((item,i)=><Text key={i} style={{fontSize:16,textAlign:"center",backgroundColor:"lightgreen",borderColor:"white",borderWidth:2,padding:5,color:"gray"}}>{item.key}</Text>)}<Text style={{fontSize:20,backgroundColor:"gray",color:"white",padding:5}}>Completed Quests</Text>{comQuests.map((item,i)=><Text key={i} style={{fontSize:16,textAlign:"center",backgroundColor:"lightgreen",borderColor:"white",borderWidth:2,padding:5,color:"gray"}}>{item.key}</Text>)}</View> : <View style={{backgroundColor:"lightgreen",textAlign:"center",color:"white",padding:20, marginTop:20,marginRight:"10%",marginLeft:"10%"}}><Text style={{fontSize:20,textAlign:"center"}}>Need to login</Text></View>}
    </View>
  );
}

Player.navigationOptions = {
  drawerIcon: () => (
    <View style={styles.icon}>
      <Ionicons
        name="logo-game-controller-b"
        size={24}
        style={styles.iconcolor}
      />
    </View>
  )
}

const styles = StyleSheet.create({

  icon: {
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: 'green',
    height: 25,
    width: 25,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconcolor: {
    color: "white",

  }
})