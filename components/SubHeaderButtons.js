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
            <View style={{ flex: 1, backgroundColor: '#31a350' }}>
                <TouchableOpacity style={styles.btn}
                    onPress={props.changeMode}
                >
                    <Text style={{ fontSize: 19, color: 'white' }}>{props.mode === "explore" ? 'Explore' : 'Play'}</Text>
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
        <View style={styles.pickerStyle}>
        <Picker
        selectedValue={category}
        mode="dropdown"
        textStyle={{color:'white'}}
        style={{color:"#fff", backgroundColor:"#31a350", height:60, width: 220, borderTopLeftRadius:0, borderBottomLeftRadius: 0}}
        placeholder="All Categories"
        placeholderStyle={{ color: "white", fontSize: 19}}
        iosIcon={<Icon name="arrow-down" style ={{color: 'white'}} />}
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
    </View>
    </View> 
    )
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 60,
    },
    btn: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0.2,
        paddingTop: 5,
        fontSize: 18
    },
    pickerStyle : {
        width : '50%'
    }

      
});