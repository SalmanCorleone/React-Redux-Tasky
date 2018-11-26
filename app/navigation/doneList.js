import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { connect } from 'react-redux';
import Done from '../components/Done';
import Title from '../components/Title';
import { actionCreators } from '../reducers/todoListRedux';

const mapStateToProps = (state) => ({
	done: state.done
});

class doneList extends Component {
	onXdone = (index) => {
		const { dispatch } = this.props;
		dispatch(actionCreators.x_done(index));
	};
	render() {
		const { done } = this.props;

		return (
			<View style={styles.back}>
				<Title />
				<View style={styles.history}>
					<Text h4 style={{ color: 'whitesmoke' }}>
						Task History
					</Text>
				</View>

				<ScrollView>
					<Done list={done} onPressItem={this.onXdone} />
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	history: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20
	},
	back: {
		backgroundColor: '#2c3e50',
		flex: 1
	}
});

export default connect(mapStateToProps)(doneList);
