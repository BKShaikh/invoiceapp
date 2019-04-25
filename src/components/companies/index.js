import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { withNavigation } from "react-navigation";

let deleteIcon = require("../../../assets/logo/deleteIconRed.png");
let editIcon = require("../../../assets/logo/editProfileIcon.png");
let shareIcon = require("../../../assets/logo/shareIcon.png");
// var invoiceData=[];
// import localStorage from '../../localStorage.js';

class Companies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      ActivityIndicator: false
    };
  }
  componentWillMount() {
    var data = this.getAllCompanyData();
    console.log(data);
    var allCompanyData = [];
    data.forEach(element => {
      allCompanyData.push({
            id: element.id,
            name: element.name,
            email: element.email,
            officePhoneNumber: element.officePhoneNumber,
            address: element.address
          });
    });
    // ((element, i) => {
    //   allCompanyData.push({
    //     id: element.id,
    //     name: element.name,
    //     email: element.email,
    //     officePhoneNumber: element.officePhoneNumber,
    //     address: element.address
    //   });
    // var allCompanyData = data.forEach(element => {
    //   allCompanyData.push({
    //     id:element.id,
    //     name:element.name,
    //     email:element.email,
    //     officePhoneNumber:element.officePhoneNumber,
    //     address:element.address
    //   })
    // });;
    // this.allCompanyData = [
    //   {
    //     invoiceNumber: "000000001",
    //     CustomerName: "001"
    //   },
    //   {
    //     invoiceNumber: "000000002",
    //     CustomerName: "002"
    //   },

    //   {
    //     invoiceNumber: "000000003",
    //     CustomerName: "003"
    //   },

    //   {
    //     invoiceNumber: "000000004",
    //     CustomerName: "004"
    //   },

    //   {
    //     invoiceNumber: "000000005",
    //     CustomerName: "005"
    //   }
    // ];
  }
  getAllCompanyData = async () => {
    if (__DEV__) {
      await fetch(
        "http://snova786-002-site17.etempurl.com/api/companies/GetAll?pageNumber=1&pageSize=1000",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyTmFtZSI6Ijc5MTExYSIsImVtYWlsIjoiNDU2MTIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9tb2JpbGVwaG9uZSI6Ijc5MTExYSIsIlVzZXJJZCI6IjNiMmEyYjVlLWE1ZDUtNDliNy1hMGU0LTE4YjQyMTc4OGRkZiIsIkFwcGxpY2F0aW9uVXNlcklkIjoiNTJlZGNhYjYtMGNhOS00M2EzLWI2YTQtNjhkYTkxYmUxMGM3IiwidW5pcXVlX25hbWUiOiIxMjMiLCJyb2xlIjoiVXNlciIsIlN0YXR1cyI6IlBhcnRpYWwiLCJuYmYiOjE1NTU4NzYzNTUsImV4cCI6MTU1NjQ4MTE1NSwiaWF0IjoxNTU1ODc2MzU1fQ.r0Iwm5d0f_YvjJkmOggDjPco1jqvA5FToRG8hkzkB44"
          }
        }
      )
        .then(response => response.json())
        .then(responseJson => {
          // alert(responseJson);
          console.log(responseJson);
          console.log("ese hi");
          return JSON.stringify(responseJson);
        })
        .catch(function(error) {
          alert("Error in Getting Company Please Try Again/Later");
          console.log(error);
        });
    } else {
    }
  };
  deleteInvoice = No => {
    console.log("delete");
    console.log(No);

    var index = this.invoiceData.map(e => e.invoiceNumber).indexOf(No);
    this.invoiceData.splice(index, 1);
    this.setState({ count: this.state.count + 1 });
  };
  editInvoice = No => {
    this.props.navigation.navigate("EditInvoice", {
      invoiceNumber: No
    });
  };
  addInvoice = () => {
    this.props.navigation.navigate("AddInvoice");
  };
  render() {
    return (
      <ScrollView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center"
            // backgroundColor: 'red',
          }}
        >
          <Text>Companies</Text>
          {this.allCompanyData.map((companyData, i) => {
            return (
              <View
                key={companyData.id}
                style={{
                  marginTop: 10,
                  marginBottom: 10,
                  width: "85%",
                  height: 200,
                  backgroundColor: "grey"
                }}
              >
                <View
                  style={{
                    marginTop: 4,
                    // marginRight: 2,
                    flexDirection: "row",
                    // alignItems: "stretch",
                    justifyContent: "space-between"
                  }}
                >
                  <View>
                    <Text>
                      {
                        // console.log('ch')
                        companyData.id
                      }
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row"
                    }}
                  >
                    <View>
                      <Image
                        source={shareIcon}
                        style={{
                          marginRight: 15
                        }}
                      />
                    </View>
                    <View>
                      <TouchableOpacity
                        onPress={this.editInvoice.bind(this, companyData.id)}
                      >
                        <Image
                          source={editIcon}
                          style={{
                            marginRight: 15
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                    <View>
                      <TouchableOpacity
                        onPress={this.deleteInvoice.bind(this, companyData.id)}
                      >
                        <Image source={deleteIcon} style={{}} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={{}}>
                  <Text>companyData.Name</Text>
                </View>
                <View style={{}}>
                  <Text>companyData.officePhoneNumber</Text>
                </View>
                <View style={{}}>
                  <Text>companyData.address</Text>
                </View>
                <View style={{}}>
                  <Text>companyData.email</Text>
                </View>
              </View>
            );
          })}
          <View
            style={{
              marginBottom: 10
            }}
          >
            <TouchableOpacity onPress={this.addInvoice.bind(this)}>
              <View
                style={{
                  backgroundColor: "red",
                  width: 150,
                  height: 50,
                  borderRadius: 100 / 2,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20
                  }}
                >
                  Add Invoice
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default withNavigation(Companies);
