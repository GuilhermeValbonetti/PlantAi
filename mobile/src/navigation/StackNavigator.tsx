import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home"


const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen name="exemplo" component={Home} />

    </Stack.Navigator>
  );
}
