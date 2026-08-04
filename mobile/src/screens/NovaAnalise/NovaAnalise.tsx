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
import { useState } from "react";

export default function NovaAnalise() {
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
      quality: 1,
      allowsEditing: true,
    });

    if (!resultado.canceled) {
      const imagem = resultado.assets[0];

      console.log(imagem.uri);

      // Aqui você salva a imagem ou envia para análise
      // navigation.navigate("Resultado", { imagem: imagem.uri })
    }
  };

  const escolherImagem = async () => {
    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      quality: 1,
      allowsEditing: true,
    });

    if (!resultado.canceled) {
      setImagem(resultado.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botao} onPress={tirarFoto}>
        <Text style={styles.textoBotao}>Tirar Foto</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={escolherImagem}>
        <Text style={styles.textoBotao}>Escolher da Galeria</Text>
      </TouchableOpacity>

      {imagem && <Image source={{ uri: imagem }} style={styles.imagem} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  botao: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginBottom: 15,
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  imagem: {
    width: 250,
    height: 250,
    borderRadius: 12,
    marginTop: 20,
  },
});
