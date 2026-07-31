
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

export default function Perfil() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>

        <Image
          source={{
            uri: "https://i.pravatar.cc/150?img=12",
          }}
          style={styles.foto}
        />

        <Text style={styles.nome}>Guilherme Valbonetti</Text>
        <Text style={styles.email}>guilherme@gmail.com</Text>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.texto}>Editar dados</Text>
          <Text style={styles.seta}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.texto}>Alterar senha</Text>
          <Text style={styles.seta}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.texto}>Preferências</Text>
          <Text style={styles.seta}>›</Text>
        </TouchableOpacity>

        <View style={styles.item}>
          <Text style={styles.texto}>Idioma</Text>
          <Text style={styles.valor}>Português ▼</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.texto}>Tema</Text>
          <Text style={styles.valor}>Claro ▼</Text>
        </View>

        <TouchableOpacity style={styles.botaoSair}>
          <Text style={styles.textoSair}>Sair da conta</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    elevation: 5,
  },

  foto: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: "center",
    marginBottom: 10,
  },

  nome: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  email: {
    textAlign: "center",
    color: "gray",
    marginBottom: 25,
  },

  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  texto: {
    fontSize: 16,
  },

  seta: {
    fontSize: 22,
    color: "#999",
  },

  valor: {
    color: "#666",
  },

  botaoSair: {
    marginTop: 25,
    borderWidth: 1,
    borderColor: "#E74C3C",
    borderRadius: 10,
    padding: 12,
  },

  textoSair: {
    color: "#E74C3C",
    textAlign: "center",
    fontWeight: "bold",
  },
});
