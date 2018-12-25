import React, { Component } from 'react';
import { ScrollView, ToastAndroid } from 'react-native';
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
		ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
	};

	render() {
		const { list } = this.props;
		// list.sort((a,b)=>a.date-b.date);

		return <ScrollView>{list.map(this.renderItem)}</ScrollView>;
	}
}

export default connect(mapStateToProps)(List);
