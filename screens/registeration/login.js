import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Alert,
  Image
} from 'react-native';
import GlobalState from "../../globalstate/GlobalState"
import * as SecureStore from "expo-secure-store"
import Ionicons from 'react-native-vector-icons/Ionicons'


export default LoginView = (props) => {


  const Context = useContext(GlobalState)
  const state = Context.state;

  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const [Msj, setMsj] = useState("")
  const [showpass,setShowpass]=useState(true)
  const onClickListener = (view) => {
    Alert.alert("Alert", "Button pressed " + view);
  }

  setLocalStorage = async (key,value) => {
    await SecureStore.setItemAsync(key, value);
}

  const userLogin = async () => {
    if (username !== "" && password !== "") {
      let userdata = {
        username: username,
        password: password
      }
      let dataBody = JSON.stringify(userdata)
      await fetch("https://geo-app-server.herokuapp.com/login", {
        method: "POST", headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }, body: dataBody
      })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            setLocalStorage("data_store",JSON.stringify(data.user))
            Context.setUserData(data.user)
            Context.setUser(data.user.username)
            Context.switchModal(state.modalVisible)
            Context.setLogin(state.login)
          } else {
            setMsj(data.msj)
            setTimeout(function () { setMsj("") }, 2000)
          }

        })
        .catch((e) => {
          console.log(e)
        })

    } else {
      setMsj(" ** Please fill out all the fields ***")
      setTimeout(function () { setMsj("") }, 2000)
    }

  }


  return (
    <View style={styles.container}>
      <Image source={require('../../assets/pin2.png')} style={{ marginBottom: 20, position: "absolute", top: 20 }} />
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputs}
          placeholder="User Name"
          underlineColorAndroid='transparent'
          onChangeText={(username) => setusername(username)} />
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.inputs}
          placeholder="Password"
          secureTextEntry={showpass}
          underlineColorAndroid='transparent'
          onChangeText={(password) => setpassword(password)} />
          <Ionicons
            name={showpass?"md-eye-off":"md-eye"}
            color="#ffffff"
            size={20}
            style={{color:"black",position:"absolute",right:10}}
            onPress={() =>setShowpass(!showpass)}
        />
      </View>

      <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={userLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableHighlight>

      <TouchableHighlight style={styles.buttonContainer} onPress={() => onClickListener('restore_password')}>
        <Text>Forgot your password?</Text>
      </TouchableHighlight>

      <TouchableHighlight style={styles.buttonContainer} onPress={() => Context.switchValue(Context.state.register)}>
        <Text>Register</Text>
      </TouchableHighlight>
      {Msj !== "" ? <Text style={{ color: "red" }}> {Msj}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC'
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "green",
  },
  loginText: {
    color: 'white',
  }
});
