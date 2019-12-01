import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';
import Menu from './Menu';
import SignupView from "../screens/registeration/signup"
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginView from '../screens/registeration/login';
import GlobalState from "../globalstate/GlobalState"


export default function Headers(props) {

  const [modalVisible, setModalVisible] = useState(false)
  const { state } = useContext(GlobalState)
  console.log(state.register)
  return (
    <View>
      <View style={{ marginTop: 26, backgroundColor: 'blue', height: 55 }}>
        <Menu navigation={props.navigation} />
        <Text style={styles.text}>{props.name}</Text>
        <View>
          <TouchableOpacity style={styles.viewbutton} onPress={() => {
            setModalVisible(true);
          }}>
            <Text style={{ fontSize: 15, color: "white" }} >
              Login
             </Text>
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
          visible={modalVisible}>
          <View style={{ marginTop: 22 }}>
            <View style={{ width: 400, height: "100%" }}>
              <TouchableHighlight
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text>close Modal</Text>
              </TouchableHighlight>
              {state.register ? <LoginView /> : <SignupView />}


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
