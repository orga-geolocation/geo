import React, {useState} from 'react';
import { StyleSheet,View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Headers from '../components/Headers'



export default function Player(props){

    return (
     <View style={{flex: 1}}>
       <Headers  
       name ='PLayer'
       navigation={props.navigation}
 />
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