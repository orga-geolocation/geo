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


export default LoginView = (props) => {


  const Context = useContext(GlobalState)

  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")

  const onClickListener = (view) => {
    Alert.alert("Alert", "Button pressed " + view);
  }

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/pin2.png')} style={{marginBottom:20}} />
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputs}
          placeholder="User Name"
          underlineColorAndroid='transparent'
          onChangeText={(username) => setusername({ username })} />
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.inputs}
          placeholder="Password"
          secureTextEntry={true}
          underlineColorAndroid='transparent'
          onChangeText={(password) => setpassword({ password })} />
      </View>

      <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => onClickListener('login')}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableHighlight>

      <TouchableHighlight style={styles.buttonContainer} onPress={() => onClickListener('restore_password')}>
        <Text>Forgot your password?</Text>
      </TouchableHighlight>

      <TouchableHighlight style={styles.buttonContainer} onPress={() => Context.switchValue(Context.state.register)}>
        <Text>Register</Text>
      </TouchableHighlight>
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