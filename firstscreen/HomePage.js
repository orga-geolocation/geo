import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button } from "native-base"

export default function HomePage(props) {
  
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Button success onPress={() =>props.navigation.navigate("Play")}><Text style={{ width: 100, textAlign: "center" }}>Play</Text></Button>
        <Button info onPress={() =>props.navigation.navigate("Explore")}><Text style={{ width: 100, textAlign: "center" }}> Explorer</Text></Button>
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