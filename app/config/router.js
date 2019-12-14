import React from 'react';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Theme from '../style/Theme';

import taskScreen from '../navigation/taskScreen';
import details from '../navigation/details';
import doneList from '../navigation/doneList';
import createTask from '../navigation/createTask';

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

const bottomNav = createBottomTabNavigator(
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
			inactiveTintColor: Theme.Tint,
			style: {
				backgroundColor: Theme.Secondary_Color
			}
		}
	}
);

export const AppWithNavigation = createAppContainer(bottomNav);
