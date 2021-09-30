import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {Color} from "../../theme/Colors";

export default function Signup() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Banking never have been so easy</Text>
				<TouchableOpacity style={styles.buttonSignup}>
					<Text style={{fontSize: 18, fontWeight: 'bold'}}>Sign up</Text>
				</TouchableOpacity>
			<Text style={{fontWeight: '500', fontSize: 20, color: Color.greyColor, margin: 40}}>Already have an account ? <Text style={{color: Color.whiteColor, fontSize: 20, fontWeight: 'bold'}}>Login</Text></Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
		backgroundColor: Color.principalColor,
		padding: 20
	},
	title: {
		fontSize: 50,
		textAlign: 'center',
		fontWeight: 'bold',
		color: Color.whiteColor,
	},
	buttonSignup: {
		backgroundColor: Color.whiteColor,
		paddingHorizontal: 40,
		paddingVertical: 25,
		marginTop: 50,
		borderRadius: 5
	}
})