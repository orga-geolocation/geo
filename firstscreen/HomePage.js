import React, { Component } from 'react'
import { Text, View, StyleSheet,Button } from 'react-native'
import {} from "native-base"

export default function HomePage(props) {
  
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Button 
                title='Play'
                onPress={() =>props.navigation.navigate("Play")} 
                
            />
                
        <Button  
                title= 'Explorer'
                onPress={() =>props.navigation.navigate("Explore")}
            /> 
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