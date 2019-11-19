import React, {useState} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import Menu from './Menu';
import {Button} from 'native-base';

export default function  Headers(props) {

//  const [title, setTitle] = useState([{

//     title: 'Home Screen',
//     title: 'Player',
//     title: 'New Quest',
//     title: 'FAQ'

//         }])

    return (
      <View>
        
        <View style={{marginTop:26, backgroundColor:'blue', height:55}}>
          <Menu  navigation={props.navigation}/> 
          <Text style={styles.text}>{props.name}</Text> 
          <Button transparent style={styles.button}><Text style={{color:'white', fontSize:17}}>LOG IN</Text></Button>
          </View>

        </View>
    )
}

  const styles = StyleSheet.create({
    
    text: {
      fontSize: 20,
      color: "white",
      marginTop:18,
      // marginLeft: 145
      textAlign:'center',
     
    },
    button: {
      width: 60,
      alignSelf:'flex-end',
      position: 'absolute',
      top:9,
      right: 3,
      }
    
    
  })
          