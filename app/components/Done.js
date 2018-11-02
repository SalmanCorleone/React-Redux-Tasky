import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

export default class Done extends Component {

  renderItem = (text, i) => {
    const {onPressItem}= this.props;

    return (
      <TouchableOpacity
        key={i}
        style={styles.item}
        onPress={()=>onPressItem(i)}        
      >
        <Text style={{color:'whitesmoke'}}>{text.text}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    const {list} = this.props

    return (
      <View style={styles.doneBox}>
        {list.map(this.renderItem)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    alignItems:'center',
    flexDirection: 'row',
    backgroundColor: '#34495e',
    marginBottom: 5,
    padding:15,    
  },
  doneBox: {
    paddingTop:10,
    paddingBottom:10,
  }
})
