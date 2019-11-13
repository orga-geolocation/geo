import React from 'react';
import {Dimensions,SafeAreaView,ScrollView,View,Image,StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator,DrawerItems}from 'react-navigation-drawer';
import HomeScreen from '../screens/HomeScreen';  
import Player from '../screens/Player';
import NewQuest from '../screens/NewQuest';
import FqaScreen from '../screens/FqaScreen'

const WIDTH = Dimensions.get('window').width;
const DrawerNavigatorConfig = {
    drawerWidth: WIDTH*0.43,

}

const headerNavigator = (props) => (
    <SafeAreaView style={styles.container}>
    <View style={styles.view}>
        <Image 
            source={require('../assets/geo.png')}
            style={styles.image}
            
        />
    </View>
    <SafeAreaView
      style={styles.line}
      forceInset={{ top: 'always', horizontal: 'always' }}
    >
      <DrawerItems {...props} />
    </SafeAreaView>
    
    </SafeAreaView>
    
    )
    
    const DrawerNavigator = createDrawerNavigator({
    Home: {screen: HomeScreen},
    NewPlayer : {screen :Player},
    NewQuest: {screen:NewQuest},
    FQA: {screen:FqaScreen}
    
},
    {   
        DrawerNavigatorConfig,
        contentComponent: headerNavigator,
    }
)

export default createAppContainer(DrawerNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    view:{
        height: 150,
        alignItems:'center',
        justifyContent:'center',
    },
    image:{
        height: 130,
        width: 130,
        borderRadius: 30
    },
    line: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1
      }
})