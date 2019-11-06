import React, {Component} from 'react';
import { StyleSheet, Text, View,TouchableHighlight,Image } from 'react-native';
import {DrawerActions} from 'react-navigation';

export default class HomeScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        

    }
    render() {
        return (
            <View style={styles.myView}>
                <TouchableHighlight onPress={()=> this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                    <Text style={styles.myText}>Open</Text>
                </TouchableHighlight>
                <Text style={styles.text}>HomeScreen</Text>
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    myView : {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    myText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    text: {
        fontSize: 26,
        color: 'green',
    }
})