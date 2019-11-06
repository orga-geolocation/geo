import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import HomeScreen from './HomeScreen';
import PlayerScreen from './PlayerScreen';
import Screen2 from './Screen2';
import Screen3 from './Screen3';


const MyDrawerNavigator = createDrawerNavigator({
    Home : {screen : HomeScreen},
    PlayerScreen : {screen : PlayerScreen},
    Screen2 : {screen: Screen2},
    Screen3: {screen: Screen3},
},
{
    initialRouteName :'Home',
    drawerWidth: 300,
    drawerPosition: 'left',
}
);


const AppContainer = createAppContainer(MyDrawerNavigator);

export default class DrawerNavigator extends Component {
    render() {
        return <AppContainer />
    }
}