import { View, Text, StyleSheet } from "react-native";
import React from "react";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		justifyContent: "center",
		alignItems: "center",
	},
});

const home = () => {
	return (
		<View style={styles.container}>
			<Text>Bienvenido a Home</Text>
		</View>
	);
};

export default home;
