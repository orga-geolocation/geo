import React from 'react';
import {Dimensions,SafeAreaView,ScrollView,View,Image,StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator,DrawerItems}from 'react-navigation-drawer';
import HomeScreen from '../screen/HomeScreen';  
import Player from '../screen/Player';
import NewQuest from '../screen/NewQuest';

const WIDTH = Dimensions.get('window').width;
const DrawerNavigatorConfig = {
    drawerWidth: WIDTH*0.43,
}

const headerNavigator = (props) => (
    <SafeAreaView style={styles.container}>
    <View style={styles.view}>
        <Image 
            source={require('../assets/hm.png')}
            style={styles.image}
            
        />
    </View>
        <ScrollView>
            <DrawerItems  {...props}/> 
        </ScrollView>
    
    </SafeAreaView>

)

const DrawerNavigator = createDrawerNavigator({
    Home: {screen: HomeScreen},
    NewPlayer : {screen :Player},
    NewQuest: {screen:NewQuest}
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
        height: 120,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image:{
        height: 130,
        width: 130,
        borderRadius: 30
    }
})