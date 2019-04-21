import React, { Component } from 'react';
import { NetInfo, AppRegistry, BackHandler, Alert, } from 'react-native';


class Common extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    async checkNetworkStat() {
        var isNetConnected = await NetInfo.isConnected.fetch().then((isConnected) => {
        console.log('yes-> ',isNetConnected)            
            return isConnected;
        });
        console.log('no-> ',isNetConnected)
        return isNetConnected;
    }
}
const common = new Common();
export default common;
