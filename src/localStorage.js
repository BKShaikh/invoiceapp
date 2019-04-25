import React, { Component } from 'react'
import {
    AppRegistry, BackHandler, Alert, AsyncStorage, NetInfo
} from 'react-native'

class LocalStorage extends Component {

    async saveUserSession(userid, password,token,role,expiresOn) {
        this.storeItem("userId", userid);
        this.storeItem("userPass", password);
        this.storeItem("token",token);
        this.storeItem("userRole",role);
        this.storeItem("tokenExpiry",expiresOn);
    }

    async storeItem(key, item) {
        try {
            //we want to wait for the Promise returned by AsyncStorage.setItem()
            //to be resolved to the actual value before returning the value
            var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
            return jsonOfItem;
        } catch (error) {
            console.log(error.message);
        }
    }

    async checkNetworkStat() {
        var isNetConnected = await NetInfo.isConnected.fetch().then((isConnected) => {
            return isConnected;
        });
        return isNetConnected;
    }
    async retrieveItem(key) {
        var item = null;
        try {
            const retrievedItem = await AsyncStorage.getItem(key);
            item = JSON.parse(retrievedItem);
        } catch (error) {
            console.log(error.message);
        }
        return item;
    }

    clearAsyncStorage = async () => {
        AsyncStorage.clear();
    }
}
// const localStorage = new localStorage();
export default LocalStorage;