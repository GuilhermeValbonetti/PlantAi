import React from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ArrowLeft } from "lucide-react-native";
import type { ResultadoAnalise } from "../../lib/analysisService";

type ResultadoRouteParams = {
  imageUri?: string;
  resultado?: ResultadoAnalise;
};

function obterPorcentagemConfianca(nivel?: string) {
  const valor = (nivel || "").toLowerCase();

  if (valor.includes("alta")) {
    return "92%";
  }

  if (valor.includes("media") || valor.includes("média")) {
    return "65%";
  }

  if (valor.includes("baixa")) {
    return "30%";
  }

  return "--";
}

export default function ResultadoScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute();
  const { imageUri, resultado } = (route.params || {}) as ResultadoRouteParams;

  const voltarParaAnalise = () => {
    navigation.goBack();
  };

  const novaAnalise = () => {
    navigation.navigate("Analise");
  };

  if (!resultado) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.emptyState}>
          <Text style={styles.emptyTitle}>Nenhum resultado encontrado</Text>
          <Text style={styles.emptyText}>
            Volte para a tela de análise e envie uma foto para ver o diagnóstico aqui.
          </Text>
          <Pressable style={styles.primaryButton} onPress={voltarParaAnalise}>
            <Text style={styles.primaryButtonText}>Voltar</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Pressable style={styles.backButton} onPress={voltarParaAnalise}>
            <ArrowLeft size={20} color="#1F2937" />
          </Pressable>

          <Text style={styles.headerTitle}>Resultado da análise</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.nomePopular}>{resultado.nomePopular}</Text>
          <Text style={styles.subtitulo}>({resultado.possivelDoenca})</Text>

          <View style={styles.infoRow}>
            <View style={styles.infoBlock}>
              <Text style={styles.infoLabel}>Probabilidade</Text>
              <Text style={styles.probabilidade}>{obterPorcentagemConfianca(resultado.nivelConfianca)}</Text>
            </View>

            <View style={styles.infoBlock}>
              <Text style={styles.infoLabel}>Nível de gravidade</Text>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{resultado.nivelConfianca}</Text>
              </View>
            </View>
          </View>

          {imageUri ? <Image source={{ uri: imageUri }} style={styles.image} /> : null}

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Tratamento</Text>
            <Text style={styles.sectionText}>{resultado.tratamento}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Prevenção</Text>
            <Text style={styles.sectionText}>{resultado.prevencao}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Observações</Text>
            <Text style={styles.sectionText}>{resultado.observacoes || "Sem observações adicionais."}</Text>
          </View>
        </View>

        <View style={styles.actionsRow}>
          <Pressable style={styles.secondaryButton} onPress={novaAnalise}>
            <Text style={styles.secondaryButtonText}>+ Nova análise</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },
  content: {
    padding: 20,
    paddingBottom: 32,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 18,
  },
  backButton: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 2,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#102A43",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 18,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 18,
    elevation: 3,
  },
  nomePopular: {
    fontSize: 24,
    fontWeight: "800",
    color: "#111827",
  },
  subtitulo: {
    marginTop: 4,
    fontSize: 14,
    color: "#6B7280",
    fontStyle: "italic",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 18,
  },
  infoBlock: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 12,
    color: "#6B7280",
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  probabilidade: {
    fontSize: 34,
    fontWeight: "800",
    color: "#2F7D32",
  },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: "#FDECC8",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
  },
  badgeText: {
    color: "#D97706",
    fontWeight: "700",
    fontSize: 14,
  },
  image: {
    width: "100%",
    height: 220,
    borderRadius: 18,
    marginBottom: 18,
    backgroundColor: "#E5E7EB",
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 6,
  },
  sectionText: {
    fontSize: 14,
    lineHeight: 21,
    color: "#4B5563",
  },
  actionsRow: {
    flexDirection: "row",
    marginTop: 18,
  },
  secondaryButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
  },
  secondaryButtonText: {
    color: "#111827",
    fontSize: 15,
    fontWeight: "700",
  },
  primaryButton: {
    marginTop: 18,
    backgroundColor: "#2F7D32",
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
  emptyState: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#111827",
    marginBottom: 10,
    textAlign: "center",
  },
  emptyText: {
    fontSize: 14,
    color: "#4B5563",
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 18,
  },
});
