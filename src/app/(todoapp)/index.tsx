import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

export default function LoginPage() {
  const navigation = useNavigation(); // Obtiene el objeto de navegación

  // Valores predefinidos para simular el inicio de sesión
  const [username, setUsername] = useState('usuario');
  const [email, setEmail] = useState('usuario@example.com');
  const [password, setPassword] = useState('contraseña');
  const [error, setError] = useState('');

  const handleLogin = () => {
    try {
      // Validación de datos de inicio de sesión
      validateLoginData(username, email, password);
      navigation.navigate('index1');
    } catch (err) {
      // Si hay errores de validación, muestra el mensaje de error correspondiente
      setError(err.message);
    }
  };

  const validateLoginData = (username, email, password) => {
    // Validación del nombre de usuario
    if (!username || username.length < 5 || username.length > 10) {
      throw new Error("El nombre de usuario debe tener entre 5 y 10 caracteres.");
    }

    // Validación de la dirección de correo electrónico
    if (!email || !email.includes('@')) {
      throw new Error("La dirección de correo electrónico no es válida.");
    }

    // Validación de la contraseña
    if (!password || password.length < 5) {
      throw new Error("La contraseña debe tener al menos 5 caracteres.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>App de tareas</Text>
      <Text style={styles.subtitle}>Inicio de Sesión</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nombre de usuario"
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5', // Color de fondo claro
  },
  inputContainer: {
    width: '40%', // Ancho ajustado
    paddingVertical: 30, // Espaciado vertical para agrandar el contenedor
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#fff', // Fondo blanco para el contenedor de entrada
    marginBottom: 20,
    elevation: 3, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 }, // Sombra para iOS
    shadowOpacity: 0.1, // Sombra para iOS
    shadowRadius: 5, // Sombra para iOS
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fafafa', // Fondo gris claro
  },
  loginButton: {
    width: '40%',
    height: 45,
    backgroundColor: '#3897f0', // Azul Instagram
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  error: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
});
