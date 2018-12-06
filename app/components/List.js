import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

export default class List extends Component {
	renderItem = (text, i) => {
		const { onPressItem, onTick } = this.props;

		return (
			<TouchableOpacity style={styles.item} key={i}>
				<TouchableOpacity
					style={{ flex: 2, backgroundColor: '#2979FF', padding: 15 }}
					onPress={() => onTick(i, text)}
				>
					<Icon color="whitesmoke" name="check" type="evilicon" />
				</TouchableOpacity>
				<TouchableOpacity style={{ flex: 8, padding: 15 }} onPress={() => onPressItem(i, text)}>
					<Text style={{ color: 'whitesmoke' }}>{text.text}</Text>
				</TouchableOpacity>
			</TouchableOpacity>
		);
	};

	render() {
		const { list } = this.props;
		// list.sort((a,b)=>a.date-b.date);

		return <ScrollView>{list.map(this.renderItem)}</ScrollView>;
	}
}

const styles = StyleSheet.create({
	item: {
		alignItems: 'center',
		flexDirection: 'row',
		backgroundColor: '#34495e',
		marginBottom: 5
	}
});
