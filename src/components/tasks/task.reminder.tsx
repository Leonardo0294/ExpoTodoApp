import React from "react";
import { View, ViewStyle, Text } from "react-native";
import { Avatar, Button, IconButton, TouchableRipple, useTheme } from "react-native-paper";
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
          backgroundColor: "#7EC8E3", // Azul claro
          alignSelf: "flex-start",
        },
        props.size === "big" && { maxWidth: 400 },
        props.heroStyle,
      ]}
    >
      <View
        style={[
          {
            flex: 1,
            paddingHorizontal: 5,
            justifyContent: "space-between",
            borderRadius: 10, // Añadimos bordes redondeados
            overflow: "hidden", // Ocultamos contenido que sobresale del borde
          },
          props.footerStyle,
        ]}
      >
        <View>
          <View
            style={{
              marginTop: props.size === "big" ? 20 : 3,
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
                  color: "#4A3A7C", // Violeta oscuro
                  fontSize: props.size === "big" ? 25 : 20,
                  lineHeight: 30,
                },
              ]}
            >
              {props.task.title}
            </Text>
            <View style={styles.avatar}>
              <Avatar.Icon
                icon="account"
                color="#4A3A7C" // Violeta oscuro
                size={props.size === "big" ? 50 : 40}
              />
              <Text style={{ color: "#4A3A7C" }}>{props.task.author}</Text> {/* Violeta oscuro */}
            </View>
          </View>
          <Text
            style={[
              baseStyles.baseText,
              {
                color: "#4A3A7C", // Violeta oscuro
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
        paddingVertical: 20,
        flexDirection: "row-reverse",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Text
        style={{
          color: "#4A3A7C", // Violeta oscuro
        }}
      >
        {props.date.toLocaleDateString("es-ES")} {/* Convertir a formato de fecha en español */}
      </Text>
      <IconButton icon="clock-outline" size={30} color="#4A3A7C" /> {/* Violeta oscuro */}
    </View>
  );
}

const styles = ScaledSheet.create({
  hero: {
    marginTop: 20,
    marginLeft: 20,
    maxWidth: 385,
    borderRadius: 10, // Bordes redondeados
  },
  heroText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  avatar: {
    height: "auto",
    marginTop: 15,
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
    gap: 5,
    alignItems: "center",
    paddingHorizontal: 20,
  },
});
