import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import Headers from "../components/Headers";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-elements';


export default function About(props) {
  return (
    <View style={{ flex: 1 }}>
      <Headers
        name='ABOUT'
        navigation={props.navigation} />

      <ScrollView style={{backgroundColor:"#31a350"}}>

        {/* About GeoQuest */}
        <View style={styles.defaultOuterBox}>
          <Text style={styles.defaultBoxTitle}>ABOUT</Text>
          <View style={styles.defaultBoxMain}>
            <Text style={styles.defaultMainText}>
            
            Geo-Quest is a simple and powerful Geocaching app for iOS 
            and Android that includes the following features:
            {'\n'}
            Geo-Quest account {'\n'}
            uses the Geocaching Live API so that you can login with your 
            account and see all of your information{'\n'} {'\n'}

            - Find Caches :{'\n'}
            Current location, coordinates, search for a location{'\n'} {'\n'}
            - Map Options :{'\n'}
            Choose from Apple Maps, Google Maps, OpenStreet Map</Text>
          </View>
        </View>
        {/* technologies container */}
        <View style={styles.defaultOuterBox}>
          <Text style={styles.defaultBoxTitle}>TECHNOLOGIES</Text>
          <View style={styles.defaultBoxMain}>
            <Text style={styles.defaultMainText}>
              - React Native  {'\n'}
              - Node.js  {'\n'}
              - Express {'\n'}
              - Mongo
            </Text>
          </View>
        </View>


        {/* Future Implementations container */}


        <View style={styles.defaultOuterBox}>
          <Text style={styles.defaultBoxTitle}>FUTURE IMPLEMENTATIONS</Text>
          <View style={styles.defaultBoxMain}>
            <Text style={styles.defaultMainText}>
              - Offline Maps {'\n'}
              - Share location with friends {'\n'}
              - Chat {'\n'}
              - QR-Code {'\n'}
              - Friend lists {'\n'}
              - Upload images, Request images, profile image {'\n'}
              - Bookmarks
            </Text>
          </View>
        </View>

        {/* team members and avatar */}
        <View style={styles.defaultOuterBox}>
          <Text style={styles.defaultBoxTitle}>TEAM MEMBERS</Text>
          <View style={styles.defaultBoxMain}>

            <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', }}>
              <View >
                <Avatar size={120}
                  source={require('../assets/navi.png')}
                />
                <Text style={{ marginTop: 7, textAlign: 'center' }}>Naqvi</Text>
              </View>
              <View >
                <Avatar
                  source={require('../assets/profilefranz.png')} size={120} />
                <Text style={{ marginTop: 7, textAlign: 'center' }}>Franz</Text>
              </View>
              <View style={{ marginTop: 15 }} >
                <Avatar source={require('../assets/yasmin.jpg')} size={120} />
                <Text style={{ marginTop: 7, textAlign: 'center' }}>Yasmin</Text>
              </View>
              <View style={{ marginTop: 15 }} >
                <Avatar source={require('../assets/boyan.jpg')} size={120} />
                <Text style={{ marginTop: 7, textAlign: 'center' }}>Boyan</Text>

              </View>
            </View>
          </View>
        </View>


      </ScrollView >
    </View >

  );
}

About.navigationOptions = {
  drawerIcon: () => (
    <View style={styles.icon}>
      <Ionicons
        name="md-star"
        size={24}
        style={styles.iconcolor}
      />
    </View>
  )
}

const styles = StyleSheet.create({

  defaultMainText: {
    color: "#135625",
  },

  defaultOuterBox: {
    marginLeft: 9,
    marginRight: 9,
    marginTop: 5,
    marginBottom: 5,
    /*     borderWidth: 1,
        borderColor: "black", */
  },

  defaultBoxTitle: {
    fontWeight: "bold",
    padding: 10,
    color: "#135625",
    backgroundColor: "#f5f5f5",
  },

  defaultBoxMain: {
    padding: 10,
    backgroundColor: "#fff",
  },

  icon: {
    fontSize: 15,
    textAlign: 'center',
    /* backgroundColor: 'green', */
    height: 25,
    width: 25,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconcolor: {
    color: "white",

  }

})