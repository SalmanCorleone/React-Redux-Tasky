import React, { Component } from "react";
import { View, StyleSheet, StatusBar, Picker } from "react-native";
import { Header } from "react-native-elements";

export default class Title extends Component {
  state = {
    language: ""
  };

  render() {
    const { children } = this.props;

    return (
      <View>
        <StatusBar backgroundColor="#2979FF" barStyle="light-content" />

        <Header
          outerContainerStyles={{
            backgroundColor: "#2979FF",
            borderBottomWidth: 0
          }}
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{ text: "Taskify", style: { color: "#fff" } }}
        />
      </View>
    );
  }
}
