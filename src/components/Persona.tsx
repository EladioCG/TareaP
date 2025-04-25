import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//Aqui es donde se cargan las personas en una constante ListaPersona para que se pueda llamar en cualquier momento desde cualquier pagina

interface Props {
  personaId: string;
  nombre: string;
  gender: string;
  tipo: number;
}

export const ListaPersona = ({ personaId, nombre, gender, tipo }: Props) => (
  <View style={styles.card}>
    <Text style={styles.title}>{nombre}</Text>
    <Text style={styles.text}>ID: {personaId}</Text>
    <Text style={styles.text}>Género: {gender}</Text>
    <Text style={styles.text}>Tipo: {tipo}</Text>
  </View>
);

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'rgba(160, 157, 157, 0.9)',
        borderRadius: 10,
        padding: 16,
        marginBottom: 16,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 6,
      },
      text: {
        fontSize: 16,
        marginBottom: 4,
      },
});
