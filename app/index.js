// import { Stack, Link } from 'expo-router'
import { View, Text, StyleSheet, Alert } from "react-native";

import React, { useEffect, useState } from "react"; // Importa React y useEffect
// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';

import * as SplashScreen from 'expo-splash-screen'; // Importa expo-splash-screen
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from './firebase-config';


import { useFonts } from "expo-font";
import { Input } from './components/input';
import { TextInput } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from "react-native-web";

// Importar la fuente Poppins

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'linear-gradient(90deg,rgba(55,236,186,1) 0%,rgba(114,175,211,1) 100%)',
        justifyContent: 'center',
        alignItems: 'center',
        // height: '100%'
    },
    text: {
        fontFamily: 'Ubu',
        fontSize: 24,
    },
    maintenance: {
        fontFamily: 'Ubuu',
        fontSize: 20,
        marginTop: 30
    },
    link: {
        color: 'red'
    }
})

const Stack = createNativeStackNavigator();
function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    )
}
function LoginScreen() {
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)

    const handleCreateAccount = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('Account created!')
                const user = userCredential.user
                console.log(user)
            })
            .catch(error => {
                console.log(error)
                Alert.alert(error.message)
            })
    }

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('Signed in!')
                const user = userCredential.user
                console.log(user)
                navigation.navigate('Home')
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <View>
            <Text>E-mail</Text>
            {/* <Input
                name='nombre'
                onBlur={onBlur}
                onFocus={onFocus}
                onChange={onChange}
                placeholder='Your name'
                value={nombre}
            /> */}
            <TextInput onChangeText={(text) => setEmail(text)} placeholder='Your email' />
            <Text>Password</Text>
            <TextInput onChangeText={(text) => setPassword(text)} placeholder="password" secureTextEntry={true} />
            <TouchableOpacity onPress={handleSignIn}>
                <Text style={styles.link}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCreateAccount}>
                <Text style={styles.link}>Create account</Text>
            </TouchableOpacity>
        </View >
    )
}


export default function Home() {



    let [fontsLoaded] = useFonts({
        'Ubu': require('./assets/fonts/Ubuntu-Medium.ttf'),
        'Ubuu': require('./assets/fonts/Ubuntu-Regular.ttf')
    })


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
    }
    const onFocus = ({ name }) => {
        // console.log({ event: 'onFocus', name })
    }
    const onChange = ({ text, name }) => {
        // console.log({ event: 'onChange', text, name })
        setNombre(text)
    }
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}