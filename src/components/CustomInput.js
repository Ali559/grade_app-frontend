import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

const Custominput = ({
	width,
	height,
	borderBottom,
	fontSize,
	fontFamily,
	paddingHorizontal,
	onChangeText,
	borderColor,
	placeHolder,
	isPassword = false,
	fontColor = '#000',
	textAlignVertical,
	value
}) => {
	return (
		<TextInput
			value={value}
			placeholderTextColor={'grey'}
			secureTextEntry={isPassword}
			placeholder={placeHolder}
			onChangeText={onChangeText}
			style={{
				textAlignVertical,
				color: fontColor,
				width,
				height,
				borderBottomWidth: borderBottom,
				fontSize,
				fontFamily,
				paddingHorizontal,
				borderColor
			}}
		/>
	);
};

const styles = StyleSheet.create({});

export default Custominput;
