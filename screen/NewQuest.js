import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Menu from '../components/Menu';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class NewQuest extends React.Component{
  static navigationOptions = {
      drawerIcon :() => (
        <Ionicons 
                  name="md-navigate"
                  size={24}
                  color= '#000000'
        
        />
      )
  }

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
    fontSize: 35
    


    
  }
  
})