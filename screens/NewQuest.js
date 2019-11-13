import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Menu from '../components/Menu';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Container, Header } from 'native-base';

export default class NewQuest extends React.Component {
  static navigationOptions = {
    drawerIcon: () => (
      <View style={styles.icon}>
        <Ionicons
          name="md-navigate"
          size={24}
          style={{ color: 'white' }}

        />
      </View>
    )
  }

  render() {
    return (
      <Container style={styles.view} >
        <Header style={{ marginTop: 26}}>
           <Menu navigation={this.props.navigation} />
          <Text style={styles.text}>New Quest </Text>
        </Header>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: "black",
    

  },
  icon: {
    fontSize: 15,
    color: "white",
    textAlign: 'center',
    backgroundColor: 'green',
    height: 25,
    width: 25,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },



})