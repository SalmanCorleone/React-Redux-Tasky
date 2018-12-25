import React, { Component } from 'react';
import { View, Text, Animated, PanResponder, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const { width, height } = Dimensions.get('window');

class Item extends Component {
	constructor(props) {
		super(props);
		this.position = new Animated.ValueXY();
		this.leftOpacity = this.position.x.interpolate({
			inputRange: [ -50, 0, 50 ],
			outputRange: [ 0, 0, 1 ],
			extrapolate: 'clamp'
		});
		this.rightOpacity = this.position.x.interpolate({
			inputRange: [ -50, 0, 50 ],
			outputRange: [ 1, 0, 0 ],
			extrapolate: 'clamp'
		});
	}

	componentWillMount() {
		const { onTick, item, id } = this.props;

		this.PanResponder = PanResponder.create({
			onStartShouldSetPanResponder: (evnt, gestureState) => true,
			onPanResponderMove: (evnt, gestureState) => {
				if (gestureState.dx > 50) {
					this.position.setValue({ x: 50, y: 0 });
				} else if (gestureState.dx < -50) {
					this.position.setValue({ x: -50, y: 0 });
				} else {
					this.position.setValue({ x: gestureState.dx, y: 0 });
				}
			},
			onPanResponderRelease: (evnt, gestureState) => {
				if (gestureState.dx > 49) {
					Animated.spring(this.position, {
						toValue: { x: width + 100, y: 0 }
					}).start(() => {
						this.position.setValue({ x: 0, y: 0 });
						onTick(id, item);
					});
				} else if (gestureState.dx < -49) {
					Animated.spring(this.position, {
						toValue: { x: -width - 100, y: 0 }
					}).start(() => {
						this.position.setValue({ x: 0, y: 0 });
						onTick(id, item);
					});
				} else {
					Animated.spring(this.position, {
						toValue: { x: 0, y: 0 },
						friction: 4
					}).start();
				}
			}
		});
	}

	render() {
		const { item } = this.props;
		return (
			<Animated.View
				{...this.PanResponder.panHandlers}
				style={[
					{
						transform: this.position.getTranslateTransform()
					},
					styles.item
				]}
			>
				<Animated.View
					style={[
						{ flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' },
						{ opacity: this.leftOpacity }
					]}
				>
					<Icon name="closecircleo" size={25} color="whitesmoke" />
				</Animated.View>
				<View style={{ flex: 3, padding: 15, justifyContent: 'center' }}>
					<Text style={styles.text}>{item.text}</Text>
				</View>
				<Animated.View
					style={[
						{ flex: 1, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' },
						{ opacity: this.rightOpacity }
					]}
				>
					<Icon name="checkcircleo" size={25} color="whitesmoke" />
				</Animated.View>
			</Animated.View>
		);
	}
}

const styles = StyleSheet.create({
	item: {
		flex: 1,
		height: 50,
		flexDirection: 'row',
		backgroundColor: '#34495e',
		marginVertical: 5,
		marginHorizontal: 10,
		left: 0,
		top: 0
	},
	text: {
		fontSize: 15,
		color: 'whitesmoke'
	}
});

export default Item;
