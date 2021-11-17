import React from 'react';
import {  TextInput } from 'react-native';

const Custominput = ({
	width,
	height,
	borderBottom,
	fontSize,
	borderWidth = 0,
	fontFamily,
	paddingHorizontal,
	onChangeText,
	borderColor,
	placeHolder,
	isPassword = false,
	fontColor = '#000',
	textAlignVertical,
	value,
	borderRadius,
	textAlign = 'left',
	keyboardType = 'default',
	maxLength
}) => {
	return (
		<TextInput
			returnKeyType={'done'}
			maxLength={maxLength}
			keyboardType={keyboardType}
			value={value}
			placeholderTextColor={'grey'}
			secureTextEntry={isPassword}
			placeholder={placeHolder}
			onChangeText={onChangeText}
			style={{
				borderRadius,
				textAlign,
				borderWidth,
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

export default Custominput;
