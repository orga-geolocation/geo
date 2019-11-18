import React, { Component } from 'react'
import { View, StyleSheet} from 'react-native'
import DrawerNavigator from '../components/DrawerNavigator';

export default function ExploreMode(props){
   
        return (
            <View style={{flex:1}}>
                <DrawerNavigator style={{flex:1}} />
            </View>
        )
    
}

