import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { HomeScreen } from './src/screens/HomeScreen';

//Aqui es donde inicia la app
//Se crea un container de navegacion para ir por las pantallas

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(29, 27, 27, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
