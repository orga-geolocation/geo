import React, { Component } from 'react'
import {StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class Menu extends Component {
    render() {
        return (
            <View>
                <Ionicons 
                name="md-menu"
                color ="#000000"
                size= {35}
                style={styles.icon}
                onPress={() =>{this.props.navigation.toggleDrawer()


                }}
                
                />
                <Text></Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        zIndex: 9,
        position:"absolute",
        top:40,
        left:20
    }
})
