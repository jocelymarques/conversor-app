import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text, View, Platform, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Button } from '@/components/Button';
import { styles } from './styles';
import { currencies } from '@/constants/currencies';
import { Input } from '@/components/input';
import { ResultCard } from '@/components/ResultCard';
import { useState } from 'react';
import { exchangeRateApi, convertCurrency} from '@/services/api';




export default function App() {

  const [amount, setAmount] = useState('')
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('BRL')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [exchangeRate, setExchangeRate] = useState(null)
  
  async function fetchExchangeRate(fromCurrency: string) {
    const data = await exchangeRateApi(fromCurrency)
    if (data && data.rates) {
      const rate = data.rates[toCurrency]
      const convertAmount = convertCurrency(amount, rate)
      setResult(convertAmount)
      setExchangeRate(rate)
      console.log(result)
    }
  }
    

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView style={styles.ScrollView}>

        <View style={styles.content}>
          <StatusBar style="light" />

          <View style={styles.header}>
            <Text style={styles.title}>Conversor de Moedas</Text>
            <Text style={styles.subtitle}>Converter valores entre diferentes moedas</Text>

            <View style={styles.card}>
              <Text style={styles.label}>De:</Text>
              <View style={styles.currencyGrid}>
                {currencies.map(currency => (

                  <Button variant='primary' key={currency.code} currency={currency} onPress={() => setFromCurrency(currency.code)} isSelected={fromCurrency === currency.code}/>
                ))}
              </View>
              <Input label='Valor:  ' value={amount}  onchangeText={setAmount}/>
              <TouchableOpacity style={styles.swapButton} >
                <Text style={styles.swapButtonText}>
                  ↑↓ 
                </Text>
              </TouchableOpacity>
              <Text style={styles.label}>Para: </Text>
              <View style={styles.currencyGrid}>
                {currencies.map(currency => (
                  <Button variant='secondary' key={currency.code} currency={currency}  onPress={() => setToCurrency(currency.code)} isSelected={toCurrency === currency.code}/>
                ))}
              </View>
            </View>
            <TouchableOpacity style={styles.convertButton} onPress={() => {fetchExchangeRate(fromCurrency)}} disabled={loading}>
              <Text style={styles.swapButtonText}>
                Converter
                </Text>
            </TouchableOpacity>
            <ResultCard />

          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}


