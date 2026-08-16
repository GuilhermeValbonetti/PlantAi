import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import { Clock3, Leaf } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

import { useRouter } from "expo-router";

export default function Plantas() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Plantas</Text>
      </View>
      {/* Imagem de manutenção */}
      <Image
        source={require("../../assets/manutencaoImg.png")}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Título */}
      <Text style={styles.title}>
        Ops! Essa página{"\n"}
        está em desenvolvimento
      </Text>

      {/* Descrição */}
      <Text style={styles.description}>
        Estamos trabalhando para trazer uma{"\n"}
        experiência incrível para você.
        {"\n\n"}
        Em breve essa funcionalidade{"\n"}
        estará disponível!
      </Text>

      {/* Card informativo */}
      <View style={styles.card}>
        <View style={styles.iconCircle}>
          <Clock3 size={38} color="#4CAF50" />
        </View>

        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>Estamos melhorando</Text>

          <Text style={styles.cardDescription}>
            Nossa equipe está cuidando de cada
            {"\n"}
            detalhe com muito carinho. Obrigado
            {"\n"}
            pela compreensão!
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBFFF7",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingTop: 60,
  },
  header: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
    marginBottom: 24,
  },
  backButton: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 2,
  },
  backButtonText: {
    fontSize: 22,
    color: "#1E1F20",
    lineHeight: 24,
  },
  

  image: {
    width: 330,
    height: 300,
    marginTop: 20,
  },

  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: 700,
     color: "#102A43",
    lineHeight: 40,
  },

  description: {
    textAlign: "center",
    fontSize: 18,
    color: "#4B4B4B",
    marginTop: 25,
    lineHeight: 28,
  },

  card: {
    width: "100%",
    backgroundColor: "#F0F9E8",
    borderRadius: 30,
    padding: 25,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 45,
  },

  iconCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#E3F5D5",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },

  cardText: {
    flex: 1,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#315B35",
    marginBottom: 8,
  },

  cardDescription: {
    fontSize: 16,
    color: "#4B4B4B",
    lineHeight: 23,
  },

  button: {
    width: "90%",
    height: 75,
    backgroundColor: "#58A637",
    borderRadius: 40,
    marginTop: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,

    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 21,
    fontWeight: "700",
  },
});