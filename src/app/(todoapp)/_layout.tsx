import { Tabs, router, useRouter } from "expo-router";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { View, StyleSheet } from "react-native"; // Agregamos StyleSheet
import {
  Appbar,
  Icon,
  MD3Theme,
  Surface,
  Text,
  useTheme,
} from "react-native-paper";
import { ScaledSheet } from "react-native-size-matters";
import TaskContextProvider from "@/components/tasks/provider";

export function Header(props: BottomTabHeaderProps & { theme: MD3Theme }) {
  const theme = props.theme;
  return (
    <View>
      <Appbar.Header
        style={{
          backgroundColor: theme.colors.surface,
          borderBottomColor: theme.colors.elevation.level3,
          borderBottomWidth: 1,
          shadowColor: theme.colors.elevation.level3,
        }}
      >
        {router.canGoBack() && (
          <Appbar.BackAction
            onPress={() => {
              router.back();
            }}
            {...props.navigation}
          />
        )}
        <Appbar.Content
          title={props.options.title ?? ""}
          titleStyle={{ fontWeight: 800 }}
        />
        <Appbar.Action
          icon="cog"
          onPress={() => {
            router.navigate("/settings");
          }}
        />
      </Appbar.Header>
    </View>
  );
}

export default function Layout() {
  const theme = useTheme();
  return (
    <TaskContextProvider>
      <Tabs
        sceneContainerStyle={{
          width: "100%",
        }}
        screenOptions={{
          header: (props) => <Header {...props} theme={theme} />,
          tabBarStyle: {
            backgroundColor: theme.colors.primary,
            borderTopColor: theme.colors.border,
            borderTopWidth: 1,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "",
            tabBarLabel: "Inicio", // Usamos tabBarLabel directamente como string
            tabBarIcon: ({ focused, size }) => (
              <Icon
                source={focused ? "home" : "home-outline"}
                size={size}
                theme={theme}
                style={styles.iconStyle} // Agregamos estilos para el icono
              />
            ),
          }}
        />
        <Tabs.Screen
          name="add-task"
          options={{
            title: "",
            tabBarHideOnKeyboard: true,
            tabBarIcon: ({ size }) => (
              <Surface
                elevation={4}
                style={{
                  backgroundColor: theme.colors.primary,
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "auto",
                  width: "50%",
                  height: "120%",
                  borderRadius: 100,
                  zIndex: 100,
                  marginBottom: 5,
                }}
              >
                <Text style={{ color: theme.colors.onPrimary }}>
                  Nueva tarea
                </Text>
              </Surface>
            ),
          }}
        />
        <Tabs.Screen
          name="task-list"
          options={{
            title: "Lista de tareas",
            tabBarLabel: "Lista de tareas",
            tabBarIcon: ({ focused, size }) => (
              <Icon
                source={focused ? "clipboard-list" : "clipboard-list-outline"}
                size={size}
                theme={theme}
                style={styles.iconStyle} // Agregamos estilos para el icono
              />
            ),
          }}
        />
        <Tabs.Screen name="tasks" options={{ href: null }} />
      </Tabs>
    </TaskContextProvider>
  );
}

// Definimos estilos para los iconos
const styles = StyleSheet.create({
  iconStyle: {
    marginHorizontal: 5, // Agregamos un margen horizontal para separar el icono del texto
  },
});
