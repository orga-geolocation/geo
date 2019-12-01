import React from 'react';
import {View} from 'react-native';
import Mapscreen from "./Mapscreen"
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from "react-navigation-stack" 
import LoginView from './registeration/login';
import SignupView from "./registeration/signup"

export default function HomeScreen(props) {
  return (
    <View style={{ flex: 1 }}> 
      <Appcontainer/>
    </View>
  )
}

const AppSwitchNavigation = createStackNavigator({
  Mapscreen: {screen: (props)=><Mapscreen {...props}/>,  navigationOptions: {
    header: null
  }},
  LoginView:{screen: LoginView,  navigationOptions: {
    title:"Login"
  }},
  SignupView:{screen: SignupView,  navigationOptions: {
    title:"SignUp"
  }},
})

const Appcontainer = createAppContainer(AppSwitchNavigation)




