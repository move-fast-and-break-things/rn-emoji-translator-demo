import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput } from 'react-native';
import translate from './translator';

export default function App() {
  const [text, setText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={'auto'}/>

      <Text style={{ fontWeight: 'bold', fontSize: 60, paddingBottom: 20 }}>
        Эмоджи Переводчик
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
  container: {
    padding: 10,
    paddingTop: 30,
    flex: 1,
  },
  sectionHeader: {
    fontSize: 32,
  },
});
