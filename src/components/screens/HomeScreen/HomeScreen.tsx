import React from 'react'
import {State, Text, ThemedComponentProps} from "react-native-ui-kitten"
import styles from './styles'
import {NavigationStackProp} from "react-navigation-stack";
import firebaseService from "../../../services/firebaseService";

type HomeScreenProps = ThemedComponentProps & NavigationStackProp;

// @ts-ignore
class HomeScreen extends React.Component<HomeScreenProps, State> {

    componentDidMount = () => {
        firebaseService.onStateChangedEvent(this['props'].navigation, true);
        setTimeout(firebaseService.signOut, 1000);
    }

    render = () => (<Text>HomeScreen</Text>)
}

export default HomeScreen
