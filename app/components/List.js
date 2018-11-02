import React, { Component } from 'react'
import { ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native'

export default class List extends Component {

  renderItem = (text, i) => {
    const {onPressItem} = this.props

    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => onPressItem(i, text)}
        key={i}
      >
        <Text style={{color: 'whitesmoke'}}>{JSON.stringify(text)}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    const {list} = this.props

    return (
      <ScrollView>        
        {list.map(this.renderItem)}        
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#34495e',
    marginBottom: 5,
    padding: 15,
    
  },
})