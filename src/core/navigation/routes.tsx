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
import routes from '../../config/routes'
import globals from '../../config/globals'

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
    initialRouteName: globals.navigation.initialRouteKey,
    defaultNavigationOptions: {
        header: null
    }
})

const createAppRouter = (container: NavigationContainer): NavigationContainer => {
    useScreens();
    return createAppContainer(container);
}


export const Router: NavigationContainer = createAppRouter(AppNavigator);
