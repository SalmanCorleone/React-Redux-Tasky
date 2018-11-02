import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import todoList from './todoList';
import taskList from './taskList'
import details from './details';
import doneList from './doneList';


const todoStack = createStackNavigator(
  {
  Home: taskList,
  Details: details,
  },
  {
  headerMode: 'none',
  mode: 'modal',
}
);


export const AppWithNavigation = createBottomTabNavigator({
    todoList: 
    {
      screen: todoStack,      
      navigationOptions: 
      {
        tabBarLabel: 'Tasks',
        tabBarIcon: ({ tintColor }) => <Icon name="list" type="feather" size={25} color={tintColor} />
      }
    },
    doneList: 
    {
      screen: doneList,
      navigationOptions: 
        {
        tabBarLabel: 'Completed',
        tabBarIcon: ({ tintColor }) => <Icon name="done" size={25} color={tintColor} />
        },
    },
  


  },
  {

    tabBarOptions: {
      activeTintColor: '#fff',
      inactiveTintColor: '#CFD8DC',      
      style: {
        backgroundColor: '#2979FF',
      },
    }
  }
  );