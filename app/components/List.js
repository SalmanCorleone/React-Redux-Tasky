import React, { Component } from 'react';
import { ScrollView, ToastAndroid, View, Text } from 'react-native';
import { connect } from 'react-redux';
import Item from './Item';
import { actionCreators } from '../reducers/todoListRedux';
import Theme from '../style/Theme';

const mapStateToProps = (state) => ({});

class List extends Component {
	renderItem = (item, i) => {
		return <Item key={i} item={item} id={i} onTick={this.onTick} />;
	};
	onDelete = () => {};
	onTick = (i, item) => {
		const { dispatch } = this.props;
		dispatch(actionCreators.remove(i, item));
		ToastAndroid.show('Task Completed!', ToastAndroid.SHORT);
	};

	render() {
		const { tasks } = this.props;
		var todayList = tasks.filter((task) => new Date(task.date).toDateString() == new Date().toDateString());
		var otherList = tasks.filter((task) => new Date(task.date).toDateString() != new Date().toDateString());
		// list.sort((a,b)=>a.date-b.date);

		if (tasks === undefined || tasks.length == 0) {
			return null;
		} else {
			return (
				<ScrollView>
					<View style={{ flex: 1, marginHorizontal: 10, marginTop: 20, marginBottom: 5 }}>
						<Text style={{ color: Theme.Border }}>Today</Text>
					</View>
					<View>{todayList.map(this.renderItem)}</View>
					<View style={{ flex: 1, marginHorizontal: 10, marginTop: 20, marginBottom: 5 }}>
						<Text style={{ color: Theme.Border }}>Others</Text>
					</View>
					<View>{otherList.map(this.renderItem)}</View>
				</ScrollView>
			);
		}
	}
}

export default connect(mapStateToProps)(List);
