import React from 'react'
import {
    View,
    ImageBackground
} from 'react-native';
import {
    Button,
    Text
} from 'react-native-ui-kitten'
import {textStyle, ScrollableAvoidKeyboard} from "../../common";
import styles from './styles'

class HomeScreen extends React.Component{

    componentDidMount() {
        this.props.navigation.navigate({
            routeName: 'Second'
        });
    }

    render = () => (
        <Text>Hello</Text>
    )
}

export default HomeScreen
