import { baseStyles } from "@/components/base-styles";
import MarginLayout from "@/components/tasks/margin-layout";
import TaskReminderList from "@/components/tasks/task.reminder-list";
import { useAuth } from "@/hooks/use-auth";
import { View, ScrollView, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { ScaledSheet } from "react-native-size-matters";

export default function WelcomeMessage() {
  const { user } = useAuth();
  return (
    <View style={styles.container}>
      <MarginLayout>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.hero}>
            <Text variant="titleLarge" style={[baseStyles.baseText, styles.heroText]}>
              ¡Bienvenido!
            </Text>
            <Text variant="headlineLarge" style={[baseStyles.baseText, styles.heroText]}>
              ¿Qué te trae por aquí?
            </Text>
            <Text variant="bodyLarge" style={[baseStyles.baseText, baseStyles.subheading]}>
              {user?.username ? `Usuario: ${user.username}` : ''}
            </Text>
          </View>
          <View>
            <TaskReminderList />
          </View>
        </ScrollView>
      </MarginLayout>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  hero: {
    height: 200,
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 20,
    backgroundColor: "#FF5733",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  heroText: {
    fontWeight: 'bold',
    fontSize: '30@s',
    color: "#FFFFFF",
  }
});
