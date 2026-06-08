import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";

export default function HomeScreen({ navigation }: any) {

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        🚀 Controle de Missão Espacial
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Sensores")}
      >
        <Text style={styles.textoBotao}>
          Sensores
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Cadastrar Sensor")}
      >
        <Text style={styles.textoBotao}>
          Cadastrar Sensor
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Alertas")}
      >
        <Text style={styles.textoBotao}>
          Alertas
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f4f6f9"
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center"
  },

  botao: {
    backgroundColor: "#1f6feb",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15
  },

  textoBotao: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18
  }

});