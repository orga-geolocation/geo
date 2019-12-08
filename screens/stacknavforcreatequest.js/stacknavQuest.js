import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainQuest from "./mainQuest"
import Point from "./point"

const AppNavigator = createStackNavigator({
  Home: {
    screen: MainQuest,
  },
  Point: {
    screen: Point,
  },
},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

export default createAppContainer(AppNavigator);