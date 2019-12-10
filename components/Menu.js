import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function Menu(props) {
    return (
        <Ionicons
            name="md-menu"
            color="#ffffff"
            size={40}
            style={styles.icon}
            onPress={() => {
                props.navigation.toggleDrawer()
            }}
        />
    )
}

const styles = StyleSheet.create({
    icon: {
        zIndex: 9,
        paddingLeft: 20,
        paddingTop: 7,
    }
})
