import React, { useContext } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import GlobalState from "../../globalstate/GlobalState"
import * as SecureStore from "expo-secure-store"



export default function Profile() {
    const Context = useContext(GlobalState)
    const state = Context.state;
    console.log(state.user)

    const userLogout = async() => {
        await DeleteStorageItem("data_store")
        Context.setUser(null)
        Context.switchModal(state.modalVisible)
    }

/* secure Storage */
const DeleteStorageItem = async (key) => {
    await SecureStore.deleteItemAsync(key);
}

    return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
            <View style={styles.body}>
                <View style={styles.bodyContent}>
                    <Text style={styles.name}>{state.userData.username}</Text>
                    <Text style={styles.email}>{state.userData.email}</Text>
                    <Text style={styles.description}>Login created ...{state.userData.timestamp}</Text>
                    <Text>Quests Created : {state.userData.userQuests.length}</Text>
                    <Text>Quests Completed : {state.userData.completeQuests.length}</Text>
                    <TouchableOpacity style={styles.buttonContainer} onPress={userLogout}>
                        <Text>Log Out</Text>
                    </TouchableOpacity> 
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#00BFFF",
        height: 200,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 130
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    body: {
        marginTop: 40,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "600"
    },
    email: {
        fontSize: 16,
        color: "#00BFFF",
        marginTop: 10
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        backgroundColor: "#00BFFF",
    },
});