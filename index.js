/**
 * @format
 */
import React, { Component } from 'react';
import { AppRegistry, Alert,Text } from 'react-native';
import { name as appName } from './app.json';
import AppNavigator from './route';

class Main extends Component {
    render() {
        return (
            // <Text>
            //     test
            // </Text>
           <AppNavigator/>
        );
    }
}

AppRegistry.registerComponent(appName, () => Main);
