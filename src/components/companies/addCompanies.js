import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Button,
  ActivityIndicator
} from "react-native";
import { withNavigation } from "react-navigation";
class AddCompanies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: "test 1",
      companyEmail: "test1@test1.com",
      CompanyNo: "090078601",
      companyAddress: "telefun",
      companyCurrency: "dollar",
      companyInvoiceNumberFormat: "1213",
      // companyLogoFileName: "",
      companyDateFormat: "dd/mm/yyyy",
      ActivityIndicator: false
    };
  }
  addCompany = async () => {
    if (__DEV__) {
      this.setState({
        ActivityIndicator:true
      });
      await fetch(
        "http://snova786-002-site17.etempurl.com/api/companies/AddOrUpdate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyTmFtZSI6Ijc5MTExYSIsImVtYWlsIjoiNDU2MTIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9tb2JpbGVwaG9uZSI6Ijc5MTExYSIsIlVzZXJJZCI6IjNiMmEyYjVlLWE1ZDUtNDliNy1hMGU0LTE4YjQyMTc4OGRkZiIsIkFwcGxpY2F0aW9uVXNlcklkIjoiNTJlZGNhYjYtMGNhOS00M2EzLWI2YTQtNjhkYTkxYmUxMGM3IiwidW5pcXVlX25hbWUiOiIxMjMiLCJyb2xlIjoiVXNlciIsIlN0YXR1cyI6IlBhcnRpYWwiLCJuYmYiOjE1NTU4NzYzNTUsImV4cCI6MTU1NjQ4MTE1NSwiaWF0IjoxNTU1ODc2MzU1fQ.r0Iwm5d0f_YvjJkmOggDjPco1jqvA5FToRG8hkzkB44"
          },
          body: JSON.stringify({
            name: this.state.companyName,
            address: this.state.companyAddress,
            email: this.state.companyEmail,
            officePhoneNumber: this.state.CompanyNo,
            //logoFileName: null,
            dateFormat: this.state.companyDateFormat,
            currency: this.state.companyCurrency,
            invoiceNumberFormat: this.state.companyInvoiceNumberFormat
          })
        }
      )
        .then(response => response.json())
        .then(responseJson => {
          alert("company added");
          console.log(responseJson);
          console.log("ese hi");
          this.setState({
            companyName: "",
            companyEmail: "",
            CompanyNo: "",
            companyAddress: "",
            companyCurrency: "",
            companyInvoiceNumberFormat: "",
            // companyLogoFileName: "",
            companyDateFormat: "",
            ActivityIndicator:false
          });
        })
        .catch(function(error) {
          this.setState({
            ActivityIndicator:false
          });
          alert("Error in Adding Company Process Please Try Again/Later");
          console.log(error);
        });
    } else {
    }
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.inlineElements}>
          <Text>Company Name:</Text>
          <TextInput
            style={styles.textBoxStyle}
            value={this.state.companyName}
            onChangeText={e => {
              this.setState({
                companyName: e
              });
            }}
            placeholder="Full Name"
          />
        </View>
        <View style={styles.inlineElements}>
          <Text>Company Email:</Text>
          <TextInput
            style={styles.textBoxStyle}
            keyboardType={"email-address"}
            value={this.state.companyEmail}
            onChangeText={e => {
              this.setState({
                companyEmail: e
              });
            }}
            placeholder="Email Address"
          />
        </View>
        <View style={styles.inlineElements}>
          <Text>Company Contact No.:</Text>
          <TextInput
            style={styles.textBoxStyle}
            keyboardType={"numeric"}
            value={this.state.CompanyNo}
            onChangeText={e => {
              this.setState({
                CompanyNo: e
              });
            }}
            placeholder="Contact No."
          />
        </View>
        <View style={styles.inlineElements}>
          <Text>Company Address:</Text>
          <TextInput
            style={styles.textBoxStyle}
            value={this.state.companyAddress}
            onChangeText={e => {
              this.setState({
                companyAddress: e
              });
            }}
            placeholder="Company Address"
          />
        </View>
        <View style={styles.inlineElements}>
          <Text>Company's Preferred Date Format :</Text>
          <TextInput
            style={styles.textBoxStyle}
            value={this.state.companyDateFormat}
            onChangeText={e => {
              this.setState({
                companyDateFormat: e
              });
            }}
            placeholder="Preferred Date Format"
          />
        </View>
        <View style={styles.inlineElements}>
          <Text>Company's Preferred Invoice Number Format :</Text>
          <TextInput
            style={styles.textBoxStyle}
            value={this.state.companyInvoiceNumberFormat}
            onChangeText={e => {
              this.setState({
                companyInvoiceNumberFormat: e
              });
            }}
            placeholder="Preferred Invoice Number Format"
          />
        </View>
        <View style={styles.inlineElements}>
          <Text>Company's Preferred Currency :</Text>
          <TextInput
            style={styles.textBoxStyle}
            value={this.state.companyCurrency}
            onChangeText={e => {
              this.setState({
                companyCurrency: e
              });
            }}
            placeholder="Preferred Currency"
          />
        </View>
        {this.state.ActivityIndicator ? 
          <View>
            <ActivityIndicator size="large" color="#0077c7" />
          </View>
         : 
          <View>
            <Button 
            onPress={this.addCompany}
            title="ADD" />
          </View>
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  textBoxStyle: {
    borderColor: "grey",
    borderBottomWidth: 1,
    height: 40
    // backgroundColor:'yellow'
  },
  inlineElements: {
    // flexDirection:'row',
    width: "50%",
    height: 77,
    marginTop: 1
    // backgroundColor:'red'
  }
});

export default withNavigation(AddCompanies);
