import { Stack, Link, router, Redirect } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { TextInput, TouchableOpacity, StyleSheet } from "react-native"; // Importa componentes de react-native que son compatibles con Expo

import * as SplashScreen from "expo-splash-screen";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase-config";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { View, TextField, Text, Button } from "react-native-ui-lib";

import { Tabs } from "expo-router/tabs";
// Importar la fuente Poppins

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: 'linear-gradient(90deg,rgba(55,236,186,1) 0%,rgba(114,175,211,1) 100%)',
		justifyContent: "center",
		alignItems: "center",
		// height: '100%'
	},
	header: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 40,
	},
	text: {
		color: "white",
		fontFamily: "Ubu",
		fontSize: 24,
	},
	ball: {
		fontSize: 44,
	},
	maintenance: {
		fontFamily: "Ubuu",
		fontSize: 20,
		marginTop: 30,
		width: "100%",
		textAlign: "left",
	},
	button: {
		width: "100%",
		backgroundColor: "red", // Set the desired background color
		borderRadius: 5, // You can adjust the border radius as needed
		paddingVertical: 10, // Adjust padding as needed
		alignItems: "center", // Center the text horizontally
		marginTop: 10, // Add margin as needed
	},
	buttonText: {
		color: "white", // Set the text color
		fontSize: 16, // Set the text font size
		fontFamily: "Ubu", // Set the desired font family
		marginTop: 10,
		marginBottom: 1,
	},

	password: {
		marginTop: 10,
	},
	input: {
		borderColor: "white",
		width: "100%",
		margin: 2,
		paddingVertical: 2,
		borderBottomWidth: 1,
		borderRadius: 3,
		color: "red",
	},
});

export default function Login() {
	const [nombre, setNombre] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// const navigation = useNavigation();

	let [fontsLoaded] = useFonts({
		Ubu: require("../assets/fonts/Ubuntu-Medium.ttf"),
		Ubuu: require("../assets/fonts/Ubuntu-Regular.ttf"),
	});

	const app = initializeApp(firebaseConfig);
	const auth = getAuth(app);

	function HomeScreen() {
		return (
			<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
				<Text>Home Screen</Text>
			</View>
		);
	}

	useEffect(() => {
		// Evita que la pantalla de presentación se oculte automáticamente
		SplashScreen.preventAutoHideAsync();

		// Realiza cualquier inicialización necesaria aquí
		// Por ejemplo, cargar datos, configurar servicios, etc.

		// Cuando hayas terminado con la inicialización, oculta la pantalla de presentación
		if (fontsLoaded) {
			SplashScreen.hideAsync();
		}
	}, [fontsLoaded]); // Se ejecuta solo cuando las fuentes se carguen

	if (!fontsLoaded) {
		return null; // No necesitas retornar nada aquí, ya que SplashScreen se encargará de mostrar la pantalla de presentación
	}

	const onBlur = ({ name }) => {
		// console.log({ event: 'onBlur', name })
	};
	const onFocus = ({ name }) => {
		// console.log({ event: 'onFocus', name })
	};
	const onChange = ({ text, name }) => {
		// console.log({ event: 'onChange', text, name })
		setNombre(text);
	};
	const handleCreateAccount = () => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				console.log("Account created!");
				const user = userCredential.user;
				// console.log(user);
			})
			.catch((error) => {
				// console.log(error);
				Alert.alert(error.message);
			});
	};

	const handleSignIn = () => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				console.log("Signed in!");
				const user = userCredential.user;
				// console.log(user);
				router.replace("/home");
				// navigation.navigate("Home");
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<LinearGradient colors={["rgba(55,236,186,1)", "rgba(114,175,211,1)"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.container}>
			<Stack.Screen
				options={{
					title: "Home",
					headerShown: false,
					headerTitleAlign: "center",
				}}
			/>

			<View style={styles.header}>
				<Text style={styles.ball}>
					<Ionicons name="tennisball" size={34} color="white" />
				</Text>
				<Text style={styles.text}>WELCOME TO</Text>
				<Text style={styles.text}>WIKIPADEL</Text>
			</View>
			{/* <Text style={styles.maintenance}>🚧🚦En Mantenimiento🚦🚧</Text> */}
			{/* <Link href={"/shop/categories"}>Go to Categories</Link> */}

			{/* <Text style={styles.maintenance}>E-mail</Text>
			<TextInput style={styles.input} onChangeText={(text) => setEmail(text)} placeholder="Your email" />
			<Text style={styles.maintenance}>Password</Text>
			<TextInput style={styles.input} onChangeText={(text) => setPassword(text)} placeholder="*****" secureTextEntry={true} /> */}
			<View style={{ width: "70%", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
				<Text style={styles.maintenance}>E-mail</Text>
				<TextInput style={styles.input} onChangeText={(text) => setEmail(text)} placeholderTextColor={"#86838E"} placeholder="luis.herdeth@gmail.com" />

				<Text style={styles.maintenance}>Password</Text>
				<TextInput style={styles.input} onChangeText={(text) => setPassword(text)} placeholderTextColor={"#86838E"} placeholder="********" secureTextEntry={true} />
			</View>
			<TouchableOpacity onPress={handleSignIn}>
				<Text style={styles.buttonText}>Login</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={handleCreateAccount}>
				<Text style={styles.buttonText}>Create account</Text>
			</TouchableOpacity>

			{/* <Redirect href="/login" /> */}
		</LinearGradient>
	);
}
