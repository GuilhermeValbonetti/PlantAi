import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { Camera, Sparkles } from "lucide-react-native";
import { analisarImagemPlanta } from "../../lib/analysisService";

const AnaliseScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  const pedirPermissaoCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Permissao necessaria", "E necessario permitir o acesso a camera.");
      return false;
    }

    return true;
  };

  const pedirPermissaoGaleria = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Permissao necessaria", "E necessario permitir o acesso a galeria.");
      return false;
    }

    return true;
  };

  const definirImagemSelecionada = (uri: string) => {
    setImageUri(uri);
    setErro(null);
  };

  const abrirCamera = async () => {
    const permitido = await pedirPermissaoCamera();

    if (!permitido) {
      return;
    }

    const resposta = await ImagePicker.launchCameraAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 5],
      quality: 0.8,
    });

    if (!resposta.canceled) {
      definirImagemSelecionada(resposta.assets[0].uri);
    }
  };

  const abrirGaleria = async () => {
    const permitido = await pedirPermissaoGaleria();

    if (!permitido) {
      return;
    }

    const resposta = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 5],
      quality: 0.8,
    });

    if (!resposta.canceled) {
      definirImagemSelecionada(resposta.assets[0].uri);
    }
  };

  const analisarFoto = async () => {
    if (!imageUri) {
      Alert.alert("Selecione uma foto", "Tire uma foto ou escolha uma imagem da galeria.");

      return;
    }

    setLoading(true);
    setErro(null);

//Pegando o ID - Yallison
    const id : any = AsyncStorage.getItem("userId")
    try {
      const resposta = await analisarImagemPlanta(imageUri, id);
      navigation.navigate("Resultado", {
        imageUri,
        resultado: resposta,
      });
    } catch (error) {
      const mensagem = error instanceof Error ? error.message : "Nao foi possivel analisar a foto.";
      setErro(mensagem);
    } finally {
      setLoading(false);
    }
  };

  const limparTudo = () => {
    setImageUri(null);
    setErro(null);
  };

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
            Fotografe uma folha com boa iluminação para melhorar a leitura da IA.
          </Text>

          {imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.previewImage} />
          ) : (
            <View style={styles.photoPlaceholder}>
              <Camera size={54} color="#2F8E3E" strokeWidth={1.8} style={styles.cameraIcon} />
              <Text style={styles.photoPlaceholderText}>
                Capture detalhes visiveis da folha para obter um diagnostico mais preciso.
              </Text>
            </View>
          )}

          <TouchableOpacity style={styles.primaryButton} activeOpacity={0.8} onPress={abrirCamera}>
            <Text style={styles.primaryButtonText}>Tirar foto</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton} activeOpacity={0.8} onPress={abrirGaleria}>
            <Text style={styles.secondaryButtonText}>Escolher da galeria</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionButton, (!imageUri || loading) && styles.actionButtonDisabled]}
            activeOpacity={0.8}
            onPress={analisarFoto}
            disabled={!imageUri || loading}
          >
            {loading ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <View style={styles.buttonRow}>
                <Sparkles size={18} color="#FFFFFF" />
                <Text style={styles.actionButtonText}>Analisar foto</Text>
              </View>
            )}
          </TouchableOpacity>

          {imageUri ? (
            <TouchableOpacity style={styles.linkButton} activeOpacity={0.8} onPress={limparTudo}>
              <Text style={styles.linkButtonText}>Trocar imagem</Text>
            </TouchableOpacity>
          ) : null}
        </View>

        {erro ? (
          <View style={styles.errorCard}>
            <Text style={styles.errorTitle}>Nao foi possivel analisar</Text>
            <Text style={styles.errorText}>{erro}</Text>
          </View>
        ) : null}
        <View style={styles.tipsCard}>
          <Text style={styles.tipsTitle}>Dicas para uma boa foto</Text>
          <View style={styles.tipItem}>
            <Text style={styles.tipBullet}>•</Text>
            <Text style={styles.tipText}>Use boa iluminação natural ou artificial.</Text>
          </View>
          <View style={styles.tipItem}>
            <Text style={styles.tipBullet}>•</Text>
            <Text style={styles.tipText}>Foque na area afetada da folha.</Text>
          </View>
          <View style={styles.tipItem}>
            <Text style={styles.tipBullet}>•</Text>
            <Text style={styles.tipText}>Evite sombras, borrões e areas muito escuras.</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fbf3',
    paddingTop: 30,
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
    fontSize: 30,
    fontWeight: 700,
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
  previewImage: {
    width: "100%",
    height: 260,
    borderRadius: 20,
    marginBottom: 18,
    backgroundColor: "#F8FAFC",
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
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
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
  actionButtonDisabled: {
    opacity: 0.7,
  },
  actionButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  linkButton: {
    alignItems: "center",
    marginTop: 12,
  },
  linkButtonText: {
    color: "#2F8E3E",
    fontSize: 14,
    fontWeight: "600",
  },
  resultCard: {
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
  resultTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#102A43",
    marginBottom: 12,
  },
  resultBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#E6F4EA",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
    marginBottom: 16,
  },
  resultBadgeText: {
    color: "#1E7C3E",
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  resultBlock: {
    marginBottom: 14,
  },
  resultLabel: {
    fontSize: 12,
    color: "#6B7280",
    marginBottom: 6,
    textTransform: "uppercase",
  },
  resultValue: {
    fontSize: 16,
    color: "#102A43",
    fontWeight: "700",
  },
  resultText: {
    fontSize: 14,
    color: "#475569",
    lineHeight: 20,
  },
  errorCard: {
    backgroundColor: "#FFF1F2",
    borderRadius: 20,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#FECDD3",
  },
  errorTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#9F1239",
    marginBottom: 6,
  },
  errorText: {
    fontSize: 14,
    color: "#BE123C",
    lineHeight: 20,
  },
});

export default AnaliseScreen;
