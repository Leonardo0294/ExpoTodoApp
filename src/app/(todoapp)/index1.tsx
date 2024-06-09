import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import TaskReminderList from "@/components/tasks/task.reminder-list";
import { useAuth } from "@/hooks/use-auth";
import { Text } from "react-native-paper";

export default function WelcomeMessage() {
  const { user } = useAuth();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.heroText}>
          ¡Bienvenido, {user?.username || "Usuario"}!
        </Text>
        <Text style={styles.description}>
          Aquí puedes gestionar tus tareas de forma sencilla.
        </Text>
      </View>
      <TaskReminderList />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFB6C1",
  },
  hero: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  heroText: {
    fontSize: 60,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 30,
    textAlign: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
    color: "#555",
  },
});
