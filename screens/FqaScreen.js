import React from 'react';
import { StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Headers from "../components/Headers";

import { Content, Accordion } from 'native-base';

const dataArray = [
    { title: "Difference between explore and play mode?", content: "Lorem ipsum dolor sit amet" },
/*     { title: "I'm at the right point, but nothing happened.", content: "Lorem ipsum dolor sit amet" },
 */    { title: "Why I can't create a quest?", content: "Lorem ipsum dolor sit amet" },
    { title: "I can't login.", content: "Lorem ipsum dolor sit amet" }

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