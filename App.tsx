import React from 'react';
import {mapping, light as lightTheme} from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from 'react-native-ui-kitten';
import {ThemeContext, ThemeContextType} from "./src/core/themes";
import {ImageRequireSource} from 'react-native'
import store from "./src/config/store";
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {Provider} from "react-redux";
import {getCurrentStateName, RouteState} from "./src/core/navigation";
import {Router} from "./src/core/navigation/routes";
import {trackScreenTransition} from "./src/core/utils/analytics";
import {ApplicationLoader, Assets} from "./src/core/appLoader/applicationLoader.component";
import {DynamicStatusBar} from "./src/components/common/dynamicStatusBar.component";

const images: ImageRequireSource[] = [
    require('./src/assets/images/source/image-profile-1.jpg'),
    require('./src/assets/images/source/image-profile-2.jpg'),
    require('./src/assets/images/source/image-profile-3.jpg'),
    require('./src/assets/images/source/image-profile-4.jpg'),
    require('./src/assets/images/source/image-profile-5.jpg'),
    require('./src/assets/images/source/image-profile-6.jpg'),
    require('./src/assets/images/source/image-profile-7.jpg'),
    require('./src/assets/images/source/image-profile-8.jpg'),
    require('./src/assets/images/source/image-profile-9.jpg'),
    require('./src/assets/images/source/image-profile-10.jpg'),
];

const fonts: { [key: string]: number } = {
    'opensans-semibold': require('./src/assets/fonts/opensans-semibold.ttf'),
    'opensans-bold': require('./src/assets/fonts/opensans-bold.ttf'),
    'opensans-extrabold': require('./src/assets/fonts/opensans-extra-bold.ttf'),
    'opensans-light': require('./src/assets/fonts/opensans-light.ttf'),
    'opensans-regular': require('./src/assets/fonts/opensans-regular.ttf'),
};

const assets: Assets = {
    images: images,
    fonts: fonts,
};

class ApplicationContent extends React.Component {

    private onTransitionTrackError = (error: any): void => {
        console.warn('Analytics error: ', error.message);
    };

    onNavigationStateChange = (prevState: RouteState, currentState: RouteState) => {
        const prevStateName: string = getCurrentStateName(prevState);
        const currentStateName: string = getCurrentStateName(currentState);

        if (prevStateName !== currentStateName) {
            trackScreenTransition(currentStateName)
                .catch(this.onTransitionTrackError);
        }
    };

    render = () => (
        <Router onNavigationStateChange={this.onNavigationStateChange}/>
    )
}

class App extends React.Component {

    public render(): React.ReactNode {
        const contextValue: ThemeContextType = {
            currentTheme: 'Eva Light'
        };

        return (
            <Provider store={store}>
                <ApplicationLoader assets={assets}>
                    <IconRegistry icons={EvaIconsPack}/>
                    <ThemeContext.Provider value={contextValue}>
                        <ApplicationProvider mapping={mapping} theme={lightTheme}>
                            <DynamicStatusBar currentTheme={contextValue.currentTheme}/>
                            <ApplicationContent/>
                        </ApplicationProvider>
                    </ThemeContext.Provider>
                </ApplicationLoader>
            </Provider>)
    }
}

export default App
