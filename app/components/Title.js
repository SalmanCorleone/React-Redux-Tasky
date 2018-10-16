import React, {Component} from 'react'
import {View, StyleSheet, StatusBar} from 'react-native'
import {Header} from 'react-native-elements'



export default class Title extends Component {

  render() {
    const {children} = this.props

    return (
      <View>
        <StatusBar
           backgroundColor="#00b3ce"
           barStyle="light-content"


        />

        <Header
          outerContainerStyles={{ backgroundColor: '#00b3ce' }}
          leftComponent={{icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Taskify', style: { color: '#fff' } }}
          rightComponent={{ icon: 'arrow-drop-down', color: '#fff' }}
          >

          </Header>

      </View>
      )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'skyblue',
    padding: 15
  },
  title: {
    textAlign: 'center',
    color: 'white'
  }
})
