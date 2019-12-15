import React, { useState, useContext, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, Image, Keyboard, TouchableOpacity, ScrollView } from 'react-native'
import { SegmentedControls } from 'react-native-radio-buttons'
import GlobalState from "../../globalstate/GlobalState"

const MainQuest = (props) => {
    const Context= useContext(GlobalState)
    const state=Context.state


    const [lat, setLat] = useState(state.lat)
    const [long, setLong] = useState(state.long)
    const [options, setOptions] = useState(["public", "private"])
    const [options1, setOptions1] = useState(["explore", "play"])
    const [title, setTitle] = useState("")
    const [info, setInfo] = useState("")
    const [ftext, setFtext] = useState("")
    const [mode, setMode] = useState("explore")
    const [status, setStatus] = useState("public")
    const [errMsj, setErrMsj] = useState(null)

    useEffect(() => {
        changes()
    }, [props.navigation.state])
    const changes = () => {
        if (Object.keys(props.navigation.state).includes("params")) {

            setLat(props.navigation.state.params.lat)
            setLong(props.navigation.state.params.long)
        }
    }

    const handleSubmit = () => {
       if(state.userData){
 if(mode.trim()!==""&& status.trim()!==""&& title.trim()!==""&& info.trim()!==""&&lat!==""&&long!==""&&ftext.trim()!==""){
            let data = {
            user:state.userData.username,
            mode: mode,
            status: status,
            title: title,
            info: info,
            latitude: Number(lat),
            longitude: Number(long),
            finishedText: ftext,
        }
        const strData=JSON.stringify(data)
        const createQuest=async()=>{
            await fetch("https://geo-app-server.herokuapp.com/newquest", {method: "POST", headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              }, body: strData } ).then(res=>res.json()).then(data=>{
                  if(data.success){
                        Context.setID(data.data._id)
                        props.navigation.navigate("PointDestination")
                  }else{
                    setErrMsj("server side error, try again")
                  }
                  
              })
        }
          createQuest() 
      
        }else{
            setErrMsj("Please fill all the Fields")
        }
        }else{
            setErrMsj("please Login to create Quest")
        }
        
    }
    return (
        <ScrollView>
            <View >
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <View style={{ width: "70%" }}>
                        <Text style={styles.text}>Longitude</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Longitude"
                            maxLength={100}
                            cc-number
                            keyboardType='numeric'
                            value={`${long}`}
                            onBlur={Keyboard.dismiss}
                            onChangeText={value => setLong(value)}
                        />
                        <Text style={styles.text}>Latitude</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Latitude"
                            cc-number
                            keyboardType='numeric'
                            maxLength={50}
                            value={`${lat}`}
                            onBlur={Keyboard.dismiss}
                            onChangeText={value => setLat(value)}
                        />
                    </View>
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                        <TouchableOpacity style={styles.buttonContainer} onPress={() => props.navigation.navigate("SelectMap", "Home")} >
                            <Image
                                style={{ width: 50, height: 50 }}
                                source={{ uri: 'http://pluspng.com/img-png/google-maps-png-google-maps-icon-1600.png' }}
                            />
                            <Text>Get cordinates from Map</Text>
                        </TouchableOpacity>
                    </View>


                </View>
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
                    multiline
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
                    <Text style={styles.saveButtonText}>Add Starting Point</Text>
                </TouchableOpacity>

                <View style={styles.errmsj}>
                    {errMsj ? <View>
                        <Text style={{color:"white",padding:5}}>{errMsj} </Text>
                        <TouchableOpacity
                            style={styles.crossButton}
                            onPress={() => setErrMsj(null)}
                        >
                            <Text style={styles.crossButtonText}>X</Text>
                        </TouchableOpacity>
                    </View> : null}
                </View>
            </View>

        </ScrollView>
    )
}
const styles = StyleSheet.create({
    errmsj: {
        position: "absolute",
        width: "70%",
        left: 50,
        top: 200,
        backgroundColor: "red",
        color: "white",
        textAlign: "center",
    },
    text: {
        fontSize: 16,
        padding: 10
    },
    textInput: {
        padding: 10,
        fontSize: 16
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
    },
   crossButton: {
        borderWidth: 1,
        borderColor: "green",
        backgroundColor: "green",
        padding: 5,
        margin:5,
    },
   crossButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center'
    }
})

export default MainQuest
