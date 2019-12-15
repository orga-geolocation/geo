import React, { useState, useContext, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, Image, Keyboard, TouchableOpacity, ScrollView } from 'react-native'
import GlobalState from "../../globalstate/GlobalState"

const PointDestination = (props) => {
    const { state } = useContext(GlobalState)

    const [lat, setLat] = useState(state.lat)
    const [long, setLong] = useState(state.long)
    const [title, setTitle] = useState("")
    const [info, setInfo] = useState("")
    const [errMsj, setErrMsj] = useState(null)
    const [des, setDes] = useState(0)
    const [array, setArray] = useState(["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th"])

    useEffect(() => {
        changes()
    }, [props.navigation.state])
    const changes = () => {
        if (props.navigation.state.params !== undefined) {

            setLat(props.navigation.state.params.lat)
            setLong(props.navigation.state.params.long)
        }
    }

    const handleSubmit = () => {
       if (title.trim() !== "" && info.trim() !== "" && lat !== "" && long !== "") {
            let data = {
                id: des + 1,
                title: title,
                info: info,
                latitude: Number(lat),
                longitude: Number(long),
            }
            const strData = JSON.stringify(data)
            const createPoint = async () => {
                await fetch(`https://geo-app-server.herokuapp.com/addpoint/${state.id}`, {
                    method: "POST", headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }, body: strData
                }).then(res => res.json()).then(data => {
                    if (data.success) {
                        setTitle("")
                        setInfo("")
                        setDes(des + 1)
                        setErrMsj("Point ADDED")
                    } else {
                        setErrMsj("server side error, try again")
                    }

                })
            }
           createPoint() 


        } else {
            setErrMsj("please fill all fields")
        } 

    }

    const finishedQuest = () => {
     questdone()  
    }
    const questdone = async () => {
        await fetch(`https://geo-app-server.herokuapp.com/finishquest/${state.id}`).then(res => res.json()).then(data => {
            if (data.success) {
                props.navigation.navigate("Home")

            } else {
                setErrMsj(data.msj)

             
            }
        })
    }
    return (
        <ScrollView>
            <View >
                <Text style={styles.heading}>Enter Your {array[des]} Destination</Text>
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
                        <TouchableOpacity style={styles.buttonContainer} onPress={() => props.navigation.navigate("SelectMap", "PointDestination")} >
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

                <TouchableOpacity
                    style={styles.saveButton}
                    onPress={handleSubmit}
                >
<Text style={styles.saveButtonText}>Add {array[des]} Destination</Text>
                </TouchableOpacity>
                {des >= 1 ? (<TouchableOpacity
                    style={styles.saveButton}
                    onPress={finishedQuest}
                >
                    <Text style={styles.saveButtonText}>done</Text>
                </TouchableOpacity>) : null}

            </View>
            <View style={styles.errmsj}>
                {errMsj ? <View>
                    <Text style={{ color: "white", padding: 5 }}>{errMsj} </Text>
                    <TouchableOpacity
                        style={styles.crossButton}
                        onPress={() => setErrMsj(null)}
                    >
                        <Text style={styles.crossButtonText}>X</Text>
                    </TouchableOpacity>
                </View> : null}
            </View>

        </ScrollView>
    )
}
const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        backgroundColor: "yellow",
        textAlign: "center",
        padding: 10
    },
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
        padding: 10,
        margin: 5,
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
        margin: 5,
    },
    crossButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center'
    }
})

export default PointDestination
