import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainQuest from "./mainQuest"
import SelectMap from "./SelectMap"
import PointDestination from "./PointDestination"

const AppNavigator = createStackNavigator({
  Home: {
    screen: MainQuest,
  },
  SelectMap: {
    screen: SelectMap,
  },
  PointDestination:{
    screen:PointDestination
  }
},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

export default createAppContainer(AppNavigator);