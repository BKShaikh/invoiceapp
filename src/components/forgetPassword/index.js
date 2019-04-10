import React, { Component } from 'react';
import { View, Text,TextInput,TouchableWithoutFeedback } from 'react-native';
import { withNavigation } from 'react-navigation';

class ForgetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Text
                    style={{
                        fontSize: 30
                    }}> Forget Password </Text>
                <View
                    style={{
                        // justifyContent:'center',
                        // alignItems: 'center',
                        width: '50%',
                        height: 100,
                        marginTop: 10
                        // backgroundColor:'red'
                    }}>
                    <Text>Email:</Text>
                    <TextInput
                        keyboardType={"email-address"}
                        style={{
                            borderColor: 'grey',
                            borderBottomWidth: 1,
                            height: 40
                        }}
                        placeholder="Email" />
                </View>
                <View
                style={{
                    alignItems:'center',
                    justifyContent: 'center',
                    marginTop:10
                }}>
                    <TouchableWithoutFeedback>
                        <Text
                        style={{
                            fontWeight:'bold'
                        }}>
                        Enter
                        </Text>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        );
    }
}

export default withNavigation(ForgetPassword);
