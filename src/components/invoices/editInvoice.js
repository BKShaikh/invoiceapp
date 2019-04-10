import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';

class EditInvoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentWillMount() {
    console.log(' nhi aai na ?')
  }
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('invoiceNumber', 'NO-ID');
    console.log(itemId);
    return (
      <View>
        <Text> Edit Invoice </Text>
      </View>
    );
  }
}

export default withNavigation(EditInvoice);
