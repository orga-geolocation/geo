import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Menu from '../components/Menu'

export default class NewQuest extends React.Component{
  

 render(){
  return (
    <View style={styles.view} >
        <Menu navigation={this.props.navigation} />
        <Text style={styles.text}>New Quest </Text>
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