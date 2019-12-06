import React,{useReducer} from 'react';
import { StyleSheet, View } from 'react-native';
import * as AsyncStorage from 'expo-secure-store';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import PlayMode from './firstscreen/PlayMode';
import HomePage from './firstscreen/HomePage'
import ExploreMode from './firstscreen/ExploreMode';
import GlobalState from "./globalstate/GlobalState"
import Reducer,{initialstate} from "./globalstate/Reducer"

export default  App =()=> {

  const [state,dispatch]=useReducer(Reducer,initialstate)
 
  const switchValue=(value)=>{
    dispatch({type:"switch",payload:value})
  }
  const setUser=(user)=>{
    dispatch({type:"setuser",payload:user})
  }
  const switchModal=(value)=>{
    dispatch({type:"switchmodal",payload:value})
  }

    return (
      <GlobalState.Provider value={{state,switchValue,setUser,switchModal}}> 
      <View style={styles.view} >
        <Appcontainer />
      </View>
      </GlobalState.Provider>
    );
}

const appSwitchNavigation = createSwitchNavigator({
  HomePage:ExploreMode /* AsyncStorage.getItemAsync("mode")==="explore"?Exploremode: AsyncStorage.getItemAsync("mode")==="play"? PlayMode: HomePage */ ,
  Explore: ExploreMode,
  Play: PlayMode
})

const Appcontainer = createAppContainer(appSwitchNavigation)

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
})



