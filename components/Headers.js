import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Menu from './Menu';

export default function Headers(props) {
  return (
    <View>
      <View style={{ marginTop: 26, backgroundColor: 'blue', height: 55 }}>
        <Menu navigation={props.navigation} />
        <Text style={styles.text}>{props.name}</Text>
        <View>
          <TouchableOpacity onPress={()=>props.navigation.navigate("LoginView")}>
            <Text style={styles.viewbutton}>LOG IN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: "white",
    marginTop: 18,
    textAlign: 'center',
  },
  viewbutton: {
    width: 80,
    padding:13,
    alignSelf: 'flex-end',
   position: 'relative', 
    bottom: 30,
    fontSize: 17,
    color: 'white',
    borderColor:"black",
    borderWidth:2
  }
})
