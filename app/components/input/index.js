import { StyleSheet, Text, TextInput, View } from "react-native";

const styles = StyleSheet.create({
    container: {
    },
    label: {},
    input: {
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        paddingVertical: 10,
    },
})

export const Input = ({ placeholder, value, onChange, name, onFocus, onBlur, label }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                {label}
            </Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={text => onChange({ text, name })}
                onFocus={() => onFocus({ name })}
                onBlur={() => onBlur({ name })}
            />
        </View>
    )
}


