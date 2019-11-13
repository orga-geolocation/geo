import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Container, Header } from 'native-base';

export default class Menu extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Ionicons
                        name="md-menu"
                        color="#ffffff"
                        size={35}
                        style={styles.icon}
                        onPress={() => {
                            this.props.navigation.toggleDrawer()
                        }}
                    />
                </Header>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        zIndex: 9,
        position: "absolute",
        color: 'black',
        left: 20,
        
    }
})
