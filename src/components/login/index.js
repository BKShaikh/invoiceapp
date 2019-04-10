import React, { Component } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback } from 'react-native';
import { withNavigation } from 'react-navigation';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    login = () => {
        this.props.navigation.navigate('DashBoard')
    }
    SignUp = () => {
        this.props.navigation.navigate('SignUp')
    }
    forgetPassword = () => {
        this.props.navigation.navigate('ForgetPassword')
    }
    render() {
        return (
            <View>
                <Text style={{
                    fontSize: 30
                }}> Login </Text>
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
                    }}>
                    <TouchableWithoutFeedback
                        onPress={this.login}>
                        <Text
                            style={{
                                fontWeight: "bold"
                            }}>Login</Text>
                    </TouchableWithoutFeedback>
                </View>
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop:10
                    }}>
                    <TouchableWithoutFeedback
                        onPress={this.forgetPassword}>
                        <Text
                            style={{
                                fontWeight: "bold"
                            }}>Forget Password</Text>
                    </TouchableWithoutFeedback>
                </View>
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop:10
                    }}>
                    <TouchableWithoutFeedback
                        onPress={this.SignUp}>
                        <Text
                            style={{
                                fontWeight: "bold"
                            }}>SignUp</Text>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        );
    }
}

export default withNavigation(Login);
