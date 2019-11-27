import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Headers from "../components/Headers";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Avatar} from 'react-native-elements';
import { ListItem } from 'react-native-elements';


const list = [
  {
    name: 'Naqvi',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Full Stack Developer'
  },
  {
    name: 'Franz',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Full Stack Developer'
  },
  {
    name: 'Yasmin',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Front-end Developer' 
  },

  {
    name: 'Boyan',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Front-end Developer'
  }

]
export default function About(props) {

  keyExtractor = (item, index) => index.toString()


  renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      subtitle={item.subtitle}
      leftAvatar={{ source: { uri: item.avatar_url } }}
      bottomDivider
      
    />
  )
  return (
    <View style={{ flex: 1 }}>
      <Headers
        name='About'
        navigation={props.navigation} />

<FlatList
      keyExtractor={keyExtractor}
      data={list}
      renderItem={renderItem}
    />
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

  }
})