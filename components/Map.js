import React from 'react';
import { Dimensions, StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import MapView, { Marker, Callout, CalloutSubview } from 'react-native-maps';

import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

import data from "../dummyData";

console.log(data);


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const tooltipWidth = WIDTH * 0.5;
const tooltipHeight = HEIGHT * 0.2;



export default class Map extends React.Component {

    state = {
        start: false,
        questNow: null,
        region: {
            latitude: 0,
            longitude: 0,
            latitudeDelta: 1,
            longitudeDelta: 1,
        },
        latNow: 0,
        lonNow: 0,
    }

    // -----------------

    componentDidMount() {
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

                this.animateFunc();
            });
    };

    // -------------------


    start = () => {
        console.log("yesxx");
        this.setState({ openInfo: "id" })
    }

    openInfo = (id) => {
        console.log(id);
        this.setState({ openInfo: id })
    }


    animateFunc = () => {
        this.refs.scroll.animateCamera(
            {
                center: {
                    latitude: this.state.latNow,
                    longitude: this.state.lonNow,
                },
                pitch: 0,
                heading: 0,
                altitude: 0,
                zoom: 16
            }, 11000)
    }

    render() {

        return (
            <View style={styles.view} >
                <Button title="Center current Position"
                    onPress={this.animateFunc} />

                <MapView style={styles.map}
                    initialRegion={this.state.region}
                    onRegionChange={region => {
                        this.setState({ region });
                    }}
                    ref="scroll"
                    mapType="satellite">

                    <Marker
                        coordinate={{ longitude: this.state.lonNow, latitude: this.state.latNow }}
                        pinColor='blue'
                    />

                    {this.state.start == false ?
                        data.map((item, index) => {
                            return (
                                <Marker
                                    key={index}
                                    pinColor='yellow'

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
                        ""}
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
        flex: 1,
        /*         ...StyleSheet.absoluteFillObject, */
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




