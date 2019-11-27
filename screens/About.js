import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import Headers from "../components/Headers";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Avatar} from 'react-native-elements';


export default function About(props) {

  /* keyExtractor = (item, index) => index.toString()


  renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      subtitle={item.subtitle}
      leftAvatar={{source: { uri: item.avatar_url }, showEditButton: true, }}
      bottomDivider 
    />
  ) */
  return (
    <View style={{ flex: 1 }}>
      <Headers
        name='About'
        navigation={props.navigation} />
    {/* team members and avatar */}
        <View style={{borderWidth: 5, borderColor: 'green', height: 450, margin: 7}}>
      <Text style ={styles.text}>Team Members :</Text>

    <View style ={{flex: 1, flexDirection:'row', flexWrap:'wrap', justifyContent:'space-around', marginRight: 10}}>
      
      <View style ={{marginTop : 20, backgroundColor: 'lightgrey', width: 150, height: 170, alignItems: 'center', justifyContent:'center'}}>
      <Avatar  rounded size={125}
                    avatarStyle={{backgroundColor: 'orange'}}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                    containerStyle={{backgroundColor: 'red'}} />
                    </View>
      <View style ={{marginTop : 20, backgroundColor: 'lightgrey', width: 150, height: 170, alignItems: 'center', justifyContent:'center'}}>
      <Avatar avatarStyle={{backgroundColor: 'green'}} rounded size={125} /></View>
      <View style ={{marginTop : 20, backgroundColor: 'lightgrey', width: 150, height: 170, alignItems: 'center', justifyContent:'center'}}>
       <Avatar avatarStyle={{backgroundColor: 'pink'}} rounded size={125}/></View>
      <View style ={{marginTop : 20, backgroundColor: 'lightgrey', width: 150, height: 170, alignItems: 'center', justifyContent:'center'}}>
        <Avatar source={require('../assets/yasmin.jpg')} rounded size={120} />
        <Text style={{marginTop: 7}}>Yasmin Farag</Text>
       
        </View>
    </View>
    </View>


    {/* About GeoQuest */}
    <View style={{borderWidth: 5, BorderColor: 'green', height: 450, margin: 7}}>
      <Text style ={styles.text}>About GeoQuest:</Text>
      <Image  source={require('../assets/geo.png')}
              style={styles.image}/>
      </View>
    </View>
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
    margin: 0,
    alignSelf: 'flex-end'
  }
})