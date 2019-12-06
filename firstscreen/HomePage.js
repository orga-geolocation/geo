import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default function HomePage(props) {
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {
        props.navigation.navigate("Play")
        setStorage("play")
        }} >
        <Text>Play</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        props.navigation.navigate("Explore")
        setStorage("explore")
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