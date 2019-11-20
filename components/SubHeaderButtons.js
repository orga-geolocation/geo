import React, { useState } from 'react';
import { StyleSheet, View, Text, Button} from "react-native";
import {} from "native-base"
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
                    <Button success
                            style={styles.btn}
                            onPress={switchMode}
                            title={mode ? 'Explore' : 'Play'}
                            color='black'
                            />
                       
                   
                </View>
                <View style={{ flex: 1 }}>
                    <Button success
                            title='Categories'
                            color='black'
                            style={styles.btn}
                        />
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
    
});