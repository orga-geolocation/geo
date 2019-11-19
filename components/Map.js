import React from 'react';
import { Dimensions, StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import MapView, { Marker, Callout, CalloutSubview } from 'react-native-maps';

import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

import data from "../dummyData";
import { ScrollView } from 'react-native-gesture-handler';

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
            latitude: 52.522445,
            longitude: 13.485993,
            latitudeDelta: 96.89,
            longitudeDelta: 96.89,
        },
        latNow: 0,
        lonNow: 0,


        loadFirst: true,
        followPosition: false,
        showBox: false,
        showBoxId: 0,
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
                timeInterval: 1200
            },
            newLocation => {
                let coords = newLocation.coords;
                this.setState({ latNow: coords.latitude, lonNow: coords.longitude })

                if (this.state.loadFirst == true) {
                    this.centerCurrentLocationWithZoom();
                    this.setState({ loadFirst: false })
                }

                if (this.state.followPosition == true) {
                    this.centerCurrentLocation();
                }



            });
    };

    // -------------------

    start = () => {
        console.log("quest started");
        this.setState({ start: true })
    }


    centerCurrentLocation = () => {
        this.refs.scroll.animateCamera(
            {
                center: {
                    latitude: this.state.latNow,
                    longitude: this.state.lonNow,
                },
                pitch: 0,
                heading: 0,
                altitude: 0,
            }, 1000)
    }

    centerCurrentLocationWithZoom = () => {
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
            }, 1000)
    }


    followPositionsSwitch = () => {
        this.setState({ followPosition: !this.state.followPosition })
    }


    openInfo = (id) => {

/*         this.setState({ showBox: true })
 */        console.log(id);
    }





    render() {

        console.log("render");

        return (
            <View style={styles.view} >
                <Button title="Go to current Position"
                    onPress={this.centerCurrentLocation} />

                <Button title={this.state.followPosition ? 'Follow Your Position: ON' : 'Follow Your Position: OFF'}
                    onPress={this.followPositionsSwitch} />



                <MapView style={styles.map}
                    initialRegion={this.state.region}
                    /*                     onRegionChange={region => {
                                            this.setState({ region });
                                        }} */
                    ref="scroll"
                    mapType="standard"

                    /* showsUserLocation
                    followsUserLocation	 */
                    onPress={() => {
                        this.setState({ showBox: false })
                    }}
                >


                    {/* current position marker */}
                    {this.state.loadFirst == false &&
                    <Marker
                        coordinate={{ longitude: this.state.lonNow, latitude: this.state.latNow }}
                        icon={require('../assets/pin.png')}

                    />}

                    {/* load all markers (starting positions) from data */}
                    {this.state.start == false ?
                        data.map((item, index) => {
                            return (
                                <Marker
                                    key={index}
                                    icon={require('../assets/pin2.png')}
                                    coordinate={{ longitude: item.longitude, latitude: item.latitude }}
                                    onPress={() => {
                                        this.setState({ showBox: false })
                                    }}
                                >
                                    <Callout tooltip={false}
                                        onPress={() => {
                                            this.setState({ showBox: true })
                                            this.setState({ showBoxId: item.id })
                                            this.openInfo(item.id)
                                        }}
                                    >
                                        <View>
                                            <Text>{item.title}</Text>
                                            <Text>{item.description}</Text>
                                            <Text>More Info</Text>
                                        </View>
                                    </Callout>
                                </Marker>
                            )
                        })
                        : <Text>hh</Text>}
                </MapView>

                {<View style={styles.infoBox}>
                    {this.state.showBox == true ?
                        <View style={styles.infoBoxInner}>
                            <Text>{data.find(x => x.id === this.state.showBoxId).title}</Text>
                            <Text>{data.find(x => x.id === this.state.showBoxId).description}</Text>
                            <Text>{data.find(x => x.id === this.state.showBoxId).points.length} Points: </Text>
                            <Text>
                                {data.find(x => x.id === this.state.showBoxId).points.map((item, index) => {
                                    return (<Text key={index}>{item.titlePoint}</Text>)
                                })}
                            </Text>
                            <Button title="Start" style={{ zIndex: 20 }} onPress={this.start} />
                        </View>
                        : <Text></Text>}
                </View>}

            </View>
        );
    }
}

const styles = StyleSheet.create({

    infoBox: {
        position: "absolute",
        bottom: 30,
        flex:1,
        left: 20,
        right: 20,
        height:300,
        paddingVertical: 10,
    },
    infoBoxInner: {
        flex: 1,
        backgroundColor: "grey",
    },

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




