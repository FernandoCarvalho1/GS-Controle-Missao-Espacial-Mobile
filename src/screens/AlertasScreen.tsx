import { useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  View
} from "react-native";

import api from "../services/api";

export default function AlertasScreen() {

  const [alertas, setAlertas] = useState<any[]>([]);

  async function carregarAlertas() {

    try {

      const response = await api.get("/alertas");

      setAlertas(response.data);

    } catch (error) {

      console.log(error);
    }
  }

  useEffect(() => {
    carregarAlertas();
  }, []);

  return (
    <ScrollView style={{ padding: 20 }}>

      {alertas.map((alerta) => (

        <View key={alerta.id}>

          <Text>Título: {alerta.titulo}</Text>
          <Text>Nível: {alerta.nivel}</Text>
          <Text>{alerta.descricao}</Text>

        </View>

      ))}

    </ScrollView>
  );
}