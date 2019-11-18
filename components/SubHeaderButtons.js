import React, { useState } from 'react';
import { StyleSheet, View, Text } from "react-native";
import { Button } from "native-base"
import { withOrientation } from 'react-navigation';

export default function SubHeaderButtons(props){
    // state = {
    //     mode: true
    // }

    const [mode, setMode] = useState(true)

    const switchMode = () => {
        setMode(!mode)
    }

    
        return (
            <View style={styles.main}>
                <View style={{ flex: 1 }}>
                    <Button style={styles.btn}
                        onPress={switchMode}>
                        <Text  style={styles.text}> {mode ? 'Explore' : 'Play'} </Text>
                    </Button>
                </View>
                <View style={{ flex: 1 }}>
                    <Button style={styles.btn} ><Text style={styles.text}>Categories</Text></Button>
                </View>
            </View>
        )
    }



const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:0.2

        
    },
    text: {
        color: "white"
    }
});