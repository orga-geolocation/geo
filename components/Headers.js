import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Menu from './Menu';

export default function Headers(props) {

  return (
    <View>
      <View style={{ marginTop: 26, backgroundColor: '#31a350', height: 55 }}>
        <Menu navigation={props.navigation} />
        <Text style={styles.text}>{props.name}</Text>
        <View>
          <TouchableOpacity>
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
    width: 60,
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 2,
    fontSize: 17,
    color: 'white'
  }
})
