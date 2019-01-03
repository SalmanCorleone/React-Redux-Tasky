import React, { Component } from 'react';
import { View, StyleSheet, Button, Text, StatusBar, LayoutAnimation, UIManager } from 'react-native';
import Input from '../components/Input';
import List from '../components/List';
import { connect } from 'react-redux';
import Theme from '../style/Theme';

import { actionCreators } from '../reducers/todoListRedux';

const mapStateToProps = (state) => ({
	done: state.done,
	tasks: state.tasks
});

class taskScreen extends Component {
	constructor(props) {
		super(props);
		UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
	}

	onAddTodo = (text) => {
		const { dispatch } = this.props;
		dispatch(actionCreators.quickAdd(text));
		LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
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
				<Input placeholder={'Enter Quick Task'} onSubmitEditing={this.onAddTodo} />
				<List tasks={tasks} />
				{/* <Button onPress={this.onReset} title="reset" /> */}
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
