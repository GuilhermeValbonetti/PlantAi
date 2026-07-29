import { View, Text, Pressable, StyleSheet } from "react-native";
import {
  House,
  Sprout,
  Camera,
  SquareLibrary,
  User,
} from "lucide-react-native";
import { Link } from "expo-router";

export default function BottomMenu() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.item}>
        <House size={28} color="#222" />
        <Text style={styles.text}>Home</Text>
      </Pressable>

      <Pressable style={styles.item}>
        <Sprout size={28} color="#222" />
        <Text style={styles.text}>Plantas</Text>
      </Pressable>

      <Pressable style={styles.cameraButton}>
        <Camera size={34} color="#FFF" />
      </Pressable>

      <Link href="">
        <Pressable style={styles.item}>
          <SquareLibrary size={28} color="#2F7D32" />
          <Text style={[styles.text, { color: "#2F7D32" }]}>Histórico</Text>
        </Pressable>
      </Link>

      <Pressable style={styles.item}>
        <User size={28} color="#222" />
        <Text style={styles.text}>Perfil</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,

    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    backgroundColor: "#FFF",

    borderRadius: 28,

    paddingVertical: 15,

    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  item: {
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    marginTop: 5,
    fontSize: 13,
    color: "#222",
  },

  cameraButton: {
    width: 74,
    height: 74,
    borderRadius: 37,

    backgroundColor: "#4CAF50",

    justifyContent: "center",
    alignItems: "center",

    marginTop: -35,

    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
});
