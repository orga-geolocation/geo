import React, { useState } from 'react';
import { StyleSheet, View, Text, Picker, ScrollView, TouchableOpacity} from "react-native";
//import TogglePicker from 'react-native-toggle-picker'
//import ToggleBox from 'react-native-show-hide-toggle-box'
//import DropdownMenu from 'react-native-dropdown-menu';




export default function SubHeaderButtons(props){
    // state = {
    //     mode: true
    // }

    const [mode, setMode] = useState(true)

    const switchMode = () => {
        setMode(!mode)
    }
    // picker state
    //const [options, setOptions] = useState(null)

      const [text, setText] = useState(false)

      togglePicker = () => {
          setText(!text)
      }

        return (
            <View style={styles.main}>
                <View style={{ flex: 1, backgroundColor:'blue'}}>
                    <TouchableOpacity   style={styles.btn}
                                        onPress={switchMode}
                                        >
                            
                            <Text style={{fontSize: 17,color: 'white'}}>{mode ? 'Explore' : 'Play'}</Text>
                           
                            </TouchableOpacity>
                          
                </View>

                    <View style={{ flex: 1, backgroundColor:'blue'}}>
                     <TouchableOpacity style={styles.btn}
                                        onPress={togglePicker}
                                >
                         
                         
                                    <Text style={{fontSize: 17,color: 'white'}}>Categories</Text>
                         
                         </TouchableOpacity>
                        {/* <Picker
                            selectedValue={options}
                            style={{fontSize: 15}} 
                            onValueChange={(itemValue, itemIndex) =>
                            setOptions(options)
                            }>
                            <Picker.Item label="GEO" value="Geo" />
                            <Picker.Item label="Map" value="Map" />
                            <Picker.Item label="Play" value="Play" />
                            <Picker.Item label="Explore" value="explore" />
                </Picker> */}
                </View>

                </View>    
                 
        )
    }



const styles = StyleSheet.create({

 
    main: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 40,
        
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:0.2,
        paddingTop: 5,
        

        
    },
    
});