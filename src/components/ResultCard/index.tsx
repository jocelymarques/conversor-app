import { View, Text } from "react-native";
import {styles} from './styles'


export function ResultCard({ exchangeRate, result, fromCurrency, toCurrency, currencies }: {
    exchangeRate: number;
    result: number;
    fromCurrency: string;
    toCurrency: string;
    currencies: Array<{ code: string; symbol: string }>;
}) {

    if (!exchangeRate || !result) return null

    const toSymol = currencies.find(currency => currency.code === toCurrency)?.symbol || ''

    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                Resultado:
            </Text>
                <Text style={styles.amount}>
                   {toSymol} {result}
                </Text>
            <Text style={styles.rate}>
                Taxa de Câmbio 1: {fromCurrency} = {exchangeRate.toFixed(4)} {toCurrency}
            </Text>

        </View>
    )
}