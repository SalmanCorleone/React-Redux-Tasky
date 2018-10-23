import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import {FormInput, Button} from 'react-native-elements'

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
        <View style={styles.leftbox}>        
          <FormInput         
          value={text}
          placeholder={placeholder}
          placeholderTextColor='white'
          onChangeText={this.onChangeText}
          inputStyle={{color:'white'}}
          onSubmitEditing={this.onSubmitEditing}
          />
        </View>
        <View style={styles.rightbox}>
        <Button         
            buttonStyle={styles.button}
            backgroundColor="#2979FF"
            title="ADD"
            fontSize={10}
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
    flex: 7,

  },
  rightbox: 
  {
    flex: 3,
    
    justifyContent: 'center',
  },
  button:{
       
  }
})
