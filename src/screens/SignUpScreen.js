import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { View, StyleSheet, Dimensions, SafeAreaView, Pressable, Text, ScrollView, StatusBar } from 'react-native';
import Custominput from '../components/CustomInput';
import Svg from 'react-native-svg-uri';
import Custombutton from '../components/CustomButton';
const { width, height } = Dimensions.get('screen');

const Signupscreen = ({ navigation }) => {
	return (
		<SafeAreaView
			style={{
				width: wp('100%'),
				height: hp('100%'),
				paddingTop: hp('4.48%')
			}}
		>
			<StatusBar hidden={true} />
			<View style={{ width: wp('100%'), height: hp('100%') }}>
				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={styles.sectionOne}>
						<View style={styles.arrowContainer}>
							<Pressable onPress={() => navigation.goBack()}>
								<Svg source={require('../svg/arrow.svg')} width={30} />
							</Pressable>
						</View>
						<View style={styles.greetingContainer}>
							<Text style={styles.title}>Hi!</Text>
							<Text style={styles.subTitle}>Create a new account</Text>
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
							placeHolder="John Doe"
							onChangeText={(value) => console.log(value)}
							paddingHorizontal={wp('1%')}
						/>
						<Custominput
							borderColor="#000"
							borderBottom={1}
							fontFamily="K2D-Bold"
							fontSize={hp('1.5%')}
							height={hp('5.6%')}
							width={wp('66.66%')}
							textAlignVertical={'bottom'}
							placeHolder="johndoe@gmail.com"
							onChangeText={(value) => console.log(value)}
							paddingHorizontal={wp('1%')}
						/>
						<Custominput
							borderColor="#000"
							textAlignVertical={'bottom'}
							borderBottom={1}
							fontFamily="K2D-Bold"
							fontSize={hp('1.5%')}
							height={hp('5.6%')}
							width={wp('66.66%')}
							placeHolder="Password"
							isPassword={true}
							onChangeText={(value) => console.log(value)}
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
								onPress={() => console.log('Login')}
								title="SIGN UP"
								textColor="#fff"
								fontSize={hp('1.80%')}
								fontWeight="bold"
								marginVertical={hp('2.2%')}
							/>
						</View>
					</View>
					<View style={styles.sectionThree}>
						<View style={styles.linesContainer}>
							<View style={styles.line} />
							<Text style={styles.orText}>Or</Text>
							<View style={styles.line} />
						</View>
						<View style={styles.socialContainer}>
							<Text style={styles.socialText}>Social Media Sign up</Text>
							<View style={styles.socialIcons}>
								<Pressable>
									<Svg source={require('../svg/apple-logo.svg')} width={wp('10.2%')} />
								</Pressable>
								<Pressable>
									<Svg source={require('../svg/fb-logo.svg')} width={wp('10.2%')} />
								</Pressable>
								<Pressable>
									<Svg source={require('../svg/google-logo.svg')} width={wp('10.2%')} />
								</Pressable>
							</View>
						</View>
						<View style={styles.noAccountLinkContainer}>
							<Text style={styles.questionText}>Already have an account?</Text>
							<Pressable onPress={() => navigation.navigate('LoginScreen')}>
								<Text style={styles.linkText}>Sign in</Text>
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
		fontSize: hp('1.56'),
		fontFamily: 'K2D-ExtraBold',
		color: 'grey',
		marginRight: wp('1.2%')
	},
	noAccountLinkContainer: {
		width: wp('89%'),
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-end'
	},
	socialIcons: {
		flexDirection: 'row',
		width: wp('50%'),
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	socialText: {
		color: 'grey',
		fontSize: hp('1.79%'),
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
		marginHorizontal: wp('2.5%'),
		height: 1,
		backgroundColor: '#000'
	},
	linesContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	sectionThree: {
		marginTop: hp('2.2%'),
		height: hp('28.57%'),
		width: '100%',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	forgotPassword: {
		fontFamily: 'K2D-ExtraBold',
		fontSize: hp('1.5%'),
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
		// backgroundColor: 'black',
		justifyContent: 'space-between'
	},
	subTitle: {
		fontSize: hp('1.79%'),
		fontFamily: 'K2D-Bold',
		color: 'grey',
		letterSpacing: wp('0.255%'),
		marginTop: hp('0.5%')
	},
	title: {
		color: 'black',
		fontSize: hp('3.81%'),
		letterSpacing: wp('0.5%'),
		fontFamily: 'K2D-ExtraBold'
	},
	greetingContainer: {
		paddingLeft: wp('5.1%'),
		marginBottom: 'auto'
	},
	arrowContainer: {
		paddingVertical: hp('1.1%'),
		justifyContent: 'center',
		alignItems: 'flex-start'
	},
	sectionOne: {
		justifyContent: 'space-evenly',
		flexDirection: 'column',
		width: '100%',
		paddingHorizontal: wp('5.1%'),
		height: hp('25%')
	}
});

export default Signupscreen;
