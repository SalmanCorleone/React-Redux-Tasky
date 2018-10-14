import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import todoList from './todoList';
import doneList from './doneList';


export const AppWithNavigation = TabNavigator({
    todoList: {
      screen: todoList,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
  }
    },
    doneList: {
      screen: doneList,
      navigationOptions: 
        {
        tabBarLabel: 'Me',
        tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
        },
    },
  });