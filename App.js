import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import PlayMode from './firstscreen/PlayMode';
import HomePage from './firstscreen/HomePage'
import ExploreMode from './firstscreen/ExploreMode';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.view} >
        <Appcontainer />
      </View>
    );
  }
}

const appSwitchNavigation = createSwitchNavigator({
  HomePage: ExploreMode,
  Explore: ExploreMode,
  Play: PlayMode
})

const Appcontainer = createAppContainer(appSwitchNavigation)

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
})



