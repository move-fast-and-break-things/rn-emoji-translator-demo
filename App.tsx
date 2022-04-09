import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import translate from './translator';
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import * as Clipboard from 'expo-clipboard';

function getTranslationIcon() {
  const translationIcons = ['🤯', '🤔', '😺', '😜', '😅'];
  return translationIcons[Math.floor(Math.random() * translationIcons.length)];
}

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

  const translation = translate(text);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={'auto'}/>

      <Text style={styles.header}>
        😄👅{'\n'}Emoji Translator
      </Text>
      
      <Text style={styles.sectionHeader}>Text 📝</Text>
      <TextInput
        style={styles.text}
        onChangeText={setText}
        defaultValue={text}
        multiline={true}
      />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.sectionHeader}>Translation {getTranslationIcon()}</Text>
        <View style={styles.copyButton}>
          <Button
            onPress={() => Clipboard.setString(translation)}
            title={'Copy 📄'}
          />
        </View>
      </View>
      <Text style={styles.text}>{translation}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 32,
    paddingTop: 10,
    paddingBottom: 20,
    textAlign: 'center',
  },
  copyButton: {
    justifyContent: 'center',
    marginTop: 4,
  },
  container: {
    padding: 10,
    paddingTop: 30,
    flex: 1,
  },
  text: {
    fontSize: 26,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 30,
    height: 200,
    textAlignVertical: 'top',
    padding: 10,
    paddingHorizontal: 15,
    marginHorizontal: 5,
  },
  sectionHeader: {
    fontFamily: 'Montserrat_400Regular',
    marginTop: 15,
    marginBottom: 7,
    marginLeft: 10,
    fontSize: 32,
  },
});
