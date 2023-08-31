import { Stack, Link } from 'expo-router'
import { View, Text, StyleSheet } from "react-native";

import React, { useEffect } from "react"; // Importa React y useEffect
// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';

import * as SplashScreen from 'expo-splash-screen'; // Importa expo-splash-screen

import { useFonts } from "expo-font";

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
    }
})
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

    return (
        <LinearGradient
            colors={['rgba(55,236,186,1)', 'rgba(114,175,211,1)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.container}
        >
            <Stack.Screen options={{
                title: 'Home',
                headerTitleAlign: "center",
            }} />
            <Text style={styles.text}>BIENVENIDO A WIKIPADEL🥎</Text>
            <Text style={styles.maintenance}>🚧🚦En Mantenimiento🚦🚧</Text>
            <Link href={'/shop/categories'}>Go to Categories</Link>
        </LinearGradient>

    )
}