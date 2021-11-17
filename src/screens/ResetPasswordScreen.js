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

const Resetpasswordscreen = ({ navigation, API_URL, route }) => {
	const { email } = route.params;
	const [ alertColor, setAlertColor ] = useState('transparent');
	const [ alertTitle, setAlertTitle ] = useState('');
	const [ showAlert, setShowAlert ] = useState(false);
	const [ message, setMessage ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ newPassword, setNewPassword ] = useState('');
	const handleResetPassword = async () => {
		if (password === '' || newPassword === '') {
			setAlertTitle('Warning !');
			setMessage('Please type the new password');
			setShowAlert(true);
			setAlertColor('#F2C335');
			return;
		}
		fetch(`${API_URL}/users/reset/reset-password/${email}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
			body: JSON.stringify({ password })
		})
			.then(async (result) => {
				try {
					const data = await result.json();
					const message = data.message;
					if (result.status !== 200) {
						setAlertTitle('Failure !');
						setMessage(message);
						setShowAlert(true);
						setAlertColor('#FF3341');
						return;
					}
					setAlertTitle('Success !');
					setMessage('Password Updated Successfully, going back to login screen');
					setShowAlert(true);
					setAlertColor('#34a4ea');
					setTimeout(() => navigation.navigate('LoginScreen'), 2000);
				} catch (error) {
					setAlertTitle('Failure !');
					setMessage(error.message);
					setShowAlert(true);
					setAlertColor('#FF3341');
				}
			})
			.catch(() => {
				setAlertTitle('Failure !');
				setMessage('You are not connected to the Internet');
				setShowAlert(true);
				setAlertColor('#FF3341');
			});
	};
	return (
		<KeyboardAvoidingView
			keyboardVerticalOffset={50}
			behavior={'padding'}
			style={{
				flex: 1,
				paddingHorizontal: wp('3.9%'),
				paddingVertical: hp('3%'),
				alignItems: 'center'
			}}
		>
			<Customalert
				backgroundColor={alertColor}
				message={message}
				title={alertTitle}
				showAlert={showAlert}
				setShowAlert={setShowAlert}
			/>
			<StatusBar hidden={true} />
			<View style={{ width: '100%', height: '100%' }}>
				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={styles.sectionOne}>
						<Pressable onPress={() => navigation.goBack()}>
							<Svg source={require('../svg/arrow.svg')} width={wp('7.6%')} />
						</Pressable>
					</View>
					<View style={styles.sectionTwo}>
						<Text style={styles.detailText}>Reset Your Password !</Text>
						<View style={styles.sectionThree}>
							<View style={styles.inputsContainer}>
								<Custominput
									borderColor="#000"
									textAlignVertical={'bottom'}
									borderBottom={1}
									isPassword={true}
									// value={password}
									fontFamily="K2D-Bold"
									fontSize={hp('2%')}
									height={hp('5.8%')}
									width={wp('70%')}
									placeHolder="New Password"
									onChangeText={(value) => setPassword((prev) => (prev = value))}
									paddingHorizontal={wp('1%')}
								/>
								<Custominput
									borderColor="#000"
									textAlignVertical={'bottom'}
									borderBottom={1}
									isPassword={true}
									// value={password}
									fontFamily="K2D-Bold"
									fontSize={hp('2%')}
									height={hp('5.8%')}
									width={wp('70%')}
									placeHolder="Confirm Password"
									onChangeText={(value) => setNewPassword((prev) => (prev = value))}
									paddingHorizontal={wp('1%')}
								/>
							</View>
							<Custombutton
								width={wp('70%')}
								height={hp('5%')}
								color="#407BFF"
								borderRadius={wp('1.27%')}
								alignItems="center"
								justifyContent="center"
								onPress={handleResetPassword}
								title="SUBMIT"
								textColor="#fff"
								fontSize={hp('2%')}
								fontWeight="bold"
							/>
						</View>
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
	sectionTwo: {
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingVertical: hp('10%'),
		width: '100%'
	},
	detailText: {
		fontFamily: 'K2D-Bold',
		fontSize: hp('2.5%'),
		color: '#749FFF',
		textAlign: 'center',
		lineHeight: hp('2.8%')
	},
	inputsContainer: {
		alignItems: 'center',
		width: '100%',
		height: '50%',
		justifyContent: 'space-between'
	},
	sectionThree: {
		paddingVertical: hp('20%'),
		justifyContent: 'space-between',
		alignItems: 'center',
		height: hp('70%')
	}
});

export default Resetpasswordscreen;
