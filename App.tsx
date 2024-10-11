import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [screen, setScreen] = useState('menu');
  const [C, setC] = useState('');
  const [F, setF] = useState('');
  const [KM, setKm] = useState('');
  const [metros, setM] = useState('');

  function calcularTemp() {
    const tempF = (9 * parseFloat(C) + 160) / 5;
    setF(tempF.toFixed(2));
    alert('Temperatura em fahrenheit: ' + tempF.toFixed(2));
  }

  function converterQuilom() {
    const quilom = parseFloat(metros) / 1000; 
    setKm(quilom.toFixed(2));
    alert('Valor em KM: ' + quilom.toFixed(2));
  }

  return (
    <View style={styles.container}>
      {screen === 'menu' && (
        <View>
          <Text style={styles.titulo}>Selecione uma conversão</Text>
          <TouchableOpacity style={styles.botao} onPress={() => setScreen('temperatura')}>
            <Text style={styles.textobotao}>Conversor de temperatura</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => setScreen('quilômetro')}>
            <Text style={styles.textobotao}>Conversor de quilômetro</Text>
          </TouchableOpacity>
        </View>
      )}

      {screen === 'temperatura' && (
        <View>
          <Text style={styles.titulo}>Conversor de temperatura</Text>
          <TextInput
            style={styles.campo}
            placeholder="Digite a temp. em celsius"
            keyboardType="numeric"
            onChangeText={(C) => setC(C)}
          />
          <TouchableOpacity style={styles.botao} onPress={calcularTemp}>
            <Text style={styles.textobotao}>Calcular</Text>
          </TouchableOpacity>
          {F ? <Text>Temperatura em fahrenheit: {F}°F</Text> : null}
          <TouchableOpacity style={styles.botao} onPress={() => setScreen('menu')}>
            <Text style={styles.textobotao}>Voltar</Text>
          </TouchableOpacity>
        </View>
      )}

      {screen === 'quilômetro' && (
        <View>
          <Text style={styles.titulo}>Conversor de quilômetro</Text>
          <TextInput
            style={styles.campo}
            placeholder="Digite o valor em metros"
            keyboardType="numeric"
            onChangeText={(metros) => setM(metros)}
          />
          <TouchableOpacity style={styles.botao} onPress={converterQuilom}>
            <Text style={styles.textobotao}>Converter</Text>
          </TouchableOpacity>
          {KM ? <Text>Valor em KM: {KM}km</Text> : null}
          <TouchableOpacity style={styles.botao} onPress={() => setScreen('menu')}>
            <Text style={styles.textobotao}>Voltar ao menu</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

titulo:{
  textAlign: "center",
  marginTop: 40,
  marginBottom: 40,
  fontSize: 30,
  color: "#000000",
},

campo:{
  backgroundColor: "#FFF",
  borderRadius: 30,
  margin: 15,
  padding: 10,
  fontSize: 15
},

botao:{
  justifyContent: "center",
  alignItems: "center",
  margin: 15,
  padding: 10,
  borderRadius: 10,
  backgroundColor: "#A9A9A9",

},

textobotao:{
  fontSize: 20,
}

});