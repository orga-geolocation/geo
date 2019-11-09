import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Menu from '../components/Menu';

export default class HomeScreen extends React.Component{
  
  static navigationOptions  = {
   drawerIcon : () => (
    <Ionicons name="md-home"
               size={24} 
               color ="#000000"
               />
   )
  }
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
    /* alignItems: 'center',
    justifyContent: 'center' */
        
  },
  text: {
    textAlign:'center',
    fontSize: 35

    // position: 'absolute',
    // top: 400,
    // left: 160,
    // fontWeight:'bold'
  }
  
})