import React, {useState} from 'react';
import { StyleSheet, View, Text,Button} from 'react-native';
import Menu from './Menu';
//import {} from 'native-base';

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
          <View  style={styles.button}>
          <Button title='LOG IN' color = "white"/>
          </View>
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
      width: 80,
      alignSelf:'flex-end',
      position: 'absolute',
      top:13,
      right: 0,
      fontSize:17
      }
    
    
  })
          