import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button, Platform } from "react-native";
import { Picker, Icon } from "native-base"

export default function SubHeaderButtons(props) {

    const [ShowPicker, setShowPicker] = useState(true)
    const [category, setCategory] = useState('all')
    const pick = () => {
        setShowPicker(true)
    }
    return (
        <View style={styles.main}>
{/*             <View style={{ flex: 1, backgroundColor: '#31a350' }}>
                <TouchableOpacity style={styles.btn}
                    onPress={props.changeMode}
                >
                    <Text style={styles.btnText}>{props.mode === "explore" ? 'Explore' : 'Play'}</Text>
                </TouchableOpacity>

            </View> */}

<View style={{ flex: 1, backgroundColor: '#31a350' }}>
                <TouchableOpacity style={styles.btn}
                    onPress={props.changeMode}
                >
                    <Text style={styles.btnText}>{props.mode === "explore" ? 'Explore Mode' : 'Play Mode'}</Text>
                </TouchableOpacity>

            </View>


            {/* <View style={{ flex: 1, backgroundColor: 'blue' }}>
                <TouchableOpacity style={styles.btn}
                    onPress={togglePicker}
                >
                    <Text style={{ fontSize: 17, color: 'white' }}>Categories</Text>
                </TouchableOpacity>
            </View>
        */}
{/*             <View style={styles.pickerStyle}>
                <Picker
                    selectedValue={category}
                    mode="dropdown"
                    textStyle={{ color: 'white',
                    borderWidth: 1,
                    borderColor: "black", }}
                    style={{ color: "#fff", 
                    backgroundColor: "#31a350", 

                    height: 55, 
                    width: 220, 
                    padding:0}}
                    placeholder="All Categories"
                    placeholderStyle={{ color: "white", fontSize: 17 }}
                    iosIcon={<Icon name="arrow-down" style={{ color: 'white' }} />}
                    onValueChange={(itemValue, itemIndex) => {
                        setCategory(itemValue)
                    }
                    }>
                    <Picker.Item label="All Categories" value="all" />
                    <Picker.Item label="Museum" value="museum" />
                    <Picker.Item label="Parks" value="parks" />
                    <Picker.Item label="Map" value="map" />
                    <Picker.Item label="Quest" value="quest" />
                </Picker>
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        justifyContent: 'center',
    },


    btn: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
        paddingTop: 0,
        margin: 5,
        backgroundColor: "#fff", // 46bf67
        borderColor: "#217e3a",
        borderWidth: 1,
/*         borderTopWidth: 0,
        borderBottomWidth: 0, */

    },
    btnText: {
        fontSize: 16,
        color: '#2d9349',
        margin: 5,
        padding: 0,
    },


    pickerStyle: {
        width: '50%'
    }


});