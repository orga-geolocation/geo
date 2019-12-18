import React from 'react';
import { Dimensions, SafeAreaView, View, Image, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';

import HomeScreen from '../screens/Mapscreen';
import Player from '../screens/Player';
import FAQ from '../screens/FqaScreen';
import About from '../screens/About';
import Statistics from '../screens/Statistics'
import CreateQuest from '../screens/createquest';

const WIDTH = Dimensions.get('window').width;
const DrawerNavigatorConfig = {
    drawerWidth: WIDTH * 0.43,
}

const headerNavigator = (props) => (
    <SafeAreaView style={styles.container}>
        <View style={styles.view}>
            <Image
                source={require('../assets/logogrey.png')}
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
    Home: { screen: HomeScreen },
    "My Data": { screen: Player },
    "Create Quest": { screen: CreateQuest },
    Statistics: { screen: Statistics },
    FAQ: { screen: FAQ },
    About: { screen: About }
},
    {
        DrawerNavigatorConfig,
        contentComponent: headerNavigator,
        contentOptions: {
            activeTintColor: '#36bb5a',
            inactiveTintColor: 'white',
        },
        drawerBackgroundColor: '#262A2C'
    }
)

export default createAppContainer(DrawerNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view: {
        height: 180,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 130,
        width: 130,
        marginTop: 38,
        borderRadius: 30
    },
    line: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1
    }
})