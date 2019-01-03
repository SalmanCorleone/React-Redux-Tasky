import React, { Component } from 'react';
import { ScrollView, ToastAndroid, View, Text, LayoutAnimation, UIManager } from 'react-native';
import { connect } from 'react-redux';
import Item from './Item';
import { actionCreators } from '../reducers/todoListRedux';
import Theme from '../style/Theme';

var groupData = (items) => {
	let result = {};

	items.map((item) => {
		let date = new Date(item.date).toDateString();
		if (!result[date]) {
			result[date] = [];
		}
		result[date].push(item);
	});

	return result;
};
class List extends Component {
	constructor(props) {
		super(props);
		UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
	}

	hey = (group, i) => {
		return (
			<View key={i}>
				<View style={{ flex: 1, marginHorizontal: 10, marginTop: 20, marginBottom: 5 }}>
					<Text style={{ color: Theme.Border }}>{group[0]}</Text>
				</View>
				{group[1].map(this.renderItem)}
			</View>
		);
	};

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
		var groupedByDate = groupData(tasks);

		/********RENDER*********/

		if (tasks === undefined || tasks.length == 0) {
			return null;
		} else {
			return (
				<ScrollView>
					{/* <Text style={{ color: 'whitesmoke' }}>{JSON.stringify(groupedByDate)}</Text> */}
					{Object.entries(groupedByDate).map(this.hey)}
				</ScrollView>
			);
		}
	}
}

export default connect()(List);
