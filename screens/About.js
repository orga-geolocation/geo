import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import Headers from "../components/Headers";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Avatar} from 'react-native-elements';
import { Divider } from 'react-native-elements';


export default function About(props) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Headers
        name='About'
        navigation={props.navigation} />
        <View style ={{borderWidth: 3, borderColor: 'grey', backgroundColor:'transparent', margin: 5}}> 
    {/* team members and avatar */}
        <View style={{height: 310, margin: 12}}>
      <Text style ={styles.text}>Team Members :</Text>

    <View style ={{flex: 1, flexDirection:'row', flexWrap:'wrap', justifyContent:'space-around', marginRight:30, marginTop: 4}}>
      
      <View >
      <Avatar  rounded size={120}
                    source={require('../assets/navi.png')}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                     />
                     <Text style={{marginTop: 7, textAlign:'center'}}>Naqvi</Text>
                    </View>
      <View >
      <Avatar
      source={require('../assets/profilefranz.png')} rounded size={120} />
      <Text style={{marginTop: 7, textAlign:'center'}}>Franz</Text>
      </View>
      <View style ={{marginTop : 15}} >
       <Avatar source={require('../assets/yasmin.jpg')} rounded size={120} />
       <Text style={{marginTop: 7, textAlign:'center'}}>Yasmin</Text>
       </View>
      <View style ={{marginTop : 15}} >
        <Avatar source={require('../assets/boyan.jpg')} rounded size={120} />
        <Text style={{marginTop: 7, textAlign:'center'}}>Boyan</Text>
       
        </View>
    </View>
    </View>
    <Divider style ={{backgroundColor:'#d3d3d3'}} />


    {/* About GeoQuest */}
    <View style={{height: 250, margin: 12}}>
      <Text style ={styles.text}>About :</Text>
      
      <Text style={styles.txtdetails}>- GeoQuest is a simple and powerful Geocaching app for iOS and Android that includes the following features:</Text>
      <Text style={styles.txtdetails}>- GeoQuest account</Text>
      <Text style ={{marginLeft: 25}}>uses the Geocaching Live API so that you can login with your account and see all of your information</Text>
      <Text style={styles.txtdetails}>- Find Caches :</Text>
      <Text style ={{marginLeft: 25}}>Current location, coordinates, search for a location, or GC code.</Text>
      <Text style={styles.txtdetails}>- Map Options :</Text>
      <Text style ={{marginLeft: 25}}>Choose from Apple Maps, OpenStreet Map online</Text>
      

      <Image  source={require('../assets/geo.png')}
              style={styles.image}/>
      </View>
      <Divider style ={{backgroundColor:'#d3d3d3'}} />
      {/* technologies container */}
      <View style={{height: 160, margin: 12}}>
      <Text style ={styles.text}>Technologies:</Text>
      <View style ={{marginLeft: 20, marginTop: 10}}>
      <Text>- React Native </Text>
      <Text>- Node.js</Text>
      <Text>- Express</Text>
      <Text>- Mongo</Text>
      </View>
      </View>

      <Divider style ={{backgroundColor:'#d3d3d3'}} />

       {/* Future Implementations container */}


       <View style={{height: 200, margin: 12}}>
      <Text style ={styles.text}>Future Implementations:</Text>
      <View style ={{marginLeft: 20, marginTop: 10}}>
          <Text>- offline Maps</Text>
          <Text>- Share location with friends</Text>
          <Text>- Chat</Text>
          <Text>- Friend lists</Text>
          <Text>- Upload images,Request images, profile image</Text>
          <Text>- Bookmark lists</Text>

          </View>
      </View>
      <Divider style ={{backgroundColor:'#d3d3d3', height: 2}} />

      </View>
    </ScrollView>
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

  icon: {
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: 'green',
    height: 25,
    width: 25,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconcolor: {
    color: "white",

  },
  text: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    alignItems:'flex-start',
    marginLeft: 19,
  },

  image: {
    width:50,
    height:50,
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 0,
    right: 2,
    // backgroundColor: 'black',
    // borderRadius: 3

  },
  txtdetails: {
    marginLeft: 10,
    marginTop: 12,
    
  }
})