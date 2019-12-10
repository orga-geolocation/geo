import React, { useState } from 'react'
import { View, Text ,StyleSheet,TextInput, Keyboard,TouchableOpacity, ScrollView} from 'react-native'
import { SegmentedControls } from 'react-native-radio-buttons'

const MainQuest = (props) => {
    const [form, setForm] = useState(false)
    const [lat, setLat] = useState(null)
    const [long, setLong] = useState(null)
    const [options, setOptions] = useState(["public", "private"])
    const [options1, setOptions1] = useState(["explore", "play"])
    const [title, setTitle] = useState("")
    const [info, setInfo] = useState("")
    const [ftext, setFtext] = useState("")
    const [mode, setMode] = useState("explore")
    const [status, setStatus] = useState("public")

    const handleSubmit = () => {
        let data = {
            mode: mode,
            status: status,
            title: title,
            info: info,
            latitude: lat,
            longitude: long,
            finishedText: ftext,
        }

        console.log("form submit")
        props.navigation.navigate("Point")
    }
    return (
        <ScrollView>
            <View>

                <TouchableOpacity style={styles.buttonContainer} onPress={() => setForm(!form)}>
                    {form ? <Text>Cancel</Text> : <Text>Create Quest</Text>}
                </TouchableOpacity>

                <Text style={styles.text}>Longitude</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Longitude"
                    maxLength={100}
                    onBlur={Keyboard.dismiss}
                    onChangeText={value => setLong(value)}
                />
                <Text style={styles.text}>Latitude</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Latitude"
                    maxLength={50}
                    onBlur={Keyboard.dismiss}
                    onChangeText={value => setLat(value)}
                />



                <Text style={styles.text}>Title</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Give Tile to your Quest"
                    maxLength={100}
                    onBlur={Keyboard.dismiss}
                    onChangeText={value => setTitle(value)}
                />
                <Text style={styles.text}>Description</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="some info about quest"
                    maxLength={100}
                    onBlur={Keyboard.dismiss}
                    onChangeText={value => setInfo(value)}
                />
                <Text style={styles.text}>Finishing Text</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Finishing text"
                    maxLength={100}
                    onBlur={Keyboard.dismiss}
                    onChangeText={value => setFtext(value)}
                />
                <SegmentedControls
                    tint={'black'}
                    selectedTint={'white'}
                    backTint={'green'}
                    options={options}
                    allowFontScaling={false} // default: true
                    onSelection={() => setStatus((prev) => {
                        if (prev === "public") {
                            return "private"
                        } else {
                            return "public"
                        }
                    })}
                    selectedOption={status}
                    optionContainerStyle={{ flex: 1, paddingTop: 10, paddingBottom: 10 }}
                    containerStyle={{ marginTop: 10 }}
                />
                <SegmentedControls
                    tint={'black'}
                    selectedTint={'white'}
                    backTint={'green'}
                    options={options1}
                    allowFontScaling={false} // default: true
                    onSelection={() => setMode((prev) => {
                        if (prev === "explore") {
                            return "play"
                        } else {
                            return "explore"
                        }
                    })}
                    selectedOption={mode}
                    optionContainerStyle={{ flex: 1, paddingTop: 10, paddingBottom: 10 }}
                    containerStyle={{ marginTop: 10, marginBottom: 10 }}
                />


                <TouchableOpacity
                    style={styles.saveButton}
                    onPress={handleSubmit}
                >
                    <Text style={styles.saveButtonText}>next</Text>
                </TouchableOpacity>


                {form ? <Text style={styles.text}> </Text> : null}
            </View>

        </ScrollView>
    )
}
const styles = StyleSheet.create({
    text:{
      fontSize:16,
      padding:10
    },
    textInput:{
      padding:10,
      fontSize:16
    },
    saveButton: {
      borderWidth: 1,
      borderColor: "green",
      backgroundColor: "green",
      padding: 10
    },
    saveButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
      textAlign: 'center'
    }
  })

export default MainQuest
