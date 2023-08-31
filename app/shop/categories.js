
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default function Categories() {

    return (
        <View style={styles.container}>
            <Text>Categories</Text>
        </View>
    )
}