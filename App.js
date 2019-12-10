import React, { useReducer } from 'react';
import { StyleSheet, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import PlayMode from './firstscreen/PlayMode';
import HomePage from './firstscreen/HomePage'
import ExploreMode from './firstscreen/ExploreMode';
import GlobalState from "./globalstate/GlobalState"
import Reducer, { initialstate } from "./globalstate/Reducer"

export default App = () => {
  const [state, dispatch] = useReducer(Reducer, initialstate)


  /*  globalState Methods */
  const switchValue = (value) => {
    dispatch({ type: "switch", payload: value })
  }
  const setUser = (user) => {
    dispatch({ type: "setuser", payload: user })
  }
  const switchModal = (value) => {
    dispatch({ type: "switchmodal", payload: value })
  }
  const setUserData = (value) => {
    dispatch({ type: "setuserdata", payload: value })
  }
  const setMode=(value)=>{
    dispatch({ type: "setmode", payload: value })
  }
  const setLatG=(value)=>{
    dispatch({type:"lat",payload:value})
  }
  const setLongG=(value)=>{
    dispatch({type:"long",payload:value})
  }
  const setID=(value)=>{
    dispatch({type:"id",payload:value})
  }
  return (
    <GlobalState.Provider value={{ state, switchValue, setUser, switchModal, setUserData ,setMode ,setLatG,setLongG,setID}}>
      <View style={styles.view} >
        <Appcontainer />
      </View>
    </GlobalState.Provider>
  );
}

const appSwitchNavigation = createSwitchNavigator({
  HomePage:ExploreMode ,
  Explore: ExploreMode,
  Play: PlayMode
})

const Appcontainer = createAppContainer(appSwitchNavigation)

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
})



