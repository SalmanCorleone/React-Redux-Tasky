import React, { Component } from 'react';
import { ScrollView, ToastAndroid, View, Text } from 'react-native';
import { connect } from 'react-redux';
import Item from './Item';
import { actionCreators } from '../reducers/todoListRedux';

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
		const { list, day } = this.props;
		// list.sort((a,b)=>a.date-b.date);

		return (
			<ScrollView>
				<View style={{ flex: 1, marginHorizontal: 10, marginTop: 20, marginBottom: 5 }}>
					<Text style={{ color: '#42A5F5' }}>{day}</Text>
				</View>
				<View>{list.map(this.renderItem)}</View>
			</ScrollView>
		);
	}
}

export default connect(mapStateToProps)(List);
