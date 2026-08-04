import React from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

export default function HOME() {
  const { width } = useWindowDimensions();

  const titleSize = width * 0.07;
  const subtitleSize = width * 0.04;
  const bodySize = width * 0.038;

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        {
          paddingHorizontal: width * 0.05,
        },
      ]}
    >
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/left-arrow.png")}
          style={{
            width: width * 0.05,
            height: width * 0.05,
          }}
        />

        <Text
          style={{
            fontSize: titleSize,
            fontFamily: "Inter_700Bold",
            flex: 1,
            marginLeft: 15,
          }}
        >
          Resultado das análises
        </Text>
      </View>

      {/* Doença */}
      <View style={styles.doenca}>
        <Text
          style={{
            fontSize: titleSize + 6,
            fontFamily: "Inter_900Black",
          }}
        >
          Nome doença
        </Text>

        <Text
          style={{
            fontSize: subtitleSize,
            fontFamily: "Inter_400Regular",
            marginTop: 5,
          }}
        >
          Descrição
        </Text>
      </View>

      {/* Informações */}
      <View style={styles.infoContainer}>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontFamily: "Inter_400Regular",
              fontSize: bodySize,
            }}
          >
            Probabilidade
          </Text>

          <Text
            style={{
              fontFamily: "Inter_700Bold",
              fontSize: titleSize,
              color: "#134d12",
            }}
          >
            100%
          </Text>
        </View>

        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontFamily: "Inter_400Regular",
              fontSize: bodySize,
              color: "#d2b294",
            }}
          >
            Nível de risco
          </Text>

          <Text
            style={styles.grau}
          >
            Grau
          </Text>
        </View>
      </View>

      {/* Imagem */}
      <Image
        source={require("../../assets/images/images.jpg")}
        style={styles.image}
      />

      {/* Sintomas */}
      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            fontFamily: "Inter_600SemiBold",
            fontSize: subtitleSize + 4,
          }}
        >
          Sintomas encontrados
        </Text>

        <FlatList
          scrollEnabled={false}
          style={{ marginTop: 10 }}
          data={[
            { key: "Lista de sintomas" },
            { key: "Lista de sintomas 2" },
          ]}
          renderItem={({ item }) => (
            <Text
              style={{
                fontSize: bodySize,
                fontFamily: "Inter_400Regular",
                marginBottom: 6,
              }}
            >
              • {item.key}
            </Text>
          )}
        />
      </View>

      <Pressable style={styles.explicacao}>
        <Text
          style={{
            textAlign: "center",
            fontSize: bodySize,
          }}
        >
          Ver explicação detalhada
        </Text>
      </Pressable>

      
      <View style={styles.botoes}>
        <Pressable style={styles.botaoSalvar}>
          <Text style={styles.textoBotaoSalvar}>
            Salvar
          </Text>
        </Pressable>

        <Pressable style={styles.botaoNovo}>
          <Text style={styles.textoBotaoNovo}>
            Nova análise
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 25,
    backgroundColor: "#fff",
    flexGrow: 1,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
  },

  doenca: {
    marginTop: 25,
    marginBottom: 25,
  },

  infoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },

  grau: {
    alignSelf: "flex-start",
    marginTop: 5,
    backgroundColor: "#feecc8",
    color: "#d8904f",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 6,
    fontFamily: "Inter_600SemiBold",
  },

  image: {
    width: "50%",
    aspectRatio: 2,
    borderRadius: 12,
    marginTop: 10,
  },

  explicacao: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 8,
    paddingVertical: 12,
  },

  botoes: {
    flexDirection: "row",
    gap: 12,
    marginTop: 20,
    marginBottom: 20,
  },

  botaoSalvar: {
    flex: 1,
    backgroundColor: "#3a863f",
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
  },

  botaoNovo: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
  },

  textoBotaoSalvar: {
    color: "#fff",
    fontFamily: "Inter_700Bold",
  },

  textoBotaoNovo: {
    fontFamily: "Inter_600SemiBold",
  },
});