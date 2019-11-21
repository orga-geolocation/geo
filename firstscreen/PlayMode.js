import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
export default class PlayMode extends Component {
    render() {
        console.log(this.props);
        return (
            <View style={styles.container}>
                <Text>Play Mode</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});