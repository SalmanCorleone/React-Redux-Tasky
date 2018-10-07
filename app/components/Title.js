import React, {Component} from 'react'
import {View, Text, StyleSheet, StatusBar} from 'react-native'
import {Header} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';



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
          leftComponent={<Icon name='home' color='#fff'/>}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'facebook', color: '#fff' }}
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
