import React, { Component } from 'react';
import { View, Text, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

let deleteIcon = require('../../../assets/logo/deleteIconRed.png');
let editIcon = require('../../../assets/logo/editProfileIcon.png');
let shareIcon = require('../../../assets/logo/shareIcon.png');
// var invoiceData=[];
class Invoices extends Component {
    constructor(props) {
        super(props);
        this.state = {

            count: 0,
        };
    }
    componentWillMount() {
        this.invoiceData = [
            {
                invoiceNumber: '000000001',
                CustomerName: '001'
            },
            {
                invoiceNumber: '000000002',
                CustomerName: '002'
            },

            {
                invoiceNumber: '000000003',
                CustomerName: '003'
            },

            {
                invoiceNumber: '000000004',
                CustomerName: '004'
            },

            {
                invoiceNumber: '000000005',
                CustomerName: '005'
            },
        ];
    }

    deleteInvoice = (No) => {
        console.log('delete')
        console.log(No);

        var index = this.invoiceData.map(e => e.
            invoiceNumber).indexOf(No);
        this.invoiceData.splice(index, 1)
        this.setState({ count: this.state.count + 1 })
    }
    editInvoice = (No) => {
        this.props.navigation.navigate('EditInvoice', {
            invoiceNumber: No
        })
    }
    addInvoice = () => {
        this.props.navigation.navigate('AddInvoice')
    }
    render() {
        return (
            <ScrollView>
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        // backgroundColor: 'red',
                    }}>
                    <Text>Invoices</Text>
                    {
                        this.invoiceData.map((invData, i) => {
                            return (
                                <View
                                    key={invData.invoiceNumber}
                                    style={{
                                        marginTop: 10,
                                        marginBottom: 10,
                                        width: '85%',
                                        height: 200,
                                        backgroundColor: 'grey',
                                    }}>
                                    <View
                                        style={{
                                            marginTop: 4,
                                            // marginRight: 2,
                                            flexDirection: 'row',
                                            // alignItems: "stretch",
                                            justifyContent: 'space-between'
                                        }}>
                                        <View
                                            style={{
                                                // marginRight:20
                                            }}>
                                            <Text>
                                                {
                                                    // console.log('ch')
                                                    invData.invoiceNumber
                                                }
                                            </Text>
                                        </View>
                                        <View
                                            style={{
                                                flexDirection: 'row'
                                            }}>
                                            <View>
                                                <Image
                                                    source={shareIcon}
                                                    style={{
                                                        marginRight: 15
                                                    }}>
                                                </Image>
                                            </View>
                                            <View>
                                                <TouchableOpacity
                                                    onPress={this.editInvoice.bind(this, invData.invoiceNumber)}>
                                                    <Image
                                                        source={editIcon}
                                                        style={{
                                                            marginRight: 15
                                                        }}>
                                                    </Image>
                                                </TouchableOpacity>
                                            </View>
                                            <View>
                                                <TouchableOpacity
                                                    onPress={this.deleteInvoice.bind(this, invData.invoiceNumber)}>
                                                    <Image
                                                        source={deleteIcon}
                                                        style={{

                                                        }}>
                                                    </Image>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                    <View
                                        style={{

                                        }}>
                                        <Text>
                                            Customer Name
                                      </Text>
                                    </View>
                                    <View
                                        style={{

                                        }}>
                                        <Text>
                                            More Details
                                      </Text>
                                    </View>
                                    <View
                                        style={{

                                        }}>
                                        <Text>
                                            Amount
                                          </Text>
                                    </View>
                                </View>
                            )
                        })
                    }
                    <View
                        style={{
                            marginBottom: 10
                        }}>
                        <TouchableOpacity
                            onPress={this.addInvoice.bind(this)}>
                            <View
                                style={{
                                    backgroundColor: 'red',
                                    width: 150,
                                    height: 50,
                                    borderRadius: 100 / 2,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: 20
                                    }}>
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

export default withNavigation(Invoices);
