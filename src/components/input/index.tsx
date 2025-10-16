import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";

interface InputProps {
    value: string;
    onchangeText: (text: string) => void;
    label: string;
}

export function Input({ value, onchangeText, label }: InputProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                {label}
            </Text>
            <TextInput style={styles.input} placeholder="0.00" placeholderTextColor={'#94a3b8'} value={value} onChangeText={onchangeText} keyboardType="numeric" />

        </View>
    )
}