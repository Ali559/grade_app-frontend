import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Loginscreen, Onboardingscreen, Signupscreen } from './src/screens/screenLinks';
import { useColorScheme } from 'react-native';

const Stack = createNativeStackNavigator();
import { Colors } from 'react-native/Libraries/NewAppScreen';
const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="OnBoardingScreen" component={Onboardingscreen} />
				<Stack.Screen name="LoginScreen" component={Loginscreen} />
				<Stack.Screen name="SignUpScreen" component={Signupscreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
