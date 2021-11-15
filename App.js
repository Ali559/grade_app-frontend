import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
	Loginscreen,
	Onboardingscreen,
	Signupscreen,
	Forgotpasswordscreen,
	Codeverificationscreen,
	Resetpasswordscreen
} from './src/screens/screenLinks';

const Stack = createNativeStackNavigator();

const API_URL = Platform.OS === 'ios' ? 'http://localhost:5000/api' : 'http://10.0.2.2:5000/api';

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="OnBoardingScreen">{(props) => <Onboardingscreen {...props} />}</Stack.Screen>
				<Stack.Screen name="LoginScreen">
					{(props) => <Loginscreen {...props} API_URL={API_URL} />}
				</Stack.Screen>
				<Stack.Screen name="SignUpScreen">
					{(props) => <Signupscreen {...props} API_URL={API_URL} />}
				</Stack.Screen>
				<Stack.Screen name="ForgotPasswordScreen">
					{(props) => <Forgotpasswordscreen {...props} API_URL={API_URL} />}
				</Stack.Screen>
				<Stack.Screen name="CodeVerificationScreen">
					{(props) => <Codeverificationscreen {...props} API_URL={API_URL} />}
				</Stack.Screen>
				<Stack.Screen name="ResetPasswordScreen">
					{(props) => <Resetpasswordscreen {...props} API_URL={API_URL} />}
				</Stack.Screen>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
