import { StyleSheet } from 'react-native';
import { colors } from '@/styles/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    ScrollView: {
        flexGrow: 1,

    },
    content: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 80,
        paddingBottom: 24,

    },
    header: {
        marginBottom: 32,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: colors.text,
        marginBottom: 8,
    },
    subtitle: {
        color: colors.textSecondary,
        fontSize: 14,
        marginBottom: 24,

    },
    card: {
        backgroundColor: colors.cardBackground,
        borderRadius: 16,
        padding: 24,
        marginBottom: 24,

    },
    label: {
        color: colors.textSecondary,
        marginBottom: 4,
        fontSize: 14
    },
    currencyGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: -4,
        marginBottom: 16,
        justifyContent: 'center',



    },
    swapButton: {
        backgroundColor: colors.inputBackground,
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 12,
        marginBottom: 24
    },
    swapButtonText: {
        color: "#ffff",
        textAlign: "center",
        fontSize: 18,
        fontWeight: '600'
    },
    convertButton: {
        backgroundColor: colors.secondary,
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 12,
        marginBottom: 24
    },
    convertButtonDisabled: {
        backgroundColor: colors.disabled,
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: 20,
    },


})