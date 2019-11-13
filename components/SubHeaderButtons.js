import React, { Component } from 'react';
import { StyleSheet, View, Text } from "react-native";
import { Button } from "native-base"
import { withOrientation } from 'react-navigation';

export default class SubHeaderButtons extends Component {
    state = {
        mode: true
    }

    switchMode = () => {
        this.setState({ mode: !this.state.mode })
    }

    render() {
        return (
            <View style={styles.main}>
                <View style={{ flex: 1 }}>
                    <Button style={styles.btn}
                        onPress={this.switchMode}>
                        <Text  style={styles.text}> {this.state.mode ? 'Explore' : 'Play'} </Text>
                    </Button>
                </View>
                <View style={{ flex: 1 }}>
                    <Button style={styles.btn} ><Text style={styles.text}>Categories</Text></Button>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    },
    text: {
        color: "black"
        }
});