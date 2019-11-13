import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Menu from '../components/Menu';
import {Container, Header} from 'native-base';
import SubHeaderButtons from '../components/SubHeaderButtons';
import Map from '../components/Map';


export default class HomeScreen extends React.Component{
  
  static navigationOptions  = {
   drawerIcon : () => (
    <View style= {styles.icon}>
        <Ionicons name="md-home"
               size={24} 
               style= {styles.iconcolor}
              
               />
               </View>
   )
  }
 render(){
  return (
    <Container style={styles.view} >
      <Header style={{marginTop:26, backgroundColor: 'green'}}>
        <Menu  navigation={this.props.navigation}/> 
        <Text style={styles.text}> Home Screen </Text> 
        </Header>

        <SubHeaderButtons/>
        <Map/>
    </Container>
  );
  }
}


const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  text: {
    textAlign:'center',
    fontSize: 20,
    color: "black"
  },
  icon :{
    fontSize: 20, 
    color: "white", 
    textAlign:'center',
    backgroundColor:'green',
    height: 25,
    width: 25,
    borderRadius: 50,
    alignItems:'center',
    justifyContent:'center',
   
  },
  iconcolor: {
    color: "white",

  }
  
})