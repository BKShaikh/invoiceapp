import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';


class Customers extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ScrollView>
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'red',
                    }}>
                    <View
                    style={{
                        backgroundColor: 'red',
                    }}>
                    <Text>Bilal</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default withNavigation(Customers);
