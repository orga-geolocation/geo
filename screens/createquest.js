import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Headers from "../components/Headers";
import Ionicons from 'react-native-vector-icons/Ionicons'
import QuestCreatorStack from "./stacknavforcreatequest.js/stacknavQuest"


export default function CreateQuest(props) {

  return (
    <View style={{ flex: 1 }}>
      <Headers
        name='Create Quest'
        navigation={props.navigation}
      />
      <QuestCreatorStack/>
    </View>
  );
}

CreateQuest.navigationOptions = {
  drawerIcon: () => (
    <View style={styles.icon}>
      <Ionicons
        name="md-navigate"
        size={24}
        style={{ color: 'white' }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 15,
    color: "white",
    textAlign: 'center',
    backgroundColor: 'green',
    height: 25,
    width: 25,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: "auto",
    marginRight: "auto",
    width: 250,
    borderRadius: 30,
  }
})