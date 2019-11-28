import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import Headers from "../components/Headers";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Avatar} from 'react-native-elements';


export default function About(props) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Headers
        name='About'
        navigation={props.navigation} />
        <View style ={{backgroundColor:'#f8f8ff'}}> 
    {/* team members and avatar */}
        <View style={{borderWidth: 2, borderColor: 'grey', height: 350, margin: 15}}>
      <Text style ={styles.text}>Team Members :</Text>

    <View style ={{flex: 1, flexDirection:'row', flexWrap:'wrap', justifyContent:'space-around', marginRight:30}}>
      
      <View >
      <Avatar  rounded size={120}
                    avatarStyle={{backgroundColor: 'orange'}}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                    containerStyle={{backgroundColor: 'red'}} />
                    </View>
      <View >
      <Avatar avatarStyle={{backgroundColor: 'green'}} rounded size={120} />
      </View>
      <View style ={{marginTop : 15}} >
       <Avatar avatarStyle={{backgroundColor: 'pink'}} rounded size={122}/>
       </View>
      <View style ={{marginTop : 15}} >
        <Avatar source={require('../assets/yasmin.jpg')} rounded size={120} />
        <Text style={{marginTop: 7}}>Yasmin Farag</Text>
       
        </View>
    </View>
    </View>


    {/* About GeoQuest */}
    <View style={{borderWidth: 2, borderColor: 'grey', height: 200, margin: 15}}>
      <Text style ={styles.text}>About GeoQuest:</Text>
      <Image  source={require('../assets/geo.png')}
              style={styles.image}/>
      </View>

      {/* technologies container */}


      <View style={{borderWidth: 2, borderColor: 'grey', height: 200, margin: 15}}>
      <Text style ={styles.text}>Technologies:</Text>
      </View>

      

       {/* Future Implementations container */}


       <View style={{borderWidth: 2, borderColor: 'grey', height: 200, margin: 15}}>
      <Text style ={styles.text}>Future Implementations:</Text>
      </View>

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
    marginTop: 15,
    fontSize: 20,
    fontWeight: 'bold',
    alignItems:'flex-start',
    marginLeft: 19
  },
  image: {
    width:50,
    height:50,
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 4,
    right: 2,
    backgroundColor: 'black',
    borderRadius: 3

  }
})