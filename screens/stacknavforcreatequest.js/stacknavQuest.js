import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainQuest from "./mainQuest"

const AppNavigator = createStackNavigator({
  Home: {
    screen: MainQuest,
  },
},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

export default createAppContainer(AppNavigator);