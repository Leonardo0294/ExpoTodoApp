import React from "react";
import { View, ViewStyle, Text } from "react-native";
import { Button, IconButton, TouchableRipple, useTheme } from "react-native-paper";
import { ScaledSheet } from "react-native-size-matters";
import { baseStyles } from "../base-styles";
import { Task } from "@/interfaces/task";
import { useRouter } from "expo-router";

export default function TaskReminder(props: {
  size: "big" | "small";
  task: Task;
  heroStyle?: ViewStyle;
  footerStyle?: ViewStyle;
}) {
  const theme = useTheme();
  const router = useRouter();

  return (
    <TouchableRipple
      style={[
        styles.hero,
        {
          minHeight: props.size === "big" ? 240 : 200,
          backgroundColor: "#f0f4f8",
          alignSelf: "flex-start",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 5, // Para Android
        },
        props.size === "big" && { maxWidth: 400 },
        props.heroStyle,
      ]}
    >
      <View
        style={[
          {
            flex: 1,
            paddingHorizontal: 15, // Ajustar padding
            justifyContent: "space-between",
            borderRadius: 15, // Bordes más redondeados
            overflow: "hidden",
          },
          props.footerStyle,
        ]}
      >
        <View>
          <View
            style={{
              marginTop: props.size === "big" ? 20 : 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              numberOfLines={2}
              style={[
                styles.heroText,
                {
                  color: "#333", // Texto gris oscuro
                  fontSize: props.size === "big" ? 25 : 20,
                  lineHeight: 30,
                },
              ]}
            >
              {props.task.title}
            </Text>
          </View>
          <Text
            style={[
              baseStyles.baseText,
              {
                color: "#333", // Texto gris oscuro
                minHeight: 40,
              },
            ]}
          >
            {props.task.description}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 10,
          }}
        >
          <DateWithIcon date={props.task.date} />
          <Button
            mode="contained"
            onPress={() =>
              router.push({
                pathname: `/tasks/${props.task.id}`,
              })
            }
            style={{ backgroundColor: "#2D9CDB" }} // Azul brillante
            labelStyle={{ color: "#FFFFFF" }} // Texto blanco
          >
            Entrar a tarea
          </Button>
        </View>
      </View>
    </TouchableRipple>
  );
}

export function DateWithIcon(props: { date: Date }) {
  return (
    <View
      style={{
        paddingVertical: 15,
        flexDirection: "row-reverse",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Text
        style={{
          color: "#333", // Texto gris oscuro
        }}
      >
        {props.date.toLocaleDateString("es-ES")}
      </Text>
      <IconButton icon="clock-outline" size={30} color="#333" /> {/* Gris oscuro */}
    </View>
  );
}

const styles = ScaledSheet.create({
  hero: {
    marginTop: 20,
    marginLeft: 20,
    maxWidth: 385,
    borderRadius: 15, // Bordes más redondeados
    padding: 10, // Ajustar padding
  },
  heroText: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
