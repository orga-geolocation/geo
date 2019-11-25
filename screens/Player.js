import React, {useState} from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import Headers from "../components/Headers";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Picker, Icon } from "native-base"

export default function Player(props) {
  const [ShowPicker, setShowPicker] = useState(true)
  const [category, setCategory] = useState('all')
  const pick = () => {
    setShowPicker(true)
  }
  return (
    <View style={{ flex: 1 }}>
      <Headers
        name='Player'
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