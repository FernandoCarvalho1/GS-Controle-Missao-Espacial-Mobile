import { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import api from "../services/api";

export default function SensoresScreen() {

  const [sensores, setSensores] = useState<any[]>([]);

  async function carregarSensores() {
    try {
      const response = await api.get("/sensores");
      setSensores(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  async function excluirSensor(id: number) {
  try {

    await api.delete(`/sensores/${id}`);

    carregarSensores();

  } catch (error) {
    console.log(error);
  }
}

  useEffect(() => {
    carregarSensores();
  }, []);

  return (
    <ScrollView style={{ padding: 20 }}>

      {sensores.map((sensor) => (
  <View 
  key={sensor.id} 
  style={styles.card}>
    <Text style={styles.titulo}>
  {sensor.nome}
    </Text>

    <Text>Tipo: {sensor.tipo}</Text>

      <Text>Status: {sensor.status}</Text>

    <Text>Leitura: {sensor.valorLeitura}</Text>

    <TouchableOpacity
      style={styles.botaoExcluir}
      onPress={() => excluirSensor(sensor.id)}
>
      <Text style={styles.textoBotao}>
        Excluir
      </Text>
    </TouchableOpacity>
  </View>
))}

    </ScrollView>
  );
}
const styles = StyleSheet.create({

  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },

    shadowOpacity: 0.1,
    shadowRadius: 4,

    elevation: 3
  },

  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8
  },

  botaoExcluir: {
    backgroundColor: "#d9534f",
    padding: 10,
    marginTop: 10,
    borderRadius: 5
  },

  textoBotao: {
    color: "#fff",
    textAlign: "center"
  }

});