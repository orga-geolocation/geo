import React from 'react';
import { StyleSheet, View} from 'react-native';
import Menu from '../components/Menu';

export default class HomeScreen extends React.Component{
  

 render(){
  return (
    <View style={styles.view} >
        <Menu  navigation={this.props.navigation}/>  
    </View>
  );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
        
  },
  
})