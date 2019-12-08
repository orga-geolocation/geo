import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker, Callout, CalloutSubview } from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import { getDistance } from 'geolib';

export default function Map(props) {
    /* console.log(props.mode) */

    const [state, setState] = useState({
        region: {
            latitude: 52.522445,
            longitude: 13.485993,
            latitudeDelta: 96.89,
            longitudeDelta: 96.89,
        }
    })
    let [loadFirst, setLoadFirst] = useState(true)
    const [questMode, setQuestMode] = useState(null)
    const [mapType, setMapType] = useState("satellite")
    const [longitudeNow, setLongitudeNow] = useState(0)
    const [latitudeNow, setLatitudeNow] = useState(0)
    const [questID, setQuestID] = useState(null)
    const [questStarted, setQuestStarted] = useState(false)
    const [lonToFind, setLonToFind] = useState(null)
    const [latToFind, setLatToFind] = useState(null)


    const [showBox, setShowBox] = useState(false)

    const [data1, setdata1] = useState([])


  


    useEffect(() => {

        getLocationAsync();

    }, [props.mode])

    const getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);

        await Location.watchPositionAsync(
            {
                enableHighAccuracy: true,
                distanceInterval: 0,
                timeout: 25000,
                maximumAge: 3600000,
                distanceFilter: 0,
            },
            newLocation => {
                let coords = newLocation.coords;
                changedState = state;
                setLongitudeNow(coords.longitude)
                setLatitudeNow(coords.latitude)

                if (loadFirst === true) {
                    setLoadFirst(prev => {
                        loadFirst = false
                    });
                    setLoadFirst(false);
                    centerCurrentLocationWithZoom(coords.latitude, coords.longitude);
                }

            });
    };

    const mapView = useRef(null);

    const centerCurrentLocationWithZoom = (lat, lon) => {
        if (longitudeNow !== 0) {
            lat = latitudeNow;
            lon = longitudeNow;
        }
        mapView.current.animateCamera(
            {
                center: {
                    latitude: lat,
                    longitude: lon,
                },
                altitude: 0,
                zoom: 16
            }, 2000)
    }
    const MapPress = (e) => {
        console.log(e.nativeEvent.coordinate.latitude)
        let region = {
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
            latitudeDelta: 96.89,
            longitudeDelta: 96.89,
        }
        setLatitudeNow(region.latitude)
        setLongitudeNow(region.longitude)
        console.log(region)
    }

    return (
        <View style={styles.view} >

            <View style={{ flex: 1, }}>

                <View style={{ flex: 1 }}>

                    <MapView style={styles.map}
                        initialRegion={state.region}
                        onRegionChange={region => {
                            setLatitudeNow(latitudeNow)
                            setLongitudeNow(longitudeNow)
                        }}
                        ref={mapView}
                        mapType={mapType}
                        zoomEnabled={true}
                        onPress={MapPress}
                    >

                        {
                            loadFirst === false &&
                            <Marker
                                coordinate={{ longitude: longitudeNow, latitude: latitudeNow }}
                                pinColor="darkgreen"
                            />
                        }
                        {
                            questStarted === false &&
                            data1.map((item, index) => {
                                return (
                                    <Marker
                                        key={index}
                                        coordinate={{ longitude: item.longitude, latitude: item.latitude }}
                                        style={{ zIndex: 6000 }}
                                    >
                                        <Callout tooltip={false}
                                            onPress={() => {
                                                setShowBox(true)
                                                setQuestID(item.id)
                                            }}
                                        >
                                            <View>
                                                <Text>{item.title}</Text>
                                                <Text>More Info</Text>
                                            </View>
                                        </Callout>
                                    </Marker>
                                )
                            })
                        }

                        {
                            (questStarted === true && questMode === "explore") &&
                            <Marker
                                coordinate={{ longitude: lonToFind, latitude: latToFind }}
                                pinColor="yellow"
                            />
                        }

                    </MapView >

                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({

    infoBox: {
        position: "absolute",
        flex: 1,
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
/*         padding: 10,
 *//*      margin: 20,
 */        backgroundColor: "white",
        borderColor: "#279144",
        borderWidth: 2,
    },

    startedBox: {
        position: "absolute",
        bottom: 30,
        flex: 1,
        left: 20,
        right: 20,
        height: 100,
        paddingVertical: 10,
        backgroundColor: "yellow",
        borderColor: "white",
        borderWidth: 6,
    },
    foundBox: {
        position: "absolute",
        bottom: 160,
        flex: 1,
        left: 20,
        right: 20,
        height: 200,
        paddingVertical: 10,
        backgroundColor: "yellow",
        borderColor: "white",
        borderWidth: 6,
    },
    iconsOnMap: {
        width: "100%",
        padding: 8,
        backgroundColor: "lightgrey",
        height: 36,
        flexDirection: "row",
        justifyContent: "space-between"

    },
    view: {
        flex: 1,
    },

    map: {
        flex: 1,
    },

})


