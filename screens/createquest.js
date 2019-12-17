import React, { useState, useContext } from 'react';
import { StyleSheet, View,Text} from 'react-native';
import Headers from "../components/Headers";
import Ionicons from 'react-native-vector-icons/Ionicons'
import QuestCreatorStack from "./stacknavforcreatequest.js/stacknavQuest"
import GlobalState from "../globalstate/GlobalState"


export default function CreateQuest(props) {
 const Context=useContext(GlobalState)
  return (
    <View style={{ flex: 1 }}>
       <Headers
        name='ADD QUEST'
        navigation={props.navigation}
      />
      {Context.state.login?<QuestCreatorStack/>:<Text style={styles.firstlogin}>Please login to Add Quest</Text> }
     
      
    </View>
  );
}

CreateQuest.navigationOptions = {
  drawerIcon: () => (
    <View style={styles.icon}>
      <Ionicons
        name="md-navigate"
        size={24}
        style={{ color: 'white' }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  firstlogin:{
    width:"80%",
    height:300,
    backgroundColor:"lightgreen",
    margin:"10%",
    padding:50,
    fontSize:35,
    color:"white"
  },
  icon: {
    fontSize: 15,
    color: "white",
    textAlign: 'center',
/*     backgroundColor: 'green',
 */    height: 25,
    width: 25,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: "auto",
    marginRight: "auto",
    width: 250,
    borderRadius: 30,
  }
})