import React from 'react';
import {mapping, light as lightTheme} from '@eva-design/eva';
import {ApplicationProvider, Layout, Text} from 'react-native-ui-kitten';
import store from "./src/config/store";
import SimpleComponent  from "./src/components/SimpleComponent"
import {Provider} from "react-redux";

const ApplicationContent = () => (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <SimpleComponent />
    </Layout>
)

const App = () => (
    <Provider store={store}>
        <ApplicationProvider mapping={mapping} theme={lightTheme}>
            <ApplicationContent/>
        </ApplicationProvider>
    </Provider>
)

export default App