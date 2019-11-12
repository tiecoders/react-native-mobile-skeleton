import React from 'react'
import {useScreens} from 'react-native-screens'
import {
    createAppContainer,
    NavigationContainer, NavigationRouteConfigMap
} from 'react-navigation'
import {
    createStackNavigator, NavigationStackProp,
} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import HomeScreen from '../../components/screens/HomeScreen'
import {MenuNavigationOptions} from "./options";
import {MenuContainer} from "../../containers/menu";

const MainNavigationConfiguration: NavigationRouteConfigMap<any, NavigationStackProp> = {
    ['HomePage']: HomeScreen
};

const BottomTabMenuStackNavigator: NavigationContainer = createStackNavigator(
    {
      ['First']: HomeScreen,
      ['Second']: HomeScreen,
      ['Third']: HomeScreen
    },
    {
      defaultNavigationOptions: MenuNavigationOptions,
    },
);

const BottomTabMenuNavigator = createBottomTabNavigator({
    BottomTabMenuStackNavigator
}, {
    tabBarComponent: MenuContainer
});

const AppNavigator: NavigationContainer = createStackNavigator({
    BottomTabMenuNavigator,
    ...MainNavigationConfiguration
}, {
    defaultNavigationOptions: {
        header: null,
    }
})

const createAppRouter = (container: NavigationContainer): NavigationContainer => {
    useScreens();
    return createAppContainer(container);
}


export const Router: NavigationContainer = createAppRouter(AppNavigator);
