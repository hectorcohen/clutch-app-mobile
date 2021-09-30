import React from 'react'
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Provider} from "react-redux";
import store from './src/store/index'
import Signup from "./src/Screens/Signup";
import Home from "./src/Screens/Home";


const Stack = createNativeStackNavigator()


export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{headerShown: false}}>
					<Stack.Screen name={'Signup'} component={Signup} />
					<Stack.Screen name={'Home'} component={Home} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	)
}