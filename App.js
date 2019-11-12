import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import DrawerNavigator from './components/DrawerNavigator';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import PlayMode from './Firstscreen/PlayMode';
import HomePage from './Firstscreen/HomePage'
import HomeScreen from './screen/HomeScreen';




export default class App extends React.Component{
  

 render(){
  return (
    <View style={styles.view} >
      {/* <DrawerNavigator /> */}
      <Appcontainer />
    </View>
  );
  }
}

const appSwitchNavigation= createSwitchNavigator({
  HomePage:HomePage,
  Explorer:DrawerNavigator,
  PlayMode:PlayMode
})

const Appcontainer=createAppContainer(appSwitchNavigation)


const styles = StyleSheet.create({

  view: {
    flex: 1,    
  },
  container: {
    flex: 1,
    backgroundColor: '#rgb(86, 131, 127)',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
})



