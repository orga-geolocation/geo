import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout, CalloutSubview } from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getDistance } from 'geolib';
/* import data from "../dummyData"; */
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

    let [followPosition, setFollowPosition] = useState(false)

    const [mapType, setMapType] = useState("satellite")
    const [longitudeNow, setLongitudeNow] = useState(0)
    const [latitudeNow, setLatitudeNow] = useState(0)
    const [questID, setQuestID] = useState(null)
    const [questStarted, setQuestStarted] = useState(false)
    const [currentPoint, setCurrentPoint] = useState(null)
    /*  const [questID, setQuestID] = useState(2)
        const [questStarted, setQuestStarted] = useState(true)
        const [currentPoint, setCurrentPoint] = useState(2)    */
    const [currentPointTitle, setCurrentPointTitle] = useState("")
    const [foundPoint, setFoundPoint] = useState(false)
    const [howManyPoints, setHowManyPoints] = useState(null)
    const [lonToFind, setLonToFind] = useState(null)
    const [latToFind, setLatToFind] = useState(null)
    const [showBox, setShowBox] = useState(false)
    const [data1, setdata1] = useState([])

    useEffect(() => {
        getLocationAsync();
        if (props.mode === "explore") {
            datafromExpServer()
        } else {
            datafromPlayServer()
        }

    }, [props.mode])

    const datafromExpServer = async () => {
        await fetch("https://geo-app-server.herokuapp.com/getallexpquests")
            .then(res => res.json())
            .then(data => {
                setdata1(data.doc)
                /* console.log(data.doc) */
            }).catch(err => {
                console.log(err.message)
            })
    }
    const datafromPlayServer = async () => {
        await fetch("https://geo-app-server.herokuapp.com/getallplayquests")
            .then(res => res.json())
            .then(data => {
                setdata1(data.doc)
                /* console.log(data.doc) */
            }).catch(err => {
                console.log(err.message)
            })
    }
    const getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        /*        if (status !== 'granted') {
                   this.setState({
                       locationResult: 'Permission to access location was denied',
                   });
               } else {
                   this.setState({ hasLocationPermissions: true });
               } */

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
                /*  console.log("loadfirst!hooks" + loadFirst); */


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

    const centerCurrentLocation = () => {
        mapView.current.animateCamera(
            {
                center: {
                    latitude: latitudeNow,
                    longitude: longitudeNow,
                },
                /*                 pitch: 0,
                                heading: 0, */
                altitude: 0,
            }, 2000)
    }



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
                /*                 pitch: 0,
                                heading: 0, */
                altitude: 0,
                zoom: 16
            }, 2000)
    }

    prepareSetQuest = (questID, pointNow) => {
        setHowManyPoints(data1.find(x => x.id === questID).points.length)
        setCurrentPoint(pointNow)
        setCurrentPointTitle(data1.find(x => x.id === questID).points.find(y => y.id === pointNow).title)
        setLonToFind(data1.find(x => x.id === questID).points.find(y => y.id === pointNow).longitude)
        setLatToFind(data1.find(x => x.id === questID).points.find(y => y.id === pointNow).latitude)
    }

    start = (questID) => {
        console.log(" -> Quest started");
        /* console.log(questID); */
        setShowBox(false) // close InfoBox
        let pointNow = 1; // initial point
        console.log("   -> Point to find: " + pointNow);

        prepareSetQuest(questID, pointNow)
        setQuestStarted(true) // set quest to start
    }

    /* calculate distance to searching point and if the point
     was found -> setFoundPoint to true */
    calcMetersAway = (accuracy) => {
        if (latToFind !== null && foundPoint === false) {
            if (getDistance({ latitude: latitudeNow, longitude: longitudeNow },
                { latitude: latToFind, longitude: lonToFind }) <= accuracy) {
                setFoundPoint(true)
            }
        }
    }

    loadNextPoint = () => {
        setFoundPoint(false)
        pointNow = currentPoint + 1
        prepareSetQuest(questID, pointNow)
        console.log("   -> Point to find: " + pointNow);
        // store/save quest as running
        // and store/save current point
    }

    cancelQuest = () => {
        console.log(" <- Quest canceled");
        setFoundPoint(false)
        setLatToFind(null)
        setLonToFind(null)
        setHowManyPoints(null)
        setShowBox(false)
        setQuestID(null)
        setQuestStarted(false)
        setCurrentPoint(null)
        setCurrentPointTitle("")
    }

    solvedQuest = () => {
        console.log("!!! Quest SOLVED !!!");
        // store/save quest as solved!
    }

    calcMetersAway(6);
    /*     calcMetersAway(2486);
     */

    setFollowMyPosition = () => {
        setFollowPosition(!followPosition)
    }
    followMyPosition = () => {
        if (followPosition === true) {
            centerCurrentLocation();
        }
    }
    followMyPosition()


    setMyMapType = () => {
        if (mapType === "satellite") {
            setMapType("standard")
        }
        else {
            setMapType("satellite")

        }
    }

    return (
        <View style={styles.view} >
            <View style={styles.iconsOnMap}>
                {/* <Ionicons name="md-locate" size={32} color="green" onPress={centerCurrentLocation} /> */}
                {/* <Ionicons name="md-compass" size={32} color="green" onPress={centerCurrentLocationWithZoom} /> */}

                <TouchableOpacity onPress={centerCurrentLocation}><Text> Center Position</Text></TouchableOpacity>
                <TouchableOpacity onPress={setMyMapType}><Text> Map: {mapType}</Text></TouchableOpacity>
                <TouchableOpacity onPress={setFollowMyPosition}><Text>FollowPosition: {"" + followPosition} </Text></TouchableOpacity>
            </View>
            <MapView style={styles.map}
                initialRegion={state.region}
                /*  onRegionChangeComplete={ 
                    region => setFollowPosition(false)
                    } */

                onRegionChange={region => {
                    /* setState(() => {
                       return { ...state, region: region }
                       }); */
                    setLatitudeNow(latitudeNow)
                    setLongitudeNow(longitudeNow)
                }}
                ref={mapView}
                mapType={mapType}
                zoomEnabled={true}
            >

                {/* current position marker */}
                {
                    loadFirst === false &&
                    <Marker
                        coordinate={{ longitude: longitudeNow, latitude: latitudeNow }}
                        pinColor="darkgreen"
                    />
                }

                {/* Show marker for only next Point */}
                {
                    questStarted === true &&
                    <Marker
                        coordinate={{ longitude: lonToFind, latitude: latToFind }}
                        pinColor="yellow"
                    />
                }

                {/* load all markers (starting positions) from data */}
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

            </MapView >

            {/* show this box if clicking for more details */}
            {
                showBox === true &&
                <View style={styles.infoBox}>
                    <View>
                        <Button title="Close Window - X" onPress={() => {
                            setShowBox(false)
                        }} />
                    </View>
                    {/* <Text>{questID}</Text> */}
                    <View style={{
                        backgroundColor: "white",
                        padding: 5
                    }}><Text>{data1.find(x => x.id === questID).title}</Text>
                    </View>
                    <View style={{ flex: 1, padding: 5 }}>
                        <Text>{data1.find(x => x.id === questID).info}</Text>
                        <Text>{data1.find(x => x.id === questID).points.length} Points: </Text>
                        <Text>
                            {data1.find(x => x.id === questID).points.map((item, index) => {
                                return (<Text key={index}> {item.title} - </Text>)
                            })}
                        </Text>
                    </View>
                    <Button title="Start" style={{ zIndex: 20, alignSelf: 'flex-end' }}
                        onPress={() => start(data1.find(x => x.id === questID).id)} />
                </View>
            }


            {/* show this box if quest started */}
            {
                questStarted === true &&
                <View style={styles.startedBox}>
                    <View>
                        <Text> Go to: {currentPointTitle} </Text>
                        <Text> {getDistance(
                            { latitude: latitudeNow, longitude: longitudeNow },
                            { latitude: latToFind, longitude: lonToFind }
                        )} Meters away</Text>
                        {/* <Text> howManyPoints: {howManyPoints} </Text> */}
                        {/* <Text> questID: {questID} </Text>
                        <Text> currentPoint: {currentPoint} </Text>
                        <Text> lonToFind: {lonToFind} </Text>
                        <Text> latToFind: {latToFind} </Text>
                         */}
                    </View>
                    <View>
                        <Button title="Cancel Quest"
                            onPress={() => cancelQuest()} />
                    </View>
                </View>
            }


            {
                (foundPoint === true && questStarted === true) &&
                <View style={styles.foundBox}>
                    <View>
                        {/* <Text>{"foundPoint:" + foundPoint}</Text>
                        <Text>{"latToFind:" + latToFind}</Text> */}

                        <Text> You found {currentPointTitle} </Text>
                        {/* <Text> INFO INFO </Text> */}

                        {(currentPoint != howManyPoints) ?
                            <Button title="Go to next Point"
                                onPress={() => loadNextPoint()} />
                            : <Text onLayout={() => solvedQuest()}> YOU SOLVED THE COMPLETE QUEST!!!
                            </Text>
                        }
                    </View>
                </View>
            }
        </View >
    );
}


const styles = StyleSheet.create({

    infoBox: {
        position: "absolute",
        bottom: 30,
        flex: 1,
        left: 20,
        right: 20,
        height: 300,
        paddingVertical: 10,
        backgroundColor: "yellow",
        borderColor: "white",
        borderWidth: 6,
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