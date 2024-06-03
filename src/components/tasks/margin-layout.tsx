import React from "react";
import { View, StyleSheet } from "react-native";

export default function MarginLayout(props: { children: React.ReactNode }) {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    backgroundColor: "#FFFFFF",
  },
});
