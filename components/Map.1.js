import React from 'react';
import { Dimensions, StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import MapView, { Marker, Callout, CalloutSubview } from 'react-native-maps';

import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const tooltipWidth = WIDTH * 0.5;
const tooltipHeight = HEIGHT * 0.2;

const data =
    [
        {
            id: 1,
            title: "Alex Tour",
            description: "Hello … this a trip ...",
            latitude: 52.522445,
            longitude: 13.485993,
            timestamp: "time",
            updatedTime: "time",
            finishedText: "Yes you did the amazing trip alexander!",
            points: [
                {
                    id: 1,
                    titlePoint: "TV-Tower",
                    info: "Here you are at the tv - tower: height: 312m",
                    latitude: 52.522445,
                    longitude: 13.485993,
                    image: "",
                },
                {
                    id: 2,
                    titlePoint: "Brunnen",
                    info: "Here you are at the brunnen. nice",
                    latitude: 52.522445,
                    longitude: 13.485993,
                    image: "",
                },
                {
                    id: 3,
                    titlePoint: "Rathaus",
                    info: "Here you are at Rathaus. Welcome politic!",
                    latitude: 52.522445,
                    longitude: 13.485993,
                    image: "",
                },
            ]
        },
        {
            id: 2,
            title: "DCI Tour",
            description: "Hello … This is the DCI TOUR",
            latitude: 52.5236609,
            longitude: 13.4864247,
            timestamp: "time",
            updatedTime: "time",
            finishedText: "Yes you did the amazing dci tour",
            points: [
                {
                    id: 1,
                    titlePoint: "smoking area",
                    info: "Here you are at the tv - tower: height: 312m",
                    latitude: 52.522445,
                    longitude: 13.485993,
                    image: "",
                },
                {
                    id: 2,
                    titlePoint: "kitchen",
                    info: "Here you are at the brunnen. nice",
                    latitude: 52.522445,
                    longitude: 13.485993,
                    image: "",
                },
                {
                    id: 3,
                    titlePoint: "classroom",
                    info: "Here you are at Rathaus. Welcome politic!",
                    latitude: 52.522445,
                    longitude: 13.485993,
                    image: "",
                },
            ]
        }
    ]

export default class Map extends React.Component {

    state = {

        start: false,
        questNow: null,
        region: {
            latitude: 52.523662,
            longitude: 13.486350,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
        },

        latNow: 0,
        lonNow: 0,
    }








    // -----------------

    componentDidUpdate() {
        this.getLocationAsync();
    }

    getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                locationResult: 'Permission to access location was denied',
            });
        } else {
            this.setState({ hasLocationPermissions: true });
        }

        let location = await Location.watchPositionAsync(
            {
                enableHighAccuracy: true,
                distanceInterval: 0,
                timeout: 25000,

                maximumAge: 3600000,
                distanceFilter: 0,
                timeInterval: 500
            },
            newLocation => {
                let coords = newLocation.coords;
                this.setState({ latNow: coords.latitude, lonNow: coords.longitude })
/*                 console.log(coords);
 */            });
    };




    // -------------------











    start = () => {
        console.log("yes");
    }

    openInfo = (id) => {
        console.log(id);
        this.setState({ openInfo: id })
    }


    render() {

        console.log("yes1");

        return (

            <View style={styles.view} >




                <MapView style={styles.map}

                    region={this.state.region}
                    mapType="satellite"
                >

{/* 
                    <Marker
                        coordinate={{ longitude: this.state.lonNow, latitude: this.state.latNow }}
                    /> */}


                    {/* this.state.start == false ?
                        data.map((item, index) => {
                            return (
                                <Marker
                                    key={index}
                                    coordinate={{ longitude: item.longitude, latitude: item.latitude }}
                                    onPress={() => this.openInfo(item.id)}
                                >
                                    <Callout tooltip={false}
                                    >
                                        <View>
                                            <Text>{item.title}</Text>
                                            <Text>{item.description}</Text>
                                            <Button title="Start" style={{ zIndex: 20 }} onPress={this.start} />
                                        </View>
                                    </Callout>
                                </Marker>
                            )
                        })
                        :
                        "" */}

                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    view: {
        flex: 1,
    },

    map: {
        ...StyleSheet.absoluteFillObject,
    },
    bubble: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
    },

    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        backgroundColor: 'transparent',
    },

    markerInfo: {
        top: 200,
        zIndex: 200,
        position: "absolute",
        backgroundColor: 'lightgreen',
        borderColor: 'green',
        borderRadius: 20,
        borderWidth: 4,
        paddingHorizontal: 1,
        paddingVertical: 1,


    }
})




