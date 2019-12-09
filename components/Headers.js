import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';
import Menu from './Menu';
import SignupView from "../screens/registeration/signup"
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginView from '../screens/registeration/login';
import GlobalState from "../globalstate/GlobalState"
import Profile from '../screens/registeration/profile';


export default function Headers(props) {

  /* const [modalVisible, setModalVisible] = useState(false) */
  const Context = useContext(GlobalState)
  const state = Context.state;
  return (
    <View style={{ marginTop: 26, backgroundColor: '#31a350', height: 55 }}>
      <View>
        <Menu style={{height:55}} navigation={props.navigation} />
        <Text style={styles.text}>{props.name}</Text>
        <View>
          <TouchableOpacity style={styles.viewbutton} onPress={() => {
            Context.switchModal(state.modalVisible);
          }}>
            {state.user ? <Text style={{ fontSize: 15, color: "white" }} >
              {state.user}
            </Text> : <Text style={{ fontSize: 15, color: "white" }} > Login  </Text>}
            <Text>
              <Ionicons name="md-person"
                size={24}
                style={styles.iconcolor}
              /></Text>
          </TouchableOpacity>
        </View>
      </View>
      <View >
        <Modal
          animationType="slide"
          transparent={false}
          visible={state.modalVisible}>
          <View style={{ paddingTop: 22 }}>
            <View style={{ width: "100%", height: "100%" }}>
              <TouchableHighlight
                onPress={() => {
                  Context.switchModal(state.modalVisible);
                }}>
                <Text style={{ textAlign: "center", backgroundColor: "green" }}><Ionicons
                  name="md-close"
                  size={32}
                  style={styles.iconcolor}
                /></Text>
              </TouchableHighlight>
              {state.user ? <Profile /> : state.register ? <LoginView /> : <SignupView />}


            </View>
          </View>
        </Modal>
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
    width: 120,
    position: 'absolute',
    paddingLeft: 20,
    bottom: 2,
    right: 5,
    fontSize: 17,
    color: 'white',
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end"
  },
  iconcolor: {
    fontSize: 30,
    color: "white",
    textAlign: 'center',
    height: 25,
    width: 25,
    marginLeft: 2,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
