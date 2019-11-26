import React,{useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Headers from '../components/Headers'

import SubHeaderButtons from '../components/SubHeaderButtons';
import Map from '../components/Map';

export default function HomeScreen(props) {

  const [check,setcheck]=useState(true)
  const [mode,setmode]=useState("explore")

  const changeMode=()=>{
    setcheck(!check);
    if(check){
      setmode("play")
    }else{
      setmode("explore")
    }
    
  }
  return (
    <View style={{ flex: 1 }}>
      <Headers
        name='Home Screen'
        navigation={props.navigation}
      />
      <SubHeaderButtons changeMode={changeMode} mode={mode}/>
      <Map mode={mode} />
    </View>
  )
}

HomeScreen.navigationOptions = {
  drawerIcon: () => (
    <View style={styles.icon}>
      <Ionicons name="md-home"
        size={24}
        style={styles.iconcolor}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 20,
    color: "white",
    textAlign: 'center',
    backgroundColor: 'green',
    height: 25,
    width: 25,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconcolor: {
    color: "white",

  },

})
