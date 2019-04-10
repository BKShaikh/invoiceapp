import React, { Component } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback } from 'react-native';
import { withNavigation } from 'react-navigation';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    login = () => {
        this.props.navigation.navigate('Login')
    }
    render() {
        return (
            <View>
                <Text> Sign Up </Text>
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
                        // justifyContent:'center',
                        // alignItems: 'center',
                        width: '50%',
                        height: 100,
                        marginTop: 10
                        // backgroundColor:'red'
                    }}>
                    <Text>Password:</Text>
                    <TextInput
                        style={{
                            borderColor: 'grey',
                            borderBottomWidth: 1,
                            height: 40
                        }}
                        secureTextEntry={true}
                        placeholder="Password" />
                </View>
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 10
                    }}>
                    <TouchableWithoutFeedback>
                        <Text
                            style={{
                                fontWeight: "bold"
                            }}>Sign Up</Text>
                    </TouchableWithoutFeedback>
                </View>
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 10
                    }}>
                    <TouchableWithoutFeedback
                        onPress={this.login}>
                        <Text
                            style={{
                                fontWeight: "bold"
                            }}>Already have an account</Text>
                    </TouchableWithoutFeedback>
                </View>
            </View>

        );
    }
}

export default withNavigation(SignUp);
