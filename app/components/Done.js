import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

export default class Done extends Component {

  renderItem = (text, i) => {

    return (
      <TouchableOpacity
        style={styles.item}        
      >
        <Text>{text}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    const {list} = this.props

    return (
      <View>
        {list.map(this.renderItem)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'lightblue',
    marginBottom: 5,
    padding: 15,
  },
})
