import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import Headers from "../components/Headers";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MapView } from "expo";
export default function CreateQuest(props) {
  const [form, setForm] = useState(true)
  return (
    <View style={{ flex: 1 }}>
      <Headers
        name='Create Quest'
        navigation={props.navigation}
      />
      <View>
        <Text>user can now create quest</Text>
        <TouchableHighlight style={styles.buttonContainer} onPress={() => setForm(!form)}>
          <Text>create quest</Text>
        </TouchableHighlight>

      {form ? <Text>FORM here</Text>:null}
      </View>
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
    marginLeft:"auto",
    width: 250,
    borderRadius: 30,
  },
})