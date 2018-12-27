import React, { Component } from 'react';
import { View, Text, Animated, PanResponder, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Theme from '../style/Theme';

const { width } = Dimensions.get('window');

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
			<View>
				<View
					style={{
						flex: 1,
						position: 'absolute',
						backgroundColor: '#263238',
						height: '80%',
						width: '90%',
						top: 7,
						left: 15
					}}
				/>
				<Animated.View
					{...this.PanResponder.panHandlers}
					style={[
						{
							transform: this.position.getTranslateTransform()
						},
						styles.item
					]}
				>
					{/*
				 Left Done Button 				
				*/}
					<View style={{ flex: 1 }}>
						<View
							style={{
								flex: 1,
								justifyContent: 'center',
								alignItems: 'center'
							}}
						>
							<Icon name="checkcircleo" size={20} color={Theme.Border} />
						</View>
						<Animated.View
							style={[
								{
									flex: 1,
									backgroundColor: 'green',
									justifyContent: 'center',
									alignItems: 'center',
									position: 'absolute',
									width: '100%',
									height: '100%'
								},
								{ opacity: this.leftOpacity }
							]}
						>
							<Icon name="checkcircleo" size={20} color="whitesmoke" />
						</Animated.View>
					</View>

					{/* 
				Task Name
				*/}

					<TouchableHighlight
						style={{
							flex: 3,
							padding: 15,
							justifyContent: 'center',
							backgroundColor: Theme.Highlight
						}}
					>
						<Text style={styles.text}>
							{item.text}- {new Date(item.date).toDateString()}
						</Text>
					</TouchableHighlight>

					{/* 
				Right Button 
				*/}
					<View style={{ flex: 1 }}>
						<View
							style={{
								flex: 1,
								justifyContent: 'center',
								alignItems: 'center'
							}}
						>
							<Icon name="delete" size={20} color={Theme.Border} />
						</View>
						<Animated.View
							style={[
								{
									flex: 1,
									backgroundColor: 'red',
									justifyContent: 'center',
									alignItems: 'center',
									position: 'absolute',
									width: '100%',
									height: '100%'
								},
								{ opacity: this.rightOpacity }
							]}
						>
							<Icon name="delete" size={20} color="whitesmoke" />
						</Animated.View>
					</View>
				</Animated.View>
			</View>
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
		marginHorizontal: 10
	},
	text: {
		fontSize: 15,
		color: 'whitesmoke'
	}
});

export default Item;
