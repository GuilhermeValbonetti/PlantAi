import React from "react";
import {
  Modal,
  View,
  Text,
  Pressable,
  StyleSheet,
} from "react-native";

interface Props {
  visible: boolean;
  onClose: () => void;
  onSelecionar: (nivel: string) => void;
}

export default function ModalFiltro({
  visible,
  onClose,
  onSelecionar,
}: Props) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modal}>

          <Text style={styles.titulo}>
            Filtrar por risco
          </Text>

          <Pressable
            style={styles.opcao}
            onPress={() => onSelecionar("Todos")}
          >
            <Text>Todos</Text>
          </Pressable>

          <Pressable
            style={styles.opcao}
            onPress={() => onSelecionar("Alto")}
          >
            <Text>🔴 Alto</Text>
          </Pressable>

          <Pressable
            style={styles.opcao}
            onPress={() => onSelecionar("Médio")}
          >
            <Text>🟡 Médio</Text>
          </Pressable>

          <Pressable
            style={styles.opcao}
            onPress={() => onSelecionar("Baixo")}
          >
            <Text>🟢 Baixo</Text>
          </Pressable>

          <Pressable
            style={styles.botaoFechar}
            onPress={onClose}
          >
            <Text style={{ color: "#FFF" }}>
              Fechar
            </Text>
          </Pressable>

        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },

  modal: {
    width: 320,
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 20,
  },

  titulo: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
  },

  opcao: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "#DDD",
  },

  botaoFechar: {
    marginTop: 20,
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
});