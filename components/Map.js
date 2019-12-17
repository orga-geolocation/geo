import React, { useState, useContext, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker, Callout, CalloutSubview } from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getDistance } from 'geolib';
import GlobalState from "../globalstate/GlobalState"
import * as SecureStore from "expo-secure-store"
import IMAG from '../assets/loader1.gif'
import QuestRating from '../screens/rating/QuestRating';
import StarRating from 'react-native-star-rating';

export default function Map(props) {
    /* console.log(props.mode) */
    const Context = useContext(GlobalState)
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
    const [accuracyOfMeters, setAccuracyOfMeters] = useState(20)
    // 2486
    const [questMode, setQuestMode] = useState(null)
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
    const [currentPointInfo, setCurrentPointInfo] = useState("")
    const [foundPoint, setFoundPoint] = useState(false)
    const [howManyPoints, setHowManyPoints] = useState(null)
    const [lonToFind, setLonToFind] = useState(null)
    const [latToFind, setLatToFind] = useState(null)
    const [currentHint, setCurrentHint] = useState("")

    const [showBox, setShowBox] = useState(false)

    const [data1, setdata1] = useState([])

    const [finish, setFinish] = useState(false)


    let [loading, setShowLoader] = useState(true);

    const [rate, setRate] = useState(3.5)

    //create function to set local storage
    const setLocalStorage = async (key, value) => {
        await SecureStore.setItemAsync(key, value);
    }
    const getLocalStorage = async (key) => {
        const getLS = await SecureStore.getItemAsync(key)
        return getLS;
    }
    const DeleteStorageItem = async (key) => {
        await SecureStore.deleteItemAsync(key);
    }


    useEffect(() => {


        getLocationAsync();
        if (props.mode === "explore") {
            setShowLoader(true)
            datafromExpServer()
        } else {
            datafromPlayServer()
            setShowLoader(true)

        }


    }, [props.mode])

    const datafromExpServer = async () => {


        await fetch("https://geo-app-server.herokuapp.com/getallexpquests")
            .then(res => res.json())
            .then(data => {

                setdata1(data.doc)
                /* console.log(data.doc) */

                setShowLoader(false)


            }).catch(err => {
                console.log(err.message)
            })
    }
    const datafromPlayServer = async () => {
        await fetch("https://geo-app-server.herokuapp.com/getallplayquests")
            .then(res => res.json())
            .then(data => {
                setdata1(data.doc)
                setShowLoader(false)

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
                Context.setLatG(coords.latitude)
                Context.setLongG(coords.longitude)
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
        setQuestMode(data1.find(x => x._id === questID).mode)
        setHowManyPoints(data1.find(x => x._id === questID).points.length)
        setCurrentPoint(pointNow)
        setCurrentPointTitle(data1.find(x => x._id === questID).points.find(y => y.id === pointNow).title)
        setLonToFind(data1.find(x => x._id === questID).points.find(y => y.id === pointNow).longitude)
        setLatToFind(data1.find(x => x._id === questID).points.find(y => y.id === pointNow).latitude)
        setCurrentHint(data1.find(x => x._id === questID).points.find(y => y.id === pointNow).hint)
        setCurrentPointInfo(data1.find(x => x._id === questID).points.find(y => y.id === pointNow).info)
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
    calcMetersAway(accuracyOfMeters);

    loadNextPoint = () => {
        setFoundPoint(false)
        pointNow = currentPoint + 1
        prepareSetQuest(questID, pointNow)
        console.log("   -> Point to find: " + pointNow);
        // store/save quest as running
        // and store/save current point
    }


    cancelQuest = async (id,rate) => {
        console.log(" <- Quest canceled");
        if (finish) {
            let data = JSON.stringify({ questid: id, rate: rate })
            await fetch("https://geo-app-server.herokuapp.com/rate", {
                method: "POST", headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }, body: data
            })
                .then(res => res.json())
        }
        setFoundPoint(false)
        setQuestMode(null)
        setLatToFind(null)
        setLonToFind(null)
        setHowManyPoints(null)
        setShowBox(false)
        setQuestID(null)
        setQuestStarted(false)
        setCurrentPoint(null)
        setCurrentPointTitle("")
        setCurrentHint("")
        setCurrentPointInfo("")
        setFinish(false)


    }
const onStarRatingPress=(rate)=>{
    setRate(rate)
}
    solvedQuest = async (id) => {
        console.log("!!! Quest SOLVED !!!");
        setFinish(true)
        const getLocalStorage = await SecureStore.getItemAsync("data_store")
        const User = await JSON.parse(getLocalStorage)
        if (User) {
            let obj = {
                userid: User._id,
                questid: id
            }
            let dataBody = JSON.stringify(obj)

            await fetch("https://geo-app-server.herokuapp.com/questdone", {
                method: "POST", headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }, body: dataBody
            }).then(result => result.json()).then(d => console.log(".........", d.success))

        }
        let obj = {
            userid: User._id,
            questid: id
        }
        let dataBody = JSON.stringify(obj)

        await fetch("https://geo-app-server.herokuapp.com/questdone", {
            method: "POST", headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }, body: dataBody
        }).then(result => result.json()).then(d => console.log(".........", d.success))

    }



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

    calcProgressBar = () => {
        let getIt = getDistance(
            { latitude: latitudeNow, longitude: longitudeNow },
            { latitude: latToFind, longitude: lonToFind }
        )

        getIt = getIt - accuracyOfMeters;
        if (getIt >= 100) {
            getIt = 100;
        }
        console.log(getIt);
        return (getIt)
    }
    const stars = (rating) => {
        let star = rating.reduce((rate, acc) => {
            let rate1 = Number(rate)
            let acc1 = Number(acc)
            acc = rate1 + acc1;
            return acc;
        }, 0)
        return (star / rating.length)
    }

    return (
        <View style={styles.view} >
            {<View style={styles.iconsOnMap}>
                <TouchableOpacity onPress={centerCurrentLocation}><Text> Center Position</Text></TouchableOpacity>
                <TouchableOpacity onPress={setMyMapType}><Text> Map: {mapType}</Text></TouchableOpacity>
                <TouchableOpacity onPress={setFollowMyPosition}><Text>FollowPosition: {"" + followPosition} </Text></TouchableOpacity>
            </View>}

            <View style={{ flex: 1, }}>

                <View style={{ flex: 1 }}>

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
                                                setQuestID(item._id)
                                            }}
                                        >
                                            <View>
                                                <Text>{item.title}</Text>
                                                <QuestRating rating={stars(item.rating)} />
                                                <Text style={{ textAlign: "center" }}>{stars(item.rating).toFixed(1)}/5</Text>

                                                <Text style={{ textAlign: "center" }}>More Info</Text>
                                            </View>
                                        </Callout>
                                    </Marker>
                                )
                            })
                        }


                        {/* Show marker for only next Point 
                        And show markers only in the explore mode
                        */}
                        {
                            (questStarted === true && questMode === "explore") &&
                            <Marker
                                coordinate={{ longitude: lonToFind, latitude: latToFind }}
                                pinColor="yellow"
                            />
                        }

                    </MapView >


                    {loading &&
                        <View style={{
                            flex: 1, position: "absolute",
                            width: "100%",
                            height: "100%",
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>


                            {/*                                  <Image 
          style={{width: 50, height: 50}}
          source={IMAG}
        /> */}

                            <View style={{ backgroundColor: "#fff", padding: 16 }}>
                                <Text style={{ textAlign: "center" }}>Loading...</Text>
                            </View>
                        </View>
                    }


                    {/* show this box if clicking for more details */}
                    {
                        showBox === true &&
                        <View style={styles.infoBox}>
                            <TouchableOpacity
                                style={{
                                    /* backgroundColor: "#279144", */
                                    padding: 10,
                                    alignItems: "flex-end"

                                }}
                                onPress={() => {
                                    setShowBox(false)
                                }}>

                                <View style={{ borderRadius: 50, width: 45, backgroundColor: "#ffffff", borderWidth: 2, borderColor: "#2d9349", paddingLeft: 9 }}>
                                    <Ionicons
                                        name="md-close"
                                        size={40}
                                        color="#2d9349"
                                    />
                                </View>

                            </TouchableOpacity>
                            <View style={{ /* borderColor: "#217e3a",
                                borderTopWidth: 10, */}}><Text style={{
                                    backgroundColor: "#31a350",
                                    padding: 10,
                                    color: "white",
                                    fontSize: 18,
/*                                 fontWeight: "bold",
 */                            }}>

                                    {/* <Ionicons
                                        name="md-arrow-dropright"
                                        size={20}
                                        color="#ffffff"
                                    /> */}


                                    {' '}{data1.find(x => x._id === questID).title}</Text>
                            </View>
                            <View style={{ flex: 1, padding: 5, backgroundColor: "#217e3a" }}>
                                <ScrollView style={{ flex: 1, backgroundColor: "#ffffff", margin: 5 }}>
                                    <Text style={{ padding: 10, color: "#2d9349" }}>{data1.find(x => x._id === questID).info}</Text>
                                </ScrollView>
                                {/* show all points only for explore and not for the play mode */}
                                {data1.find(x => x._id === questID).mode === "explore" &&
                                    <View style={{ backgroundColor: "#31a350", margin: 5, padding: 10 }}>
                                        <Text style={{ color: "white" }}>{data1.find(x => x._id === questID).points.length} Points </Text>
                                        <Text style={{ color: "white" }}>
                                            {data1.find(x => x._id === questID).points.map((item, index) => {
                                                return (<Text key={index}>[{item.title}] </Text>)
                                            })}
                                        </Text>
                                    </View>
                                }
                            </View>

                            <View style={{ backgroundColor: "#31a350" }}>
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: "#fff", // 46bf67
                                        borderColor: "#217e3a",
                                        borderWidth: 1,
                                        padding: 10,
                                        margin: 10
                                    }}
                                    onPress={() => start(data1.find(x => x._id === questID)._id)}
                                >
                                    <Text style={{ textAlign: "center", color: "#2d9349" }}>Start Quest</Text>
                                </TouchableOpacity>
                            </View>



                        </View>
                    }


                    {/* show this box if quest started */}
                    {
                        questStarted === true &&
                        <View style={styles.startedBox}>
                            <View style={{ flex: 1, padding: 5, backgroundColor: "#217e3a" }}>

                                <Text style={{
                                    backgroundColor: "#31a350",
                                    padding: 10,
                                    color: "white",
                                    fontSize: 18,
                                }}>
                                    Go to: {currentPointTitle} </Text>

                                {(questMode === "play") &&
                                    <Text>{currentHint}</Text>
                                }

                                {(questMode === "explore") &&
                                      <Text style={{
                                        backgroundColor: "#31a350",
                                        padding: 10,
                                        color: "white",
                                        fontSize: 18,
                                    }}> {getDistance(
                                        { latitude: latitudeNow, longitude: longitudeNow },
                                        { latitude: latToFind, longitude: lonToFind }
                                    )} Meters away</Text>
                                }

                                {/* <Text> howManyPoints: {howManyPoints} </Text> */}
                                {/* <Text> questID: {questID} </Text>
                        <Text> currentPoint: {currentPoint} </Text>
                        <Text> lonToFind: {lonToFind} </Text>
                        <Text> latToFind: {latToFind} </Text>
                         */}
                            </View>


                            <View style={{ backgroundColor: "#31a350" }}>
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: "#fff", // 46bf67
                                        borderColor: "#217e3a",
                                        borderWidth: 1,
                                        padding: 10,
                                        margin: 5
                                    }}
                                    onPress={() => cancelQuest((data1.find(x => x._id === questID)._id),rate)}
                                >
                                    <Text style={{ textAlign: "center", color: "#31a350" }}> {finish ? "Done" : "Cancel Quest"}</Text>
                                </TouchableOpacity>
                            </View>




                        </View>
                    }


                    {/* Show this box after finding a point */}
                    {
                        (foundPoint === true && questStarted === true) &&
                        <View style={styles.foundBox}>
                            <View>
                                <Text> You found {currentPointTitle} </Text>
                                <Text> {currentPointInfo} </Text>
                                {(currentPoint != howManyPoints) ?
                                    <Button title="Go to next Point"
                                        onPress={() => loadNextPoint()} />
                                    : <Text onLayout={() => solvedQuest((data1.find(x => x._id === questID)._id))}> YOU SOLVED THE COMPLETE QUEST!!!
                            </Text>
                                }

                            </View>
                            <StarRating
                                disabled={false}
                                maxStars={5}
                                rating={rate}
                                selectedStar={(rating) => onStarRatingPress(rating)}
                                fullStarColor={'#d4af37'}
                            />
                        </View>
                    }


                </View>

                {questMode === "play" &&
                    <View style={{ height: "100%", position: "absolute", width: 15, right: 0, backgroundColor: '#fff' }}>
                        <View style={{ backgroundColor: "#000", height: "" + calcProgressBar() + "%" }}
                        >
                        </View>
                    </View>
                }

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
        bottom: 40,
        /*         padding: 10,
         *//*      margin: 20,
*/        /* backgroundColor: "white", */
        /*         borderColor: "#279144",
                borderWidth: 2, */
    },

    startedBox: {
        position: "absolute",
        flex: 1,
        left: 10,
        right: 10,
        bottom: 30,
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