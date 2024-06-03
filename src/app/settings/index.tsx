import { baseStyles } from "@/components/base-styles";
import MarginLayout from "@/components/tasks/margin-layout";
import { useAuth } from "@/hooks/use-auth";
import { List, Switch, Text, useTheme } from "react-native-paper";
import { ScrollView, View, useColorScheme } from "react-native";
import { usePreferences } from "@/hooks/use-preferences";

export default function Settings() {
  const { preferences, toggleDarkMode } = usePreferences();
  const { user, logout } = useAuth()!;
  const theme = useTheme();
  return (
    <MarginLayout>
      <View
        style={{
          padding: 20,
          flex: 1,
          backgroundColor: theme.colors.background,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: theme.colors.border,
        }}
      >
        <Text
          variant="titleLarge"
          style={[baseStyles.baseText, { color: theme.colors.text }, styles.title]}
        >
          Configuraciones
        </Text>
        <Text
          variant="bodyLarge"
          style={[baseStyles.baseText, { color: theme.colors.text }, styles.subtitle]}
        >
          Personaliza tu experiencia en la aplicación.
        </Text>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
        >
          <List.Section title="Apariencia">
            <List.Item
              title="Modo oscuro"
              left={(props) => (
                <List.Icon
                  {...props}
                  icon="theme-light-dark"
                  color={theme.colors.primary}
                />
              )}
              right={() => {
                return (
                  <Switch
                    value={preferences.theme === "dark"}
                    onValueChange={toggleDarkMode}
                    color={theme.colors.accent}
                  />
                );
              }}
            />
          </List.Section>
          <List.Section title="Cuenta">
            <List.Item
              title={user?.username ?? "Usuario desconocido"}
              left={(props) => (
                <List.Icon
                  {...props}
                  icon="account"
                  color={theme.colors.primary}
                />
              )}
            />
            <List.Item
              title="Cerrar sesión"
              left={(props) => (
                <List.Icon
                  {...props}
                  icon="logout"
                  color={theme.colors.primary}
                />
              )}
              onPress={logout}
            />
          </List.Section>
        </ScrollView>
      </View>
    </MarginLayout>
  );
}

const styles = {
  title: {
    marginBottom: 10,
    fontWeight: "bold",
  },
  subtitle: {
    marginBottom: 20,
  },
  scrollContainer: {
    flexGrow: 1,
  },
};
