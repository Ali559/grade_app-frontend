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
		navigation.navigate('CodeVerificationScreen');
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
