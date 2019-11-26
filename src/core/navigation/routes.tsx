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
import {MenuNavigationOptions} from "./options";
import {MenuContainer} from "../../containers/menu";
import {routes} from '../../config'

const MainNavigationConfiguration: NavigationRouteConfigMap<any, NavigationStackProp> = routes.navigation;

const BottomMenuNavigator = createBottomTabNavigator(routes.bottom,{
    tabBarComponent: MenuContainer,
    defaultNavigationOptions: MenuNavigationOptions
});

const AppNavigator: NavigationContainer = createStackNavigator({
    BottomMenuNavigator,
    ...MainNavigationConfiguration,
}, {
    headerMode: 'screen',
    initialRouteName: 'signIn',
    defaultNavigationOptions: {
        header: null
    }
})

const createAppRouter = (container: NavigationContainer): NavigationContainer => {
    useScreens();
    return createAppContainer(container);
}


export const Router: NavigationContainer = createAppRouter(AppNavigator);
