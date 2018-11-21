import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Title from "../components/Title";

export default class details extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam("itemId", "NO-ID");
    const item = navigation.getParam("item", "Not Assigned");
    return (
      <View style={styles.back}>
        <Title />
        <Text> ID: {itemId} </Text>
        <Text> Task: {item.text} </Text>
        <Text> Date: {item.date} </Text>
        <Text> Type: {item.type} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    backgroundColor: "#2c3e50",
    flex: 1
  }
});
