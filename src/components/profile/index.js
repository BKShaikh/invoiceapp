import React, { Component } from "react";
import {
  View,
  TextView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  ScrollView,
  Alert
} from "react-native";
import { withNavigation } from "react-navigation";
import common from "../../common.js";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        fullName: "bila",
        email: "as@c.com",
        phone: "123",
        password: "Abc123++",
        newPassword:"",
      };
  }
  updateProfile = async () => {
    // if (common.checkNetworkStat()==false){
    //   console.log('Check Your Wifi/Mobile Data Connection')
    // }        will check internet connected or not
    // else{
    console.log("aa bhi rha hai ? ");
    // if (this.state.fullName != "" && this.state.email != "" && this.state.password != "" && this.state.phone != ""&& this.state.newPassword != "") {
    console.log("aa bhi rha hai ? sub mil gaya ");
    if (__DEV__) {
      await fetch(
        "http://snova786-002-site17.etempurl.com/api/accounts/UpdateProfile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
            // 'Authorization':''
          },
          body: JSON.stringify({
            fullName: this.state.fullName,
            email: this.state.email,
            phone: this.state.phone,
            password: this.state.password,
            newPassword: this.state.newPassword,
            userStatus: 0
          })
        }
      )
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson);
          console.log("ese hi");
          this.setState({
            fullName: "",
            email: "",
            phone: "",
            password: "",
            newPassword:""
          });
        })
        .catch(function(error) {
            alert('Error in SignUp Process Please Try Again/Later')
          console.log(error);
        });
    } else {
      console.log("Release APK ");
    }
    // }
    // else if (this.state.fullName != "") {
    //     console.log('aa bhi rha hai ? nhi mil gaya ')
    //     alert('Enter Full Name');
    // }
    // else if (this.state.phone != "") {
    //     alert('Enter Phone');
    //     console.log('aa bhi rha hai ? nhi mil gaya ')
    // }
    // else if (this.state.email != "") {
    //     alert('Enter Email');
    //     console.log('aa bhi rha hai ? nhi    mil gaya ')
    // }
    // else if (this.state.password != "") {
    //     alert('Enter Password');
    //     console.log('aa bhi rha hai ? nhi ss mil gaya ')
    // }
    // else {
    //     console.log('ye kya scene hai ?')
    // }
    // }
  };
  render() {
    return (
      <ScrollView>
        <Text> Update Profile </Text>
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
          <Text>Full Name:</Text>
          <TextInput
            style={{
              borderColor: "grey",
              borderBottomWidth: 1,
              height: 40
            }}
            value={this.state.fullName}
            onChangeText={e => {
              this.setState({
                fullName: e
              });
            }}
            placeholder="Full Name"
          />
        </View>
        <View
          style={{
            width: "50%",
            height: 100,
            marginTop: 10
          }}
        >
          <Text>Phone:</Text>
          <TextInput
            keyboardType={"numeric"}
            style={{
              borderColor: "grey",
              borderBottomWidth: 1,
              height: 40
            }}
            value={this.state.phone}
            onChangeText={e => {
              this.setState({
                phone: e
              });
            }}
            placeholder="Phone Number"
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
          <Text>Email:</Text>
          <TextInput
            keyboardType={"email-address"}
            style={{
              borderColor: "grey",
              borderBottomWidth: 1,
              height: 40
            }}
            value={this.state.email}
            onChangeText={e => {
              this.setState({
                email: e
              });
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
          <Text>Old Password:</Text>
          <TextInput
            style={{
              borderColor: "grey",
              borderBottomWidth: 1,
              height: 40
            }}
            value={this.state.password}
            onChangeText={e => {
              this.setState({
                password: e
              });
            }}
            secureTextEntry={true}
            placeholder="Password"
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
          <Text>New Password:</Text>
          <TextInput
            style={{
              borderColor: "grey",
              borderBottomWidth: 1,
              height: 40
            }}
            value={this.state.newPassword}
            onChangeText={e => {
              this.setState({
                newPassword: e
              });
            }}
            secureTextEntry={true}
            placeholder="New Password"
          />
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10
          }}
        >
          <TouchableWithoutFeedback>
            <Text
              style={{
                fontWeight: "bold"
              }}
              onPress={this.updateProfile}
            >
              Update Profile
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    );
  }
}

export default withNavigation(Profile);
