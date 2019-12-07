import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import * as SecureStore from 'expo-secure-store';


export default function HomePage(props) {
  const setStorageMode=async(value)=>{
    await SecureStore.setItemAsync("mode",value)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {
        setStorageMode("play")
        props.navigation.navigate("Play")
        }} >
        <Text>Play</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        setStorageMode("explore")
        props.navigation.navigate("Explore")
        }}>
        <Text>Explorer</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});