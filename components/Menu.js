import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Container, Header } from 'native-base';

export default class Menu extends Component {
    render() {
        return (
            
                    <Ionicons
                        name="md-menu"
                        color="#ffffff"
                        size={35}
                        style={styles.icon}
                        onPress={() => {
                            this.props.navigation.toggleDrawer()
                        }}
                    />
    
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        zIndex: 9,
        position: "absolute",
        top: 10,
        left: 20
    }
})
