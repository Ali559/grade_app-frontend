import React, { useState, useRef, useEffect } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
	View,
	StyleSheet,
	SafeAreaView,
	Pressable,
	Text,
	ScrollView,
	StatusBar,
	KeyboardAvoidingView
} from 'react-native';
import Custominput from '../components/CustomInput';
import Svg from 'react-native-svg-uri';
import Custombutton from '../components/CustomButton';
import Customalert from '../components/CustomAlert';

const Codeverificationscreen = ({ navigation, API_URL }) => {
	return (
		<KeyboardAvoidingView
			keyboardVerticalOffset={50}
			behavior={'padding'}
			style={{ flex: 1, paddingHorizontal: wp('3.9%'), paddingVertical: hp('3%'), alignItems: 'center' }}
		>
			{/* <Customalert
				backgroundColor={alertColor}
				message={message}
				title={alertTitle}
				showAlert={showAlert}
				setShowAlert={setShowAlert}
			/> */}
			<StatusBar hidden={true} />
			<View style={{ width: '100%', height: '100%' }}>
				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={styles.sectionOne}>
						<Pressable onPress={() => navigation.goBack()}>
							<Svg source={require('../svg/arrow.svg')} width={wp('7.6%')} />
						</Pressable>
						<Text style={styles.screenTitle}>Verification!</Text>
					</View>
					<View style={styles.sectionTwo}>
						<Text style={styles.detailText}>
							Enter the verification code that was sent to a****1@gmail.com
						</Text>
						<View style={styles.inputsContainer}>
							<View style={styles.inputs}>
								<Custominput
									keyboardType={'numeric'}
									borderColor="#000"
									textAlignVertical={'center'}
									borderWidth={1}
									borderColor={'#407BFF'}
									fontFamily="K2D-Regular"
									textAlign="center"
									fontSize={hp('5%')}
									height={hp('7%')}
									width={wp('17%')}
									borderRadius={hp('1%')}
									onChangeText={(value) => console.log(value)}
									paddingHorizontal={wp('1%')}
									maxLength={1}
								/>
								<Custominput
									keyboardType={'numeric'}
									borderColor="#000"
									textAlignVertical={'center'}
									borderWidth={1}
									borderColor={'#407BFF'}
									fontFamily="K2D-Regular"
									textAlign="center"
									fontSize={hp('5%')}
									height={hp('7%')}
									width={wp('17%')}
									borderRadius={hp('1%')}
									onChangeText={(value) => console.log(value)}
									paddingHorizontal={wp('1%')}
									maxLength={1}
								/>
								<Custominput
									keyboardType={'numeric'}
									borderColor="#000"
									textAlignVertical={'center'}
									borderWidth={1}
									borderColor={'#407BFF'}
									fontFamily="K2D-Regular"
									textAlign="center"
									fontSize={hp('5%')}
									height={hp('7%')}
									width={wp('17%')}
									borderRadius={hp('1%')}
									onChangeText={(value) => console.log(value)}
									paddingHorizontal={wp('1%')}
									maxLength={1}
								/>
								<Custominput
									keyboardType={'numeric'}
									borderColor="#000"
									textAlignVertical={'center'}
									borderWidth={1}
									borderColor={'#407BFF'}
									fontFamily="K2D-Regular"
									textAlign="center"
									fontSize={hp('5%')}
									height={hp('7%')}
									width={wp('17%')}
									borderRadius={hp('1%')}
									onChangeText={(value) => console.log(value)}
									paddingHorizontal={wp('1%')}
									maxLength={1}
								/>
							</View>
							<Text style={styles.etaText}>Resend code in 29 seconds</Text>
						</View>
						<Custombutton
							width={wp('70%')}
							height={hp('5%')}
							color="#407BFF"
							borderRadius={wp('1.27%')}
							alignItems="center"
							justifyContent="center"
							onPress={() => navigation.navigate('ResetPasswordScreen')}
							title="SUBMIT"
							textColor="#fff"
							fontSize={hp('2%')}
							fontWeight="bold"
						/>
					</View>
				</ScrollView>
			</View>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	sectionOne: {
		width: '100%',
		paddingHorizontal: wp('5%'),
		paddingTop: hp('1%'),
		flexDirection: 'row',
		alignItems: 'center'
	},
	screenTitle: {
		marginLeft: wp('13%'),
		fontFamily: 'K2D-ExtraBold',
		fontSize: hp('3%'),
		letterSpacing: wp('.5%'),
		color: '#407BFF'
	},
	sectionTwo: {
		alignItems: 'center',
		justifyContent: 'space-around',
		height: hp('70%'),
		paddingVertical: hp('10%'),
		width: '100%'
	},
	detailText: {
		fontFamily: 'K2D-Regular',
		fontSize: hp('1.8%'),
		color: '#749FFF',
		textAlign: 'center',
		lineHeight: hp('2.8%')
	},
	inputsContainer: {
		alignItems: 'center',
		width: '100%',
		height: hp('10%')
	},
	inputs: {
		width: '100%',
		paddingHorizontal: wp('2%'),
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	etaText: {
		fontFamily: 'K2D-Light',
		fontSize: hp('1.6%'),
		letterSpacing: wp('.2%'),
		color: '#749FFF',
		marginTop: hp('2.5%')
	}
});

export default Codeverificationscreen;
