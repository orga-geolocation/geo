import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import DrawerNavigator from './components/DrawerNavigator';




export default class App extends React.Component{
  

 render(){
  return (
    <View style={styles.view} >
      <DrawerNavigator />
    </View>
  );
  }
}

const styles = StyleSheet.create({

  view: {
    flex: 1,    
  },
  container: {
    flex: 1,
    backgroundColor: '#rgb(86, 131, 127)',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
})



