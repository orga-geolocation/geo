import React from 'react';
import { StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Headers from "../components/Headers";


export default function NewQuest(props) {
  
    return (
      <View style={{flex: 1}}>
      <Headers name='New Quest' navigation={props.navigation} />
    </View>
    );
  }
NewQuest.navigationOptions = {
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
})