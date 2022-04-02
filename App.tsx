import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput } from 'react-native';
import translate from './translator';
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat';

export default function App() {
  const [text, setText] = useState('');

  const [fontsLoaded] = useFonts({ Montserrat_400Regular });

  if (!fontsLoaded) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Loading fonts...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={'auto'}/>

      <Text style={styles.header}>
        {'Эмоджи\nПереводчик'}
      </Text>
      
      <Text style={styles.sectionHeader}>Введите текст:</Text>
      <TextInput
        style={{ fontSize: 42 }}
        onChangeText={setText}
        defaultValue={text}
        placeholder={'ваш текст'}
      />

      <Text style={{ fontSize: 42 }}>
        {translate(text) || '...'}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 50,
    paddingBottom: 20,
  },
  container: {
    padding: 10,
    paddingTop: 30,
    flex: 1,
  },
  sectionHeader: {
    fontSize: 32,
  },
});
