import React, { Component } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Animated, PanResponder, Dimensions } from 'react-native';
import Title from '../components/Title';
import Input from '../components/Input';
import List from '../components/List';
import { connect } from 'react-redux';
import { Button, Text, Icon, Fab } from 'native-base';

import { actionCreators } from '../reducers/todoListRedux';

const { width, height } = Dimensions.get('window');

const mapStateToProps = (state) => ({
	done: state.done,
	tasks: state.tasks
});

class taskScreen extends Component {
	constructor(props) {
		super(props);
	}

	onAddTodo = (text) => {
		const { dispatch } = this.props;
		dispatch(actionCreators.add(text));
	};
	onTick = (index, item) => {
		const { dispatch } = this.props;
		dispatch(actionCreators.remove(index, item));
	};
	onReset = () => {
		const { dispatch } = this.props;
		dispatch(actionCreators.reset());
	};

	render() {
		const { tasks } = this.props;

		return (
			<KeyboardAvoidingView style={styles.back}>
				<Title />
				<Button onPress={this.onReset}>
					<Text>Reset</Text>
				</Button>

				<Input placeholder={'Enter Quick Task'} onSubmitEditing={this.onAddTodo} />
				<List list={tasks} />
			</KeyboardAvoidingView>
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
