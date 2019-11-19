import React from 'react';
import { StyleSheet,View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {Content, Accordion } from 'native-base';
import Headers from "../components/Headers";

const dataArray = [
    { title: "Question 1", content: "Lorem ipsum dolor sit amet" },
    { title: "Question 2", content: "Lorem ipsum dolor sit amet" },
    { title: "Question 3", content: "Lorem ipsum dolor sit amet" }
];
export default function FAQ(props) {
    
        return (
            <View style={{flex: 1}}>
            <Headers name ='FAQ'
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
    view: {
        flex: 1,
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        color: "white"
    },
    icon: {
        fontSize: 15,
        color: "white",
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