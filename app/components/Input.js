import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import {FormLabel, FormInput, Button} from 'react-native-elements'

export default class Input extends Component {

  state = {
    text: '',
  }

  onChangeText = (text) => this.setState({text})

  onSubmitEditing = () => {
    const {onSubmitEditing} = this.props
    const {text} = this.state

    if (!text) return // Don't submit if empty

    onSubmitEditing(text)
    this.setState({text: ''})
  }

  render() {
    const {placeholder} = this.props
    const {text} = this.state

    return (
      <View style={styles.main}>
        <View style={styles.rightbox}>        
          <FormInput        
            value={text}
            placeholder={placeholder}
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onSubmitEditing}
          />
        </View>
        <View style={styles.leftbox}>
        <Button         
            buttonStyle={styles.button}
            backgroundColor="skyblue"
            title="+"
            fontSize={20}
            onPress={this.onSubmitEditing}
            
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main:
  {
    marginTop: 10,
    marginBottom:10,
    padding: 5,
    flexDirection: "row",
  },
  leftbox:
  {
    flex: 2,

  },
  rightbox: 
  {
    flex: 8,
    
    justifyContent: 'center',
  },
  button:{
       
  }
})
