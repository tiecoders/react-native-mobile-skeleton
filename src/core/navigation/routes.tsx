import React from 'react'
import { useScreens } from 'react-native-screens'
import {
  createAppContainer,
  NavigationContainer, NavigationRouteConfigMap
} from 'react-navigation'
import {
  createStackNavigator, NavigationStackProp,
} from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import HomeScreen from '../../components/screens/HomeScreen'
import {MenuNavigationOptions} from "./options";

const AppNavigator: NavigationContainer = createStackNavigator({
  Home: {
    screen: HomeScreen,
    title: 'Home Screen'
  }
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: MenuNavigationOptions
})

const createAppRouter = (container: NavigationContainer): NavigationContainer => {
  useScreens();
  return createAppContainer(container);
}


export const Router: NavigationContainer = createAppRouter(AppNavigator);
