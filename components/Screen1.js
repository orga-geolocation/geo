import React, {Component} from 'react';
import { StyleSheet, Text, View,TouchableHighlight,Image } from 'react-native';


export default class Screen1 extends Component {
    static navigationOptions = {
        drawerLabel: 'Player',
        

    }
    render() {
        return (
            <View style={styles.myView}>
                <Text style={styles.text}>Player</Text>
                <TouchableHighlight onPress={()=> this.props.navigation.goBack()}>
                    <Text style={styles.myText}>Go Back</Text>
                </TouchableHighlight>
                
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    myView : {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    },
    myText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    text: {
        fontSize: 26,
        color: 'black',
    }
})