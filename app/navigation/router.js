import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import taskScreen from './taskScreen';
import details from './details';
import doneList from './doneList';
import createTask from './createTask';

const todoStack = createStackNavigator(
	{
		Home: taskScreen,
		Details: details
	},
	{
		headerMode: 'none',
		mode: 'modal'
	}
);

export const AppWithNavigation = createBottomTabNavigator(
	{
		todoList: {
			screen: todoStack,
			navigationOptions: {
				tabBarLabel: 'Tasks',
				tabBarIcon: ({ tintColor }) => <Icon name="ios-list" type="ionicon" size={25} color={tintColor} />
			}
		},

		createTask: {
			screen: createTask,
			navigationOptions: {
				tabBarLabel: 'New',
				tabBarIcon: ({ tintColor }) => <Icon name="add" size={25} color={tintColor} />
			}
		},
		doneList: {
			screen: doneList,
			navigationOptions: {
				tabBarLabel: 'Completed',
				tabBarIcon: ({ tintColor }) => <Icon name="done" size={25} color={tintColor} />
			}
		}
	},
	{
		tabBarOptions: {
			activeTintColor: '#fff',
			inactiveTintColor: '#CFD8DC',
			style: {
				backgroundColor: '#2979FF'
			}
		}
	}
);
