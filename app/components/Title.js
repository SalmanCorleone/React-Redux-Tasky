import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Header } from 'react-native-elements';
import Theme from '../style/Theme';

export default class Title extends Component {
	state = {
		language: ''
	};

	render() {
		const { children } = this.props;

		return (
			<View>
				<StatusBar backgroundColor={Theme.Primary_Color} barStyle="light-content" />

				<Header
					outerContainerStyles={{
						backgroundColor: Theme.Primary_Color,
						borderBottomWidth: 0
					}}
					leftComponent={{}}
					centerComponent={{ text: 'Taskify', style: { color: '#fff' } }}
				/>
			</View>
		);
	}
}
