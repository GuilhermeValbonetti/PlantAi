import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as NavigationBar from "expo-navigation-bar";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

export default function Camera() {
  const navigation = useNavigation();
  const [imagem, setImagem] = useState<string | null>(null);

  const pedirPermissao = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      alert("É necessário permitir o acesso à câmera.");
      return false;
    }

    return true;
  };

  const tirarFoto = async () => {
    const permitido = await pedirPermissao();

    if (!permitido) return;

    const resultado = await ImagePicker.launchCameraAsync({
      mediaTypes: ["images"],
      allowsEditing: false,
      quality: 1,
    });

    if (!resultado.canceled) {
      setImagem(resultado.assets[0].uri);
      navigation.goBack();
      return;
    }

    if (resultado.canceled) {
      navigation.goBack();
      return;
    }
  };

  useFocusEffect(
    useCallback(() => {
      const configurarBarra = async () => {
        await NavigationBar.setBehaviorAsync("overlay-swipe");
        await NavigationBar.setVisibilityAsync("hidden");
      }; 
      configurarBarra();
      tirarFoto();
    }, []),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.abrindoCam}>Abrindo câmera...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8fbf3",
  },
  abrindoCam: {
    fontSize: 25,
    fontWeight: 500,
  },
});
