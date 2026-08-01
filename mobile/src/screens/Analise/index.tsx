import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Camera } from "lucide-react-native";

const AnaliseScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>‹</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Nova análise</Text>
        </View>

        <View style={styles.analysisCard}>
          <Text style={styles.sectionTitle}>Nova análise</Text>
          <Text style={styles.sectionDescription}>
            Fotografe uma folha em boas condições de iluminação.
          </Text>

          <View style={styles.photoPlaceholder}>
            <Camera size={54} color="#2F8E3E" strokeWidth={1.8} style={styles.cameraIcon} />
            <Text style={styles.photoPlaceholderText}>
              Capture detalhes visíveis da folha para obter um diagnóstico mais preciso.
            </Text>
          </View>

          <TouchableOpacity style={styles.primaryButton} activeOpacity={0.8}>
            <Text style={styles.primaryButtonText}>Tirar foto</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton} activeOpacity={0.8}>
            <Text style={styles.secondaryButtonText}>Escolher da galeria</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tipsCard}>
          <Text style={styles.tipsTitle}>Dicas para uma boa foto</Text>
          <View style={styles.tipItem}>
            <Text style={styles.tipBullet}>•</Text>
            <Text style={styles.tipText}>Use boa iluminação natural ou artificial.</Text>
          </View>
          <View style={styles.tipItem}>
            <Text style={styles.tipBullet}>•</Text>
            <Text style={styles.tipText}>Foque na área afetada da folha.</Text>
          </View>
          <View style={styles.tipItem}>
            <Text style={styles.tipBullet}>•</Text>
            <Text style={styles.tipText}>Evite sombras, borrões e áreas muito escuras.</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.actionButton} activeOpacity={0.8}>
          <Text style={styles.actionButtonText}>Continuar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },
  content: {
    padding: 24,
    paddingBottom: 32,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
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
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#102A43",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 20,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#133A28",
  },
  cardSubtitle: {
    marginTop: 4,
    fontSize: 14,
    color: "#54606D",
  },
  statusBadge: {
    backgroundColor: "#E6F4EA",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
  },
  statusBadgeText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#1E7C3E",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoBlock: {
    width: "48%",
  },
  infoLabel: {
    fontSize: 12,
    color: "#6B7280",
    marginBottom: 8,
  },
  infoValue: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1F2937",
  },
  analysisCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 18,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#132F28",
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 14,
    color: "#54606D",
    marginBottom: 20,
    lineHeight: 20,
  },
  photoPlaceholder: {
    backgroundColor: "#F8FAFC",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    padding: 28,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },
  cameraIcon: {
    marginBottom: 16,
  },
  photoPlaceholderText: {
    textAlign: "center",
    color: "#475569",
    fontSize: 14,
    lineHeight: 20,
  },
  primaryButton: {
    backgroundColor: "#5f9b3a",
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 12,
  },
  primaryButtonText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  secondaryButton: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: "center",
  },
  secondaryButtonText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1F2937",
  },
  tipsCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 14,
    elevation: 2,
  },
  tipsTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#102A43",
    marginBottom: 14,
  },
  tipItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  tipBullet: {
    color: "#2F8E3E",
    fontSize: 16,
    lineHeight: 22,
    marginRight: 10,
  },
  tipText: {
    flex: 1,
    fontSize: 14,
    color: "#475569",
    lineHeight: 20,
  },
  actionButton: {
    backgroundColor: "#5f9b3a",
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 8,
  },
  actionButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});

export default AnaliseScreen;
