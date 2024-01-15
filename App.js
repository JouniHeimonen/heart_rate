import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [age, setAge] = useState('')
  const [lower, setLower] = useState('')
  const [upper, setUpper] = useState('')


const heartrate = () => {
  const heartlower = (220-age) * 0.65
  setLower(heartlower)
  const heartupper = (220-age) * 0.85
  setUpper(heartupper)
 
}
  


  return (
    <View style={styles.container}>
      <Text>age</Text>
      <TextInput keyboardType='decimal-pad'
      value={age}
      onChangeText={text => setAge(text)}/>
      <Text> HR limits</Text>
      <TextInput>{lower}-{upper}</TextInput>
      <Button onPress={heartrate} title ='calculate'></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
