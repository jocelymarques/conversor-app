import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text, View, Platform, ScrollView, TouchableOpacity } from 'react-native';
import { Button } from '@/components/Button';
import { styles } from './styles';
import { currencies } from '@/constants/currencies';
import { Input } from '@/components/input';
import { ResultCard } from '@/components/ResultCard';



export default function App() {
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

                  <Button variant='primary' key={currency.code} currency={currency} />
                ))}
              </View>
              <Input label='Valor:  '/>
              <TouchableOpacity style={styles.swapButton} >
                <Text style={styles.swapButtonText}>
                  ↑↓ 
                </Text>
              </TouchableOpacity>
              <Text style={styles.label}>Para: </Text>
              <View style={styles.currencyGrid}>
                {currencies.map(currency => (
                  <Button variant='secondary' key={currency.code} currency={currency} />
                ))}
              </View>
            </View>
            <TouchableOpacity style={styles.convertButton}>
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


