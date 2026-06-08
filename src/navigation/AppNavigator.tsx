import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import SensoresScreen from "../screens/SensoresScreen";
import CadastroSensorScreen from "../screens/CadastroSensorScreen";
import AlertasScreen from "../screens/AlertasScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="Sensores"
          component={SensoresScreen}
        />

        <Stack.Screen
          name="Cadastrar Sensor"
          component={CadastroSensorScreen}
        />

        <Stack.Screen
          name="Alertas"
          component={AlertasScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}