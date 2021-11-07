import React, { useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { View, StyleSheet, SafeAreaView, Pressable, Text, ScrollView, StatusBar, Platform } from 'react-native';
import Custominput from '../components/CustomInput';
import Svg from 'react-native-svg-uri';
import Custombutton from '../components/CustomButton';
import Customalert from '../components/CustomAlert';
const API_URL = Platform.OS === 'ios' ? 'http://localhost:5000/api' : 'http://10.0.2.2:5000/api';

const Loginscreen = ({ navigation }) => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ message, setMessage ] = useState('');
	const [ alertTitle, setAlertTitle ] = useState('');
	const [ token, setToken ] = useState('');
	const [ showAlert, setShowAlert ] = useState(false);
	const [ alertColor, setAlertColor ] = useState('');
	const handleLogin = async () => {
		fetch(`${API_URL}/users/login`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, password })
		})
			.then(async (res) => {
				try {
					const resJson = await res.json();
					if (res.status !== 200) {
						setAlertTitle('Failure 😭 !');
						setMessage('Incorrect Email or Password ');
						setShowAlert(true);
						setAlertColor('#FF3341');
						return;
					}
					setAlertTitle('Success 🥳 !');
					setMessage('Loggin in...');
					setToken(resJson.token);
					setShowAlert(true);
					setAlertColor('#34a4ea');
				} catch (error) {
					console.log(error);
				}
			})
			.catch((error) => console.error(error.message));
	};
	return (
		<SafeAreaView
			style={{
				width: wp('100%'),
				height: hp('100%'),
				paddingTop: hp('4.48%')
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
			<View style={{ width: wp('100%'), height: '100%' }}>
				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={styles.sectionOne}>
						<View style={styles.arrowContainer}>
							<Pressable onPress={() => navigation.goBack()}>
								<Svg source={require('../svg/arrow.svg')} width={30} />
							</Pressable>
						</View>
						<View style={styles.greetingContainer}>
							<Text style={styles.title}>Welcome!</Text>
							<Text style={styles.subTitle}>Sign in to continue</Text>
						</View>
					</View>
					<View style={styles.sectionTwo}>
						<Custominput
							borderColor="#000"
							borderBottom={1}
							fontFamily="K2D-Bold"
							fontSize={hp('1.5%')}
							height={hp('5.6%')}
							width={wp('66.66%')}
							textAlignVertical={'bottom'}
							placeHolder="johndoe@gmail.com"
							value={email}
							onChangeText={(value) => setEmail(value)}
							paddingHorizontal={wp('1%')}
						/>
						<Custominput
							borderColor="#000"
							textAlignVertical={'bottom'}
							borderBottom={1}
							value={password}
							fontFamily="K2D-Bold"
							fontSize={hp('1.5%')}
							height={hp('5.6%')}
							width={wp('66.66%')}
							placeHolder="Password"
							isPassword={true}
							onChangeText={(value) => setPassword(value)}
							paddingHorizontal={wp('1%')}
						/>
						<View style={styles.actionContainer}>
							<Custombutton
								width={wp('66.66%')}
								height={hp('4.6%')}
								color="#3500E8"
								borderRadius={wp('1.27%')}
								alignItems="center"
								justifyContent="center"
								onPress={handleLogin}
								title="LOGIN"
								textColor="#fff"
								fontSize={hp('1.80%')}
								fontWeight="bold"
								marginVertical={hp('2.2%')}
							/>
							<Pressable onPress={() => console.log('Forgot Password')}>
								<Text style={styles.forgotPassword}>Forgot Password?</Text>
							</Pressable>
						</View>
					</View>
					<View style={styles.sectionThree}>
						<View style={styles.linesContainer}>
							<View style={styles.line} />
							<Text style={styles.orText}>Or</Text>
							<View style={styles.line} />
						</View>
						<View style={styles.socialContainer}>
							<Text style={styles.socialText}>Social Media Login</Text>
							<View style={styles.socialIcons}>
								<Pressable>
									<Svg source={require('../svg/apple-logo.svg')} width={wp('10%')} />
								</Pressable>
								<Pressable>
									<Svg source={require('../svg/fb-logo.svg')} width={wp('10%')} />
								</Pressable>
								<Pressable>
									<Svg source={require('../svg/google-logo.svg')} width={wp('10%')} />
								</Pressable>
							</View>
						</View>
						<View style={styles.noAccountLinkContainer}>
							<Text style={styles.questionText}>Don't have an account yet?</Text>
							<Pressable onPress={() => navigation.navigate('SignUpScreen')}>
								<Text style={styles.linkText}>Sign up</Text>
							</Pressable>
						</View>
					</View>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	linkText: {
		fontSize: hp('1.56%'),
		fontFamily: 'K2D-ExtraBold',
		color: '#3500E8'
	},
	questionText: {
		fontSize: hp('1.56%'),
		fontFamily: 'K2D-ExtraBold',
		color: 'grey',
		marginRight: wp('1.27%')
	},
	noAccountLinkContainer: {
		width: wp('90%'),
		flexDirection: 'row',
		justifyContent: 'flex-start'
	},
	socialIcons: {
		flexDirection: 'row',
		width: wp('50%'),
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	socialText: {
		color: 'grey',
		fontSize: hp('1.7%'),
		fontFamily: 'K2D-Bold'
	},
	socialContainer: {
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	orText: {
		fontFamily: 'K2D-ExtraBold',
		fontSize: hp('1.56%'),
		color: 'black'
	},
	line: {
		width: wp('33.33%'),
		marginHorizontal: wp('2.55%'),
		height: hp('0.11%'),
		backgroundColor: '#000'
	},
	linesContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	sectionThree: {
		marginTop: hp('2.24%'),
		height: hp('28.57%'),
		width: wp('100%'),
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	forgotPassword: {
		fontFamily: 'K2D-ExtraBold',
		fontSize: hp('1.56%'),
		color: '#3500E8'
	},
	actionContainer: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	sectionTwo: {
		height: hp('33.33%'),
		flexDirection: 'column',
		width: wp('100%'),
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	subTitle: {
		fontSize: hp('1.7%'),
		fontFamily: 'K2D-Bold',
		color: 'grey',
		letterSpacing: wp('0.255%'),
		marginTop: hp('0.5%')
	},
	title: {
		fontSize: hp('3.58%'),
		color: 'black',
		letterSpacing: wp('0.51%'),
		fontFamily: 'K2D-ExtraBold'
	},
	greetingContainer: {
		marginHorizontal: wp('5.10%'),
		marginBottom: 'auto'
	},
	arrowContainer: {
		paddingVertical: hp('1.12%'),
		justifyContent: 'center',
		alignItems: 'flex-start'
	},
	sectionOne: {
		justifyContent: 'space-evenly',
		flexDirection: 'column',
		width: wp('100%'),
		paddingHorizontal: wp('5.1%'),
		height: hp('25%')
	}
});

export default Loginscreen;
