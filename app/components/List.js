import React, { Component } from 'react';
import { ScrollView, ToastAndroid, View, Text, LayoutAnimation, UIManager } from 'react-native';
import { connect } from 'react-redux';
import Item from './Item';
import { actionCreators } from '../reducers/todoListRedux';
import Theme from '../style/Theme';

class List extends Component {
	state = {
		closedIndices: []
	};
	constructor(props) {
		super(props);
		UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
	}

	renderItem = (item, i) => {
		return <Item key={item.id} item={item} id={i} onDone={this.onDone} onRemove={this.onRemove} />;
	};

	onRemove = (item) => {
		const { dispatch } = this.props;
		dispatch(actionCreators.remove(item));
		LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
		ToastAndroid.show('Task Deleted!', ToastAndroid.SHORT);
	};
	onDone = (item) => {
		const { dispatch } = this.props;
		dispatch(actionCreators.done(item));
		LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
		ToastAndroid.show('Task Completed!', ToastAndroid.SHORT);
	};

	render() {
		const { tasks } = this.props;
		var todayList = tasks.filter((task) => new Date(task.date).toDateString() == new Date().toDateString());
		var otherList = tasks.filter((task) => new Date(task.date).toDateString() != new Date().toDateString());

		let todayPartTitle, otherPartTitle;
		// list.sort((a,b)=>a.date-b.date);

		if (todayList.length != 0) {
			todayPartTitle = (
				<View style={{ flex: 1, marginHorizontal: 10, marginTop: 20, marginBottom: 5 }}>
					<Text style={{ color: Theme.Border }}>Today</Text>
				</View>
			);
		}
		if (otherList.length != 0) {
			otherPartTitle = (
				<View style={{ flex: 1, marginHorizontal: 10, marginTop: 20, marginBottom: 5 }}>
					<Text style={{ color: Theme.Border }}>Others</Text>
				</View>
			);
		}

		if (tasks === undefined || tasks.length == 0) {
			return null;
		} else {
			return (
				<ScrollView>
					{/* today */}

					{todayPartTitle}

					<View>{todayList.map(this.renderItem)}</View>

					{/* others */}

					{otherPartTitle}

					<View>{otherList.map(this.renderItem)}</View>
				</ScrollView>
			);
		}
	}
}

export default connect()(List);
