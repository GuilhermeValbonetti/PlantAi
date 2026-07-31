import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { House, Sprout, SquareLibrary, User } from "lucide-react-native";
import Home from "../screens/Dashboard/App";
import Plantas from "../screens/Plantas/Plantas";
import Historico from "../screens/Historico/historico";
import Perfil from "../screens/Perfil";
import CameraScreen from "../screens/Camera/Camera";
import { Camera as CameraIcon } from "lucide-react-native";
import { Pressable } from "react-native";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          position: "absolute",
          left: 20,
          right: 20,
          bottom: 20,
          height: 75,
          borderRadius: 30,
          backgroundColor: "#FFF",
          marginHorizontal: 10,
          elevation: 8,
        },

        tabBarItemStyle: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        },

        tabBarActiveTintColor: "#2F7D32",
        tabBarInactiveTintColor: "#222",

        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <House size={26} color={color} />,
        }}
      />

      <Tab.Screen
        name="Plantas"
        component={Plantas}
        options={{
          tabBarIcon: ({ color }) => <Sprout size={26} color={color} />,
        }}
      />

      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarButton: (props) => {
            const { onPress, onLongPress, accessibilityState } = props;

            return (
              <Pressable
                onPress={onPress}
                onLongPress={onLongPress}
                accessibilityState={accessibilityState}
                style={{
                  top: -25,
                  width: 70,
                  height: 70,
                  borderRadius: 35,
                  backgroundColor: "#4CAF50",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CameraIcon size={34} color="#FFF" />
              </Pressable>
            );
          },
        }}
      />

      <Tab.Screen
        name="Historico"
        component={Historico}
        options={{
          tabBarIcon: ({ color }) => <SquareLibrary size={26} color={color} />,
        }}
      />

      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ color }) => <User size={26} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
