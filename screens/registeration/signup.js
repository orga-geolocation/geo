import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableHighlight,
  Alert
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import GlobalState from "../../globalstate/GlobalState"

export default SignupView = (props) => {

  const Context = useContext(GlobalState)

  const [username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [showpass,setShowpass]=useState(true)
  const [Msj, setMsj] = useState("")

  const signupUser = async() => {
    if (username !== "" && email !== "" && password !== "") {
      let userdata = {
        username: username,
        password: password,
        email: email
      }
      let dataBody=JSON.stringify(userdata)
    await fetch("https://geo-app-server.herokuapp.com/signup",{method:"POST",headers: {
      'Accept': 'application/json',
        'Content-Type': 'application/json',
    }, body:dataBody})
  .then(res=>res.json())
    .then(data=>{
      if(data.success){
              Context.switchValue(Context.state.register)
      }else{
        setMsj(data.msj)
        setTimeout(function () { setMsj("") }, 2000)
      }

    })
    .catch((e)=>{
      console.log(e)
    })

    } else {
      setMsj(" ** Please fill out all the fields ***")
      setTimeout(function () { setMsj("") }, 2000)
    }

  }

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/pin.png')} style={{ marginBottom: 20, position: "absolute", top: 20 }} />
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputs}
          placeholder="Email"
          keyboardType="email-address"
          underlineColorAndroid='transparent'
          onChangeText={(email) => setemail(email)} />
      </View>
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
          onChangeText={(password) => setpassword( password )} />
             <Ionicons
            name={showpass?"md-eye-off":"md-eye"}
            color="#ffffff"
            size={20}
            style={{color:"black",position:"absolute",right:10}}
            onPress={() =>setShowpass(!showpass)}
        />
      </View>

      <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={signupUser}>
        <Text style={styles.loginText}>Signup</Text>
      </TouchableHighlight>

      <TouchableHighlight style={styles.buttonContainer} onPress={() => Context.switchValue(Context.state.register)}>
        <Text>Already Registered</Text>
      </TouchableHighlight>
      {Msj!== "" ? <Text style={{ color: "red" }}> {Msj}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
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
