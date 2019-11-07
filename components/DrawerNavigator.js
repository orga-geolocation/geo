import React from 'react';
import {Platform ,Dimensions} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator}from 'react-navigation-drawer';
import HomeScreen from '../screen/HomeScreen';  
import Player from '../screen/Player';
import NewQuest from '../screen/NewQuest';

const WIDTH = Dimensions.get('window').width;
const DrawerNavigatorConfig = {
    drawerWidth: WIDTH*0.33,
}


const DrawerNavigator = createDrawerNavigator({
    Home: {screen: HomeScreen},
    NewPlayer : {screen :Player},
    NewQuest: {screen:NewQuest}
},
DrawerNavigatorConfig
)

export default createAppContainer(DrawerNavigator);


