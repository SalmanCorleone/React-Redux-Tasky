import React, { Component } from 'react'
import { ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native'

export default class List extends Component {

  renderItem = (text, i) => {
    const {onPressItem} = this.props

    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => onPressItem(i, text)}
      >
        <Text>{text}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    const {list} = this.props

    return (
      <ScrollView style={{marginBottom:150}}>        
        {list.map(this.renderItem)}        
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'whitesmoke',
    marginBottom: 5,
    padding: 15,
  },
})