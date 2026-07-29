import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Search } from "lucide-react-native";
import { ChevronLeft } from "lucide-react-native";
import { ChevronRight } from "lucide-react-native";
import { FlatList } from "react-native";
import ModalFiltro from "../../components/modalFiltro/ModalFiltro";
import { Filter } from "lucide-react-native";
import BottomMenu from "../../components/menu/menu";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import * as NavigationBar from "expo-navigation-bar";

export default function Histórico() {
  const [modalVisible, setModalVisible] = useState(false);
  const [filtro, setFiltro] = useState("Todos");
  useEffect(() => {
    NavigationBar.setVisibilityAsync("hidden");
  }, []);
  const [pesquisa, setPesquisa] = useState("");
  // const [historico, setHistorico] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.com/historico")
  //     .then((res) => res.json())
  //     .then((dados) => setHistorico(dados));
  // }, []);

  const historico = [
    {
      id: "1",
      nome: "Tomate",
      doenca: "Míldio",
      data: "27/07/2026",
      confianca: "95%",
      nivel: "Alto",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS83QYTh-w9HWLxvSd6b7MDdtcthVMEZp_Pq2NGel0WAg&s=10",
    },
    {
      id: "2",
      nome: "Batata",
      doenca: "Ferrugem",
      data: "26/07/2026",
      confianca: "87%",
      nivel: "Médio",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaM99o-e-AxIRoMiY-8sfsi3Pjp-WqFep_qomvXy1aeA&s=10",
    },
    {
      id: "3",
      nome: "Milho",
      doenca: "Mancha foliar",
      data: "25/07/2026",
      confianca: "92%",
      nivel: "Baixo",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjPNsMrgGERUM4aEYiDG3y-sk40IfMJ_1i_4hC-hY5xCDf5nFCnGGJDBE&s=10",
    },
  ];

  const historicoFiltrado = historico.filter((item) => {
    const pesquisaOk =
      item.nome.toLowerCase().includes(pesquisa.toLowerCase()) ||
      item.doenca.toLowerCase().includes(pesquisa.toLowerCase()) ||
      item.data.includes(pesquisa);

    const riscoOk = filtro === "Todos" || item.nivel === filtro;

    return pesquisaOk && riscoOk;
  });

  return (
    <View style={styles.container}>
      <View style={styles.topo}>
        <ChevronLeft size={40} color="#666" style={styles.voltar} />
        <Text style={styles.titulo}>Histórico de análises </Text>
      </View>
      <StatusBar style="auto" />

      <View style={styles.filtros}>
        <View style={styles.inputContainer}>
          <Search size={30} color="#888" />
          <TextInput
            placeholder="Buscar no histórico..."
            value={pesquisa}
            onChangeText={setPesquisa}
            style={styles.input}
          />
        </View>
        <Pressable
          onPress={() => setModalVisible(true)}
          style={({ pressed }) => [
            styles.filtro,
            {
              backgroundColor: pressed ? "#ccc9c9" : "#fbffffa9",
            },
          ]}
        >
          <Filter size={30} color="#666" />
        </Pressable>
      </View>
      <FlatList
        data={historicoFiltrado}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {}}
            style={({ pressed }) => [
              styles.card,
              {
                backgroundColor: pressed ? "#ccc9c9" : "#fbffffa9",
              },
            ]}
          >
            <Image
              source={{ uri: item.imagem }}
              style={{ width: 120, height: 120, borderRadius: 15 }}
            />

            <View style={styles.infos}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.info}>{item.doenca}</Text>

              <View style={styles.infos2}>
                <Text style={styles.info}>{item.data}</Text>
                <Text>•</Text>
                <Text style={styles.info}>{item.confianca}</Text>
              </View>
            </View>

            <Text
              style={[
                styles.nivel,
                item.nivel === "Alto" && styles.nivelAlto,
                item.nivel === "Médio" && styles.nivelMedio,
                item.nivel === "Baixo" && styles.nivelBaixo,
              ]}
            >
              {item.nivel}
            </Text>

            <ChevronRight size={30} color="#000" />
          </Pressable>
        )}
      />

      <BottomMenu />
      <ModalFiltro
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSelecionar={(nivel) => {
          setFiltro(nivel);
          setModalVisible(false);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbffffa9",
    alignItems: "center",
    marginTop: 50,
    padding: 20,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 500,
    marginRight: 70,
  },
  topo: {
    marginBottom: 40,
    flexDirection: "row",
  },
  voltar: {
    marginRight: 60,
  },
  filtros: {
    flexDirection: "row",
    gap: 15,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 10,
    paddingHorizontal: 12,
    minWidth: 370,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    height: 45,
    fontSize: 18,
  },
  filtro: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 10,
    maxWidth: 40,
    marginBottom: 20,
    padding: 20,
    paddingVertical: 12,
  },

  card: {
    width: 430,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#adadadb6",
    padding: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
  infos: {},
  nome: {
    fontSize: 19,
    fontWeight: 600,
    marginBottom: 8,
  },
  info: {
    fontSize: 18,
    fontWeight: 400,
    color: "#666",
    marginBottom: 8,
  },
  infos2: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 150,
  },
  nivel: {
    width: 50,
    textAlign: "center",
    padding: 3,
    borderRadius: 5,
    fontWeight: 400,
  },
  nivelAlto: {
    backgroundColor: "#ff4d4d",
  },

  nivelMedio: {
    backgroundColor: "#ffe14d",
  },

  nivelBaixo: {
    backgroundColor: "#6fff4b",
  },
});
