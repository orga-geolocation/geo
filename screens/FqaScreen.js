import React from 'react';
import { StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Headers from "../components/Headers";

import { Content, Accordion } from 'native-base';

const dataArray = [
    { title: "Difference between explore and play mode?", content: "Explore mode is to explore different places around you ,in explore mode we will guide you through out your entire trip. In play mode ,you will get hint about the next destination and you have to find it by yourself and once you found that we will ask you question about that place .if you give correct answer ,you can proceed and find the next destination." },
/*     { title: "I'm at the right point, but nothing happened.", content: "Lorem ipsum dolor sit amet" },
 */    { title: "Why I can't create a quest?", content: "To create a quest you need to have a account with Geo-Quest" },
    { title: "I can't login.", content: "Please rewrite your email and password" },
    { title: "Difference between trusted and non-trusted quests ", content: "Quest created by Geo-Quests are 100% trusted or any quest completed by atleast 10 Users and maintain rating above 4.0 will get trusted badge from Geo-Quests." }

];

export default function FAQ(props) {
    return (
        <View style={{ flex: 1 }}>
            <Headers name='FAQ'
                navigation={props.navigation} />
            <Content padder>
                <Accordion dataArray={dataArray} expanded={0} />
            </Content>
        </View>
    );
}

FAQ.navigationOptions = {
    drawerIcon: () => (
        <View style={styles.icon}>
            <Ionicons
                name="md-help"
                size={24}
                style={styles.iconcolor}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        fontSize: 15,
        color: "white",
        textAlign: 'center',
/*         backgroundColor: 'green',
 */        height: 25,
        width: 25,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconcolor: {
        color: "white",
    }

})