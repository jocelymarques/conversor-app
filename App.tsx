import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text, View, Platform, ScrollView, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { Button } from '@/components/Button';
import { styles } from './styles';
import { currencies } from '@/constants/currencies';
import { Input } from '@/components/input';
import { ResultCard } from '@/components/ResultCard';
import { useState } from 'react';
import { exchangeRateApi, convertCurrency } from '@/services/api';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '@/styles/colors';

function AppContent() {
  const insets = useSafeAreaInsets();

  const [amount, setAmount] = useState('')
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('BRL')
  const [result, setResult] = useState<number>(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [exchangeRate, setExchangeRate] = useState<number | null>(null)

  async function fetchExchangeRate(fromCurrency: string) {
    try {
      if (!amount) return
      setLoading(true)
      setError('')
      const data = await exchangeRateApi(fromCurrency)
      if (data && data.rates) {
        const rate = data.rates[toCurrency]
        const convertAmount = convertCurrency(amount, rate)
        setResult(convertAmount)
        setExchangeRate(rate)
        console.log(result)
      }
    } catch (error) {
      alert("Erro tente novamente")
    } finally {
      setLoading(false)
    }
  }

  function handleSwap() {
    const temp = fromCurrency
    setFromCurrency(toCurrency)
    setToCurrency(temp)
    setResult(0)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor={colors.background}/>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.content}>
            <View style={styles.header}>
              <Text style={styles.title}>Conversor de Moedas</Text>
              <Text style={styles.subtitle}>Converter valores entre diferentes moedas</Text>

              <View style={styles.card}>
                <Text style={styles.label}>De:</Text>
                <View style={styles.currencyGrid}>
                  {currencies.map(currency => (
                    <Button variant='primary' key={currency.code} currency={currency} onPress={() => setFromCurrency(currency.code)} isSelected={fromCurrency === currency.code} />
                  ))}
                </View>
                <Input label='Valor:  ' value={amount} onchangeText={setAmount} />
                <TouchableOpacity style={styles.swapButton} onPress={handleSwap}>
                  <Text style={styles.swapButtonText}>
                    ↑↓
                  </Text>
                </TouchableOpacity>
                <Text style={styles.label}>Para: </Text>
                <View style={styles.currencyGrid}>
                  {currencies.map(currency => (
                    <Button variant='secondary' key={currency.code} currency={currency} onPress={() => setToCurrency(currency.code)} isSelected={toCurrency === currency.code} />
                  ))}
                </View>
              </View>
              <TouchableOpacity style={[styles.convertButton, (!amount || loading) && styles.convertButtonDisabled]} onPress={() => { fetchExchangeRate(fromCurrency) }} disabled={!amount || loading} >
                {loading ? (
                  <ActivityIndicator color="white" />
                ) : (
                  <Text style={styles.swapButtonText}>
                    Converter
                  </Text>
                )}
              </TouchableOpacity>
              <ResultCard
                exchangeRate={exchangeRate ?? 0}
                result={result}
                fromCurrency={fromCurrency}
                toCurrency={toCurrency}
                currencies={currencies}>
              </ResultCard>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <AppContent />
    </SafeAreaProvider>
  );
}