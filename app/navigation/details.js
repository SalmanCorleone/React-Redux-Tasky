import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Title from '../components/Title'

export default class details extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  

  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');
    return (
      <View>
        <Title></Title>
        <Text> This is America: {itemId} </Text>
        <Text> This is America: {otherParam} </Text>
      </View>
    );
  }
}

