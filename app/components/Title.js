import React, {Component} from 'react'
import {View, StyleSheet, StatusBar} from 'react-native'
import {Header, Icon} from 'react-native-elements'



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
          leftComponent={<Icon name='home' type='font-awesome' color="#fff"/>}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'alarm', color: '#fff' }}
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
