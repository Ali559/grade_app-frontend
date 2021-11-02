import React, { useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { View, StyleSheet, Text, Image, SafeAreaView, Dimensions, StatusBar } from 'react-native';
import SVG from 'react-native-svg-uri';

import Custombutton from '../components/CustomButton';
const OnBoardingScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.mainContainer}>
			<StatusBar hidden={true} />
			<View style={styles.responsiveContainer}>
				<View style={styles.logoContainer}>
					<Image source={require('../assets/img/logo.png')} style={styles.logo} />
				</View>
				<SVG source={require('../svg/OnBoarding.svg')} style={styles.story} />
				<View style={styles.actionsContainer}>
					<Text style={styles.introTitle}>Hello!</Text>
					<Text style={styles.introLines}>Feeling lost on Zankoline? Let us guide you through</Text>
					<View style={styles.buttonContainer}>
						<Custombutton
							width={wp('62.5%')}
							height={hp('5%')}
							color="#3500E8"
							borderRadius={wp('1.27%')}
							alignItems="center"
							justifyContent="center"
							onPress={() => navigation.navigate('LoginScreen')}
							title="LOGIN"
							textColor="#fff"
							fontSize={hp('1.80%')}
							fontWeight="bold"
							marginVertical={hp('2.2%')}
						/>
						<Custombutton
							width={wp('62.5%')}
							borderColor={'#3500E8'}
							height={hp('5%')}
							color="transparent"
							borderRadius={wp('1.27%')}
							alignItems="center"
							justifyContent="center"
							onPress={() => navigation.navigate('LoginScreen')}
							title="SIGN UP"
							textColor="#3500E8"
							fontSize={hp('1.80%')}
							fontWeight="bold"
							marginVertical={hp('2.2%')}
							borderThickness={2}
						/>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		marginTop: hp('2%')
	},
	introLines: {
		color: '#8D8D8D',
		lineHeight: hp('1.5%'),
		letterSpacing: wp('0.3%'),
		fontSize: wp('3%'),
		fontFamily: 'K2D-Bold',
		textAlign: 'center'
	},
	introTitle: {
		fontFamily: 'K2D-ExtraBold',
		color: 'black',
		fontSize: wp('7%'),
		letterSpacing: hp('0.25%')
	},
	actionsContainer: {
		paddingHorizontal: wp('13%'),
		flexDirection: 'column',
		alignItems: 'center'
	},
	story: {
		height: hp('50%'),
		width: wp('100%')
	},
	logo: {
		width: wp('25%'),
		height: hp('8%')
	},
	logoContainer: {
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row'
	},
	responsiveContainer: {
		width: wp('100%'),
		height: hp('100%')
	},
	mainContainer: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		paddingHorizontal: wp('5%'),
		paddingBottom: hp('5%'),
		paddingTop: hp('2.5%')
	}
});

export default OnBoardingScreen;
