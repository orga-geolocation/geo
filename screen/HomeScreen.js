import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import Menu from '../components/Menu';

export default class HomeScreen extends React.Component{
  

 render(){
  return (
    <View style={styles.view} >
        <Menu  navigation={this.props.navigation}/> 
        <Text style={styles.text}> Home Screen </Text> 
    </View>
  );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
        
  },
  text: {
    textAlign:'center',
    position: 'absolute',
    top: 400,
    left: 160,
    fontWeight:'bold'
  }
  
})