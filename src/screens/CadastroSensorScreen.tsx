import { useState } from "react";
import {View, TextInput, Button, Alert, StyleSheet} from "react-native";

import api from "../services/api";

export default function CadastroSensorScreen() {

  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");

  async function salvarSensor() {

    try {

      await api.post("/sensores", {
        nome,
        tipo,
        status: "ATIVO",
        valorLeitura: 0
      });

      Alert.alert(
        "Sucesso",
        "Sensor cadastrado!"
      );

      setNome("");
      setTipo("");

    } catch (error) {

      Alert.alert(
        "Erro",
        "Falha ao cadastrar sensor"
      );

      console.log(error);
    }
  }

  return (
    <View style={{ padding: 20 }}>

      <TextInput
        style={styles.input}
        placeholder="Nome do Sensor"
        value={nome}
        onChangeText={setNome}
/>

      <TextInput
        style={styles.input}
        placeholder="Tipo do Sensor"
        value={tipo}
        onChangeText={setTipo}
/>

      <Button
        title="Cadastrar"
        onPress={salvarSensor}
      />

    </View>
  );
}
const styles = StyleSheet.create({

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5
  }

});