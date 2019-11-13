import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Menu from '../components/Menu';
import { Container, Header } from 'native-base';

export default class Player extends React.Component {
  static navigationOptions = {
    drawerIcon: () => (
      <View style={styles.icon}>
        <Ionicons
          name="logo-game-controller-b"
          size={24}
          style={styles.iconcolor}

        />
      </View>
    )
  }

  render() {
    return (
      <Container style={styles.view} >
        <Header style={{ marginTop: 26 }}>
          <Menu navigation={this.props.navigation} />
          <Text style={styles.text1}>Player </Text>
        </Header>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,

  },
  text1: {
    textAlign: 'center',
    fontSize: 20,
    color: "black"
  },
  icon: {
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: 'green',
    height: 25,
    width: 25,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconcolor: {
    color: "white",

  }
})