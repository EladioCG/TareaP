import React from 'react';
import { FlatList, ActivityIndicator, StyleSheet, ImageBackground, View } from 'react-native';
import { usePersonaStore } from '../store/personaStore';
import { ListaPersona } from '../components/Persona';

//Esta es la pantalla principal
//Aqui se trae el componente de Persona(ListaPersona) para cargar la lista de personas

export const HomeScreen = () => {
  const { personas, cargando } = usePersonaStore();

  if (cargando) return <ActivityIndicator size="large" style={styles.carga} />;

  return (
    <ImageBackground
      source={{ uri: 'https://w0.peakpx.com/wallpaper/588/975/HD-wallpaper-goku-ultra-instinct-for-mobile-phone-tablet-computer-and-other-devices-and-pantalla-de-goku-fondos-de-pantalla-goku-caricaturas-de-goku.jpg' }}
      style={styles.background}
      resizeMode="cover"
    >
        <View style={styles.overlay}>
            <FlatList
            data={personas}
            keyExtractor={(item) => item.personaId}
            renderItem={({ item }) => (
                <ListaPersona
                personaId={item.personaId}
                nombre={item.nombre}
                gender={item.gender}
                tipo={item.tipo}
                />
            )}
            />
        </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    carga: {
        backgroundColor: 'rgba(29, 27, 27, 0.8)',
    },
    background: {
      flex: 1,
    },
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(29, 27, 27, 0.8)', // blanco con opacidad
      padding: 16,
    },
  })
  
