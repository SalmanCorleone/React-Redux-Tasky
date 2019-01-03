import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { FormInput } from 'react-native-elements';
import Theme from '../style/Theme';

export default class Input extends Component {
	state = {
		text: ''
	};

	onChangeText = (text) => this.setState({ text });

	onSubmitEditing = () => {
		const { onSubmitEditing } = this.props;
		const { text } = this.state;

		if (!text) return; // Don't submit if empty

		onSubmitEditing(text);
		this.setState({ text: '' });
	};

	render() {
		const { placeholder } = this.props;
		const { text } = this.state;

		return (
			<View style={styles.main}>
				<View style={styles.leftbox}>
					<FormInput
						value={text}
						placeholder={placeholder}
						placeholderTextColor="white"
						onChangeText={this.onChangeText}
						inputStyle={{ color: 'white' }}
						onSubmitEditing={this.onSubmitEditing}
					/>
				</View>
				<TouchableOpacity style={styles.rightbox} onPress={this.onSubmitEditing}>
					<Text style={{ color: 'whitesmoke' }}>Add</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	main: {
		paddingHorizontal: 10,
		paddingVertical: 10,
		flexDirection: 'row'
		// borderTopWidth: 1,
		// borderColor: Theme.Border
	},
	leftbox: {
		flex: 7,
		backgroundColor: Theme.Highlight
	},
	rightbox: {
		flex: 3,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Theme.Secondary_Color
	}
});
