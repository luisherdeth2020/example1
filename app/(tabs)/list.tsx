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

const list = () => {
	return (
		<View style={styles.container}>
			<Text>Bienvenid@ a List</Text>
		</View>
	);
};

export default list;
