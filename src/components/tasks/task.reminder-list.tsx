import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import TaskReminder from "./task.reminder";
import { Text } from "react-native-paper";
import { useTasks } from "@/hooks/use-tasks";

export default function TaskReminderList() {
  const { tasks } = useTasks();

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Tareas</Text>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskReminder size={"small"} task={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.taskContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0E0E0",
    paddingHorizontal: 0,
    paddingTop: 0,
  },
  headerText: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: "bold",
    backgroundColor: "#FF5722",
    paddingHorizontal: 1,
    paddingVertical: 1,
    marginBottom: 1,
    borderRadius: 5,
  },
  taskContainer: {
    paddingVertical: 5,
  },
});
