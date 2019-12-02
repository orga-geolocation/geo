import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity ,AsyncStorage } from 'react-native'

export default function HomePage(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {
        props.navigation.navigate("Play")
        AsyncStorage.setItem("mode","play")
        }} >
        <Text>Play</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        props.navigation.navigate("Explore")
        AsyncStorage.setItem("mode","explore")
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