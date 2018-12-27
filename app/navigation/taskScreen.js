import React, { Component } from 'react';
import { View, StyleSheet, Button, Text, StatusBar } from 'react-native';
import Input from '../components/Input';
import List from '../components/List';
import { connect } from 'react-redux';
import Theme from '../style/Theme';

import { actionCreators } from '../reducers/todoListRedux';

const mapStateToProps = (state) => ({
	done: state.done,
	tasks: state.tasks
});

var groupData = (data) => {
	let result = [];

	for (var d in data) {
		// get date from data
		var date = d.date;

		// add into new array and use key as the date
		if (!result[date]) {
			result[date] = [ d ];
		} else {
			// if key already existed, extend into group
			result[date].push(d);
		}
	}

	return result;
};

class taskScreen extends Component {
	constructor(props) {
		super(props);
	}

	onAddTodo = (text) => {
		const { dispatch } = this.props;
		dispatch(actionCreators.add(text));
	};

	onReset = () => {
		const { dispatch } = this.props;
		dispatch(actionCreators.reset());
	};

	render() {
		const { tasks } = this.props;

		return (
			<View style={styles.back}>
				<StatusBar backgroundColor={Theme.Primary_Color} barStyle="light-content" />
				<Text style={{ margin: 20, color: 'whitesmoke' }}>[Debug Console]</Text>
				<List tasks={tasks} />
				<Button onPress={this.onReset} title="reset" />
				<Input placeholder={'Enter Quick Task'} onSubmitEditing={this.onAddTodo} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	back: {
		backgroundColor: '#2c3e50',
		flex: 1
	}
});

export default connect(mapStateToProps)(taskScreen);
