import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Menu from '../components/Menu';
import {Container, Header} from 'native-base';


export default class Player extends React.Component{
  static navigationOptions = {
    drawerIcon : () => (
      <Ionicons 
                name="logo-game-controller-b"
                size= {24}
                color='#000000'
      />
    )
  }

 render(){
  return (
    <Container style={styles.view} >
      <Header>
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
    textAlign:'center',
    fontSize: 35
  }
})