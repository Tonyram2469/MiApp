import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  Switch,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function App() {
  const [textoIngresado, setTextoIngresado] = useState('');
  const [activo, setActivo] = useState(false);
  const [cargando, setCargando] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <StatusBar style="light" />

        {/* Textos principales */}
        <Text style={styles.textoBase}>Open up App.js to start working on your app!</Text>
        <Text style={styles.textStyle1}>Open up App.js to start working on your app!</Text>
        <Text style={styles.textStyle}>o pos ya sabes</Text>

        {/* Bloque original con imagen y botón */}
        <View style={styles.segundoBloque}>
          <Text style={styles.textSecundario}>Este es otro bloque</Text>
          <Button title="Presióname" onPress={() => alert("¡Hola!")} />
          
          <Image
            source={require('./assets/imagep.jpg')}
            style={styles.logo}
          />
        </View>

        {/* Nuevo Bloque: Componentes Interactivos */}
        <View style={styles.tercerBloque}>
          <Text style={styles.subtituloBloque}>Controles Interactivos</Text>

          {/* Campo de texto (TextInput) */}
          <TextInput
            style={styles.input}
            placeholder="Escribe algo aquí..."
            placeholderTextColor="#777"
            value={textoIngresado}
            onChangeText={setTextoIngresado}
          />

          {/* Interruptor (Switch) */}
          <View style={styles.filaSwitch}>
            <Text style={styles.switchTexto}>
              Modo activo: {activo ? 'Encendido' : 'Apagado'}
            </Text>
            <Switch
              value={activo}
              onValueChange={setActivo}
              trackColor={{ false: '#767577', true: '#4CAF50' }}
              thumbColor={activo ? '#ffffff' : '#f4f3f4'}
            />
          </View>

          {/* Botón táctil personalizado (TouchableOpacity) */}
          <TouchableOpacity
            style={styles.botonPersonalizado}
            activeOpacity={0.7}
            onPress={() => setCargando(!cargando)}
          >
            <Text style={styles.textoBotonPersonalizado}>
              {cargando ? 'Detener Carga' : 'Simular Carga'}
            </Text>
          </TouchableOpacity>

          {/* Indicador de carga (ActivityIndicator) */}
          {cargando && (
            <View style={styles.contenedorCarga}>
              <ActivityIndicator size="large" color="#1E88E5" />
              <Text style={styles.textoCarga}>Procesando...</Text>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#9a3c3c',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  textoBase: {
    color: '#ffffff',
    fontSize: 14,
    marginBottom: 6,
    textAlign: 'center',
  },
  textStyle: {
    fontSize: 24,
    color: '#3498db', // Corregido: antes decía "volor"
    fontWeight: 'bold',
    marginBottom: 15,
  },
  textStyle1: {
    fontSize: 26,
    color: '#a8ffb2',
    textAlign: 'center', // Corregido: sustituye a justifyContent y alignItems
    fontWeight: '600',
    marginBottom: 8,
  },
  segundoBloque: {
    backgroundColor: 'yellow',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    maxWidth: 320,
    marginBottom: 20,
  },
  textSecundario: {
    fontSize: 16,
    color: 'black',
    marginBottom: 10,
    fontWeight: '500',
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    borderRadius: 15,
    marginTop: 10,
  },
  tercerBloque: {
    backgroundColor: '#ffffff',
    width: '100%',
    maxWidth: 320,
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#e0e0e0',
    // Sombra para iOS y Android
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  subtituloBloque: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 12,
  },
  input: {
    width: '100%',
    height: 44,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 15,
    backgroundColor: '#f9f9f9',
    marginBottom: 12,
  },
  filaSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 8,
  },
  switchTexto: {
    fontSize: 15,
    color: '#444',
  },
  botonPersonalizado: {
    backgroundColor: '#1E88E5',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  textoBotonPersonalizado: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  contenedorCarga: {
    marginTop: 15,
    alignItems: 'center',
  },
  textoCarga: {
    marginTop: 6,
    color: '#555',
    fontSize: 13,
  },
});