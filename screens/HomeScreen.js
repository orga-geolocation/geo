import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Menu from '../components/Menu';
import {Container, Header, Button} from 'native-base';
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
    <View style={styles.view} >
      
      <View style={{marginTop:26, backgroundColor:'blue', height:60}}>
        <Menu  navigation={this.props.navigation}/> 
        <Text style={styles.text}> Home Screen </Text> 
        <Button transparent style={styles.button}><Text style={{color:'white', fontSize:17}}>LOG IN</Text></Button>
        </View>
          {/* <View style={{marginTop:26 ,backgroundColor:'green', height:60,}}>
            
            <Menu  navigation={this.props.navigation}/>
          
            <View>
            <Text style={styles.text}>Home Screen</Text>

            </View>
           <View>
            
            <Button Warning style={styles.button} title="sign"/>

            </View>
          </View> */}
        <SubHeaderButtons/>
        <Map/>
    </View>
  );
  }
}


const styles = StyleSheet.create({
  view: {
    flex: 1,
    
        
  },
  text: {
    fontSize: 20,
    color: "white",
    marginTop:18,
    // marginLeft: 145
    textAlign:'center'
   
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

  },
  button: {
    width: 60,
    alignSelf:'flex-end',
    position: 'absolute',
    top:9,
    right: 3,
    }
  
  
})