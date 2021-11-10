import React, { useRef, useEffect, useState } from 'react';
import { Animated, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Customalert = ({
	title,
	message,
	textColor = '#F6F3F6',
	backgroundColor = '#34A4EA',
	showAlert,
	setShowAlert
}) => {
	const opacity = useRef(new Animated.Value(0)).current;
	const onPressHandler = () => {
		return Animated.sequence([
			Animated.timing(opacity, {
				toValue: 1,
				duration: 500,
				useNativeDriver: true
			}),
			Animated.delay(2000),
			Animated.timing(opacity, {
				toValue: 0,
				duration: 500,
				useNativeDriver: true
			})
		]).start();
	};
	if (showAlert === true) {
		onPressHandler();
		setShowAlert(false);
	}
	if (showAlert === false) '';

	return (
		<Animated.View
			style={{
				zIndex: 6,
				position: 'absolute',
				top: hp('10%'),
				left: 0,
				right: 0,
				margin: hp('1.12%'),
				marginBottom: hp('0.56%'),
				backgroundColor,
				padding: hp('1.12%'),
				borderRadius: hp('0.50%'),
				shadowColor: 'black',
				shadowOffset: {
					width: 0,
					height: hp('0.45%')
				},
				shadowOpacity: 0.15,
				shadowRadius: hp('0.50%'),
				elevation: 6,
				opacity,
				transform: [
					{
						translateY: opacity.interpolate({
							inputRange: [ 0, 1 ],
							outputRange: [ -20, 0 ]
						})
					}
				]
			}}
		>
			<Text
				style={{
					color: textColor,
					fontFamily: 'K2D-ExtraBold',
					fontSize: hp('2.5%'),
					letterSpacing: wp('0.5%')
				}}
			>
				{title}
			</Text>
			<Text
				style={{
					color: textColor,
					lineHeight: hp('5%'),
					marginLeft: wp('1%'),
					fontFamily: 'K2D-Medium',
					fontSize: hp('1.8%')
				}}
			>
				{message}
			</Text>
		</Animated.View>
	);
};

export default Customalert;
