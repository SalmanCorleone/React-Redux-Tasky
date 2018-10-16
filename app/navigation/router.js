import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import todoList from './todoList';
import doneList from './doneList';


export const AppWithNavigation = createBottomTabNavigator({
    todoList: {
      screen: todoList,
      navigationOptions: {
        tabBarLabel: 'Tasks',
        tabBarIcon: ({ tintColor }) => <Icon name="list" type="feather" size={35} color={tintColor} />
  }
    },
    doneList: {
      screen: doneList,
      navigationOptions: 
        {
        tabBarLabel: 'Completed',
        tabBarIcon: ({ tintColor }) => <Icon name="done" size={35} color={tintColor} />
        },
    },
  });