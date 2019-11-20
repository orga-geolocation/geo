import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import MapView, { Marker, Callout, CalloutSubview } from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import data from "../dummyData";
export default function Map(props) {

    let initialData = {
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

        start: false,
        questNow: null,
        nextPointTitle: "",
        howManyPoints: 0,
        findNextLongitude: 0,
        findNextLatitude: 0,
    }
    const [state, setState] = useState(initialData)

    let changedState=null;
    /* componentDidMount() {
        this.getLocationAsync();
    }
 */
    useEffect(() => {
        getLocationAsync(); 
    }, [])


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
                timeInterval: 3000
            },
            newLocation => {
                let coords = newLocation.coords;
                changedState=state;
                changedState.latNow=coords.latitude;
                changedState.lonNow=coords.longitude;
                setState(changedState)
                /*   this.setState({ latNow: coords.latitude, lonNow: coords.longitude }) */
                console.log("checking state ..........",state)
                if (state.loadFirst == true) {
                    centerCurrentLocationWithZoom();
                   changedState=state;
                   changedState.loadFirst=false
                    setState(changedState)
                    /*     this.setState({ loadFirst: false }) */
                }

                if (state.followPosition == true) {
                    centerCurrentLocation();
                }

            });
    };
    
    const mapView = useRef(null);
    const centerCurrentLocation = () => {
        mapView.current.animateCamera(
            {
                center: {
                    latitude: state.latNow,
                    longitude: state.lonNow,
                },
                pitch: 0,
                heading: 0,
                altitude: 0,
            }, 2000)
    }

    const centerCurrentLocationWithZoom = () => {
       mapView.current.animateCamera(
            {
                center: {
                    latitude: state.latNow,
                    longitude: state.lonNow,
                },
                pitch: 0,
                heading: 0,
                altitude: 0,
                zoom: 16
            }, 2000)
    }

    const followPositionsSwitch = () => {
        changedState=state;
                   changedState.followPosition= !changedState.followPosition
                    setState(changedState)
       
        /*     this.setState({ followPosition: !this.state.followPosition }) */
    }


    start = (questId) => {
        console.log("quest started");
        console.log(questId);

        /* set states for the actual quest */
        setState((prev) => {
            return {
                ...prev, start: true,
                showBox: false,
                questNow: questId,
                nextPointTitle: data.find(x => x.id === questId).points.find(y => y.id === 1).titlePoint,
                howManyPoints: data.find(x => x.id === questId).points.length,
                findNextLongitude: data.find(x => x.id === questId).points.find(y => y.id === 1).longitude,
                findNextLatitude: data.find(x => x.id === questId).points.find(y => y.id === 1).latitude,
            }
        })

        /*  this.setState({
             start: true,
             showBox: false,
             questNow: questId,
             nextPointTitle: data.find(x => x.id === questId).points.find(y => y.id === 1).titlePoint,
             howManyPoints: data.find(x => x.id === questId).points.length,
             findNextLongitude: data.find(x => x.id === questId).points.find(y => y.id === 1).longitude,
             findNextLatitude: data.find(x => x.id === questId).points.find(y => y.id === 1).latitude,
         }) */
    }
    return (
        <View style={styles.view} >
            <Button title="Go to current Position"
                onPress={centerCurrentLocation} />

            <Button title={state.followPosition ? 'Follow Your Position: ON' : 'Follow Your Position: OFF'}
                onPress={followPositionsSwitch} />

            <MapView style={styles.map}
                initialRegion={state.region}                   
                onRegionChange={region => {
                setState(()=>{ 
                    return {...state,region:region} });
                }} 
                ref={mapView}
                mapType="satellite"
                zoomEnabled={true}
            >

                {/* current position marker */}
                {
                    state.loadFirst == false &&
                    <Marker
                        coordinate={{ longitude: state.lonNow, latitude: state.latNow }}
                        pinColor="blue"
                    />
                }

                {/* Show marker for only next Point */}
                {
                    state.start == true &&
                    <Marker
                        coordinate={{ longitude: state.findNextLongitude, latitude: state.findNextLatitude }}
                        pinColor="yellow"
                    />
                }

                {/* load all markers (starting positions) from data */}
                {
                    state.start == false &&
                    data.map((item, index) => {
                        return (
                            <Marker
                                key={index}
                                coordinate={{ longitude: item.longitude, latitude: item.latitude }}
                                /*                                     
                                onPress={() => {                                
                                this.setState({ showBox: false })
                                }} */
                                style={{ zIndex: 6000 }}
                            >
                                <Callout tooltip={false}
                                    onPress={() => {
                                        setState(() => {
                                            return { ...state, showBox: true, showBoxId: item.id }
                                        })
                                        /* this.setState({ showBox: true })
                                        this.setState({ showBoxId: item.id }) */

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
                }

            </MapView >

            {/* show this box if clicking for more details */}
            {
                    state.showBox == true &&
                    <View style={styles.infoBox}>
                        <View>
                            <Button title="Close Window - X" onPress={() => {
                               setState(()=>{
                                   return {...state, showBox: false}
                                })
                            }} />
                        </View>
                        <View style={{
                            backgroundColor: "white",
                            padding: 5
                        }}><Text>{data.find(x => x.id === state.showBoxId).title}</Text>
                        </View>
                        <View style={{ flex: 1, padding: 5 }}>
                            <Text>{data.find(x => x.id === state.showBoxId).description}</Text>
                            <Text>{data.find(x => x.id === state.showBoxId).points.length} Points: </Text>
                            <Text>
                                {data.find(x => x.id === state.showBoxId).points.map((item, index) => {
                                    return (<Text key={index}>{item.titlePoint}</Text>)
                                })}
                            </Text>
                        </View>
                        <Button title="Start" style={{ zIndex: 20, alignSelf: 'flex-end' }}
                            onPress={() => start(data.find(x => x.id === state.showBoxId).id)} />
                    </View>
                }


            {/* show this box if quest started */}
            {
            state.start == true &&
                <View style={styles.startedBox}>
                    <View><Text> GO TO:
                            {state.nextPointTitle}
                        {/*                             
                            {this.state.howManyPoints}
                            {this.state.findNextLongitude}
                            {this.state.findNextLatitude} */}
                    </Text>
                    </View><View>
                        <Button title="Quit Quest"
                            onPress={() => setState(() => { return { ...state, start: false } })} />

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

    view: {
        flex: 1,
    },

    map: {
        flex: 1,
    },

})