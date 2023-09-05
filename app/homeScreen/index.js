import React, { useState } from "react";
import { Stack, Link, router } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		justifyContent: "center",
		alignItems: "center",
	},
});

export default function HomeScreen() {
	const [showConfetti, setShowConfetti] = useState(true);

	return (
		<View style={styles.container}>
			<Stack.Screen
				options={{
					title: "HomeScreen",
					headerLeft: () => (
						<TouchableOpacity onPress={() => router.replace("/login")}>
							<Text>Back</Text>
						</TouchableOpacity>
					),
				}}
			/>
			<Text>HomeScreen</Text>
			<Link href={"/shop/categories"}>Go to Categories</Link>
			{showConfetti && (
				<ConfettiCannon
					count={200} // Puedes ajustar la cantidad de confeti
					origin={{ x: -10, y: 0 }} // Puedes ajustar la posición de origen del confeti
					fadeOut={true} // El confeti se desvanecerá gradualmente
				/>
			)}
		</View>
	);
}
