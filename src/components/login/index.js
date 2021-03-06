import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  ActivityIndicator
} from "react-native";
import { withNavigation } from "react-navigation";
import common from "../../common.js";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      ActivityIndicator_boolean: false
    };
  }
  login = async () => {
    if (__DEV__) {
      this.setState({
        ActivityIndicator_boolean: true
      });
      common.clearAsyncStorage();
      await fetch(
        "http://snova786-002-site17.etempurl.com/api/accounts/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
            // 'Authorization':''
          },
          body: JSON.stringify({
            UserName: this.state.email,
            password: this.state.password
          })
        }
      )
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson);
          console.log("ese hi");
          common.saveUserSession(
            this.state.email,
            this.state.password,
            responseJson.tokenString,
            responseJson.role,
            responseJson.expiresOn
          );
          this.setState({
            email: "",
            password: "",
            ActivityIndicator_boolean: "false"
          });
          this.props.navigation.navigate("DashBoard");
        })
        .catch(function(error) {
          this.setState({
            ActivityIndicator_boolean: false
          });
          alert("Enter Right Password/Email");
          console.log(error);
        });
    } else {
      console.log("Release APK ");
    }
  };
  SignUp = () => {
    this.props.navigation.navigate("SignUp");
  };
  forgetPassword = () => {
    this.props.navigation.navigate("ForgetPassword");
  };
  render() {
    return (
      <View>
        <Text
          style={{
            fontSize: 30
          }}
        >
          {" "}
          Login{" "}
        </Text>
        <View
          style={{
            // justifyContent:'center',
            // alignItems: 'center',
            width: "50%",
            height: 100,
            marginTop: 10
            // backgroundColor:'red'
          }}
        >
          <Text>Email:</Text>
          <TextInput
            keyboardType={"email-address"}
            style={{
              borderColor: "grey",
              borderBottomWidth: 1,
              height: 40
            }}
            placeholder="Email"
          />
        </View>
        <View
          style={{
            // justifyContent:'center',
            // alignItems: 'center',
            width: "50%",
            height: 100,
            marginTop: 10
            // backgroundColor:'red'
          }}
        >
          <Text>Password:</Text>
          <TextInput
            style={{
              borderColor: "grey",
              borderBottomWidth: 1,
              height: 40
            }}
            secureTextEntry={true}
            placeholder="Password"
          />
        </View>
        {this.state.ActivityIndicator_boolean ? (
          <View>
            <ActivityIndicator size="large" color="#0077c7" />
          </View>
        ) : null}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TouchableWithoutFeedback onPress={this.login}>
            <Text
              style={{
                fontWeight: "bold"
              }}
            >
              Login
            </Text>
          </TouchableWithoutFeedback>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10
          }}
        >
          <TouchableWithoutFeedback onPress={this.forgetPassword}>
            <Text
              style={{
                fontWeight: "bold"
              }}
            >
              Forget Password
            </Text>
          </TouchableWithoutFeedback>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10
          }}
        >
          <TouchableWithoutFeedback onPress={this.SignUp}>
            <Text
              style={{
                fontWeight: "bold"
              }}
            >
              SignUp
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

export default withNavigation(Login);
