import React, {Component} from 'react';
import { StyleSheet, Text, View,TouchableHighlight,Image } from 'react-native';


export default class Screen2 extends Component {
    static navigationOptions = {
        drawerLabel: 'News',
        

    }
    render() {
        return (
            <View style={styles.myView}>
                <Text style={styles.text}>HomeScreen</Text>
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
        backgroundColor: 'blue',
    },
    myText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    text: {
        fontSize: 20,
        color: 'orange',
    }
})