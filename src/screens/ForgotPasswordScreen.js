import React, { useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
	View,
	StyleSheet,
	SafeAreaView,
	Pressable,
	KeyboardAvoidingView,
	Text,
	ScrollView,
	StatusBar,
	Platform
} from 'react-native';
import Custominput from '../components/CustomInput';
import Svg from 'react-native-svg-uri';
import Custombutton from '../components/CustomButton';
import Customalert from '../components/CustomAlert';
const Forgotpasswordscreen = ({ navigation, API_URL }) => {
	const [ alertColor, setAlertColor ] = useState('transparent');
	const [ alertTitle, setAlertTitle ] = useState('');
	const [ showAlert, setShowAlert ] = useState(false);
	const [ message, setMessage ] = useState('');
	const [ email, setEmail ] = useState('');

	const handleSendResetCode = async () => {
		if (email === '') {
			setAlertTitle('Warning !');
			setMessage('The Email field cannot be empty');
			setShowAlert(true);
			setAlertColor('#F2C335');
			return;
		}
		fetch(`${API_URL}/users/reset/send-reset-code`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
			body: JSON.stringify({ email })
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
					setMessage(message);
					setShowAlert(true);
					setAlertColor('#34a4ea');
					navigation.navigate('CodeVerificationScreen', { email });
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
			style={{ flex: 1, paddingHorizontal: wp('3.9%'), paddingVertical: hp('3%'), alignItems: 'center' }}
		>
			<Customalert
				backgroundColor={alertColor}
				message={message}
				title={alertTitle}
				showAlert={showAlert}
				setShowAlert={setShowAlert}
			/>
			<StatusBar hidden={true} />
			<View style={{ width: wp('100%'), height: hp('100%') }}>
				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={styles.sectionOne}>
						<Pressable onPress={() => navigation.goBack()}>
							<Svg source={require('../svg/arrow.svg')} width={wp('7.6%')} />
						</Pressable>
					</View>
					<View style={styles.sectionTwo}>
						<Svg source={require('../svg/forgot-password-story.svg')} />
					</View>
					<View style={styles.sectionThree}>
						<Custominput
							borderColor="#000"
							textAlignVertical={'bottom'}
							borderBottom={1}
							value={email}
							fontFamily="K2D-Bold"
							fontSize={hp('2%')}
							height={hp('5.8%')}
							width={wp('70%')}
							placeHolder="johndoe@gmail.com"
							onChangeText={(value) => setEmail((prev) => (prev = value))}
							paddingHorizontal={wp('1%')}
						/>
						<Custombutton
							width={wp('70%')}
							height={hp('5%')}
							color="#407BFF"
							borderRadius={wp('1.27%')}
							alignItems="center"
							justifyContent="center"
							onPress={handleSendResetCode}
							title="SEND"
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
		height: hp('10%'),
		width: wp('100%'),
		paddingHorizontal: wp('5%'),
		paddingTop: hp('1%')
	},
	sectionTwo: {
		height: hp('40%'),
		width: wp('100%')
	},
	sectionThree: {
		justifyContent: 'space-evenly',
		alignItems: 'center',
		height: hp('40%'),
		width: wp('100%')
	}
});

export default Forgotpasswordscreen;
