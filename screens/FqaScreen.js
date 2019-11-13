import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Menu from '../components/Menu';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Container, Header, Content, Accordion } from 'native-base';

const dataArray = [
    { title: "Question 1", content: "Lorem ipsum dolor sit amet" },
    { title: "Question 2", content: "Lorem ipsum dolor sit amet" },
    { title: "Question 3", content: "Lorem ipsum dolor sit amet" }
];
export default class NewQuest extends React.Component {
    static navigationOptions = {
        drawerIcon: () => (
            <View style={styles.icon}>
                <Ionicons
                    name="help"
                    size={24}
                    style={styles.iconcolor}
                />
            </View>
        )

    }

    render() {
        return (
            <Container style={styles.view} >
                <Header style={{ marginTop: 26 }}>
                    <Menu navigation={this.props.navigation} />
                    <Text style={styles.text}>FQA </Text>
                </Header>
                <Content padder>
                    <Accordion dataArray={dataArray} expanded={0} />
                </Content>
            </Container>
        );
    }
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