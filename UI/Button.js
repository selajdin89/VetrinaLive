import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

export default function Button(props) {
  const { onPress, title } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: "#21B8F9",
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "600",
    letterSpacing: 0.25,
    color: "white",
  },
});
