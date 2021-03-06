import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { FormInput, Button, Icon, Text } from 'react-native-elements';
import { actionCreators } from '../reducers/todoListRedux';

import { connect } from 'react-redux';

import Title from '../components/Title';

const mapStateToProps = (state) => ({
	done: state.done,
	tasks: state.tasks
});
class createTask extends Component {
	state = {
		task: '',
		date: new Date(),
		type: ''
	};

	onChangeTask = (text) => {
		this.setState({ task: text });
	};
	setDate = (date) => {
		this.setState({ date: date });
	};
	onChangeType = (type) => {
		this.setState({ type: type });
	};
	onSubmit = () => {
		const { task, date, type } = this.state;
		const { dispatch, navigation } = this.props;

		if (!task) return;
		dispatch(actionCreators.create(task, date, type));
		navigation.goBack();
	};

	render() {
		const { task, type, date } = this.state;
		return (
			<View style={styles.back}>
				<Title />

				<View style={styles.title}>
					<Text h4 style={{ color: 'whitesmoke' }}>
						Create New Task
					</Text>
				</View>

				<View style={{ paddingTop: 50 }}>
					<View style={styles.item}>
						<View style={styles.lefticon}>
							<Icon name="add-box" color="whitesmoke" />
						</View>

						<View style={styles.rightpart}>
							<FormInput
								style={{ padding: 0 }}
								value={task}
								// autoFocus={true}
								placeholderTextColor="whitesmoke"
								inputStyle={{ color: 'whitesmoke' }}
								onChangeText={this.onChangeTask}
							/>
						</View>
					</View>

					<View style={styles.item}>
						<View style={styles.lefticon}>
							<Icon name="date-range" color="whitesmoke" />
						</View>

						<View style={styles.rightpart}>
							<DatePicker
								defaultDate={new Date()}
								minimumDate={new Date(2018, 1, 1)}
								maximumDate={new Date(2020, 12, 31)}
								locale={'en'}
								timeZoneOffsetInMinutes={undefined}
								modalTransparent={false}
								animationType={'fade'}
								androidMode={'default'}
								textStyle={{ color: 'whitesmoke' }}
								placeHolderTextStyle={{ color: 'whitesmoke' }}
								onDateChange={this.setDate}
								selectedValue={date.toString()}
							/>
						</View>
					</View>

					<View style={styles.item}>
						<View style={styles.lefticon}>
							<Icon name="poll" color="whitesmoke" />
						</View>

						<View style={styles.rightpart}>
							<Picker
								mode="dialog"
								iosIcon={<Icon name="archive" color="whitesmoke" />}
								style={{ color: 'whitesmoke' }}
								selectedValue={type}
								backgroundColor="red"
								onValueChange={this.onChangeType}
							>
								<Picker.Item label="Personal" value="Personal" />
								<Picker.Item label="Work" value="Work" />
								<Picker.Item label="Grocery" value="Grocery" />
								<Picker.Item label="Family" value="Family" />
								<Picker.Item label="Hobby" value="Hobby" />
							</Picker>
						</View>
					</View>
				</View>

				<Button title="Save" backgroundColor="#2979FF" onPress={this.onSubmit} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	back: {
		flex: 1,
		backgroundColor: '#2c3e50'
	},

	title: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20
	},

	item: {
		flexDirection: 'row',
		paddingLeft: 15,
		backgroundColor: '#34495e',
		margin: 5,
		alignItems: 'center'
	},
	lefticon: {
		flex: 1,
		alignItems: 'center'
	},
	rightpart: {
		flex: 9,
		paddingLeft: 10
	}
});

export default connect(mapStateToProps)(createTask);
