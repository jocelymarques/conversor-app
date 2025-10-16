import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        marginBottom: 16,
    },
    label:{
        color: colors.textSecondary,
        marginBottom: 8,
        fontSize: 14,
    
    },
    input: {
        backgroundColor: colors.inputBackground,
        color: colors.text,
        fontSize: 24,
        fontWeight: 'bold',
        padding: 16,
        borderRadius: 8
    }
})