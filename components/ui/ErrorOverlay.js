import { View, Text, StyleSheet } from "react-native";
import { GlobalStyle } from "../../constants/Styles";
import Button from "./Button";

export default function ErrorOverlay({ message, onConfirm }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An error occured!</Text>
      <Text style={styles.text}>{message}</Text>
      <Button onPress={onConfirm}>Okay</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyle.colors.primary700,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    color: "white",
    textAlign: "center",
    marginBottom: 8,
  },
});
