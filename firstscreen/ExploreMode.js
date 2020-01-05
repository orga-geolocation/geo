import React, { useContext, useEffect } from 'react'
import GlobalState from "../globalstate/GlobalState"
import * as SecureStore from 'expo-secure-store';
import { View, StyleSheet } from 'react-native'
import DrawerNavigator from '../components/DrawerNavigator';

export default function ExploreMode(props) {


    const Context = useContext(GlobalState)

    const loadApp = async () => {

        const getLocalStorage = await SecureStore.getItemAsync("data_store")
        const convertData = JSON.parse(getLocalStorage)
        if (convertData) {
            const data = await fetch("https://geo-app-server.herokuapp.com/load", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-auth': convertData.token
                }
            })
            if (data) {
                const jsonData = await data.json()
                if(Object.keys(jsonData).includes("user")){
                Context.setUser(jsonData.user.username)
                Context.setUserData(jsonData.user)
                Context.setLogin(Context.state.login)
                }
   
            }
        }
    }
    useEffect(() => {
        loadApp()
    }, []) 
    return (
        <View style={{ flex: 1 }}>
            <DrawerNavigator style={{ flex: 1 }} />
        </View>
    )

}

