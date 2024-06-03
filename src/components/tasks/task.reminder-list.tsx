import React from "react";
import { FlatList, ScrollView, View, StyleSheet } from "react-native";
import TaskReminder from "./task.reminder";
import { Text } from "react-native-paper";
import { useTasks } from "@/hooks/use-tasks";

export default function TaskReminderList() {
  const { tasks } = useTasks();
  return (
    <View style={styles.container}>
      <TaskReminder size={"big"} task={tasks[0]} />
      <View style={styles.recentTasksContainer}>
        <Text style={styles.recentTasksTitle}>Tareas recientes</Text>
        <ScrollView horizontal={true} contentContainerStyle={styles.taskList}>
          <FlatList
            horizontal={true}
            data={tasks.slice(1)}
            renderItem={({ item }) => (
              <TaskReminder size={"small"} task={item} />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F7F7F7",
  },
  recentTasksContainer: {
    marginTop: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
  },
  recentTasksTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
  taskList: {
    flexGrow: 1,
  },
});
