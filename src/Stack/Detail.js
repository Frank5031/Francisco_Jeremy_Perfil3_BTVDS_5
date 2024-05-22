import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import creadorData from '../data/creador';
import Boton from '../components/Boton';

const Detail = () => {
    const creador = creadorData[0];

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Creadores</Text>
                    <Text style={styles.title2}>{creador.name}</Text>
                    <Text style={styles.title}>Descripción del Perfil:</Text>
                    <Text style={styles.description}>{creador.desc} y por ultimo se utilizaron las siguientes
                    dependencias:  {'\n'}

        <Text style={styles.lista}>react-native-picker-select    {'\n'} </Text>            
        <Text style={styles.lista}>react-native-screens react-native-safe-area-context      {'\n'} </Text>
        <Text style={styles.lista}>@react-navigation/material-bottom-tabs react-native-paper react-native-vector-icons      {'\n'} </Text>
        <Text style={styles.lista}>@react-navigation/stack      {'\n'} </Text>
   
        <Text style={styles.lista}>@react-native-gesture-handler  {'\n'}{'\n'}</Text> </Text>
        <Text style={styles.lista}>Video de ayuda:{'\n'}https://youtu.be/PO5P0EscvFI?si=eomH4O3IFn285qby</Text>
                </View>
       </View>
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: StatusBar.currentHeight || 0,
    },
    lista: {
        fontSize: 16,
        lineHeight: 24,
        marginLeft: 20, // Añade un margen a la izquierda para simular la lista
        fontWeight: 'bold', // Opcional: Puedes aplicar cualquier otro estilo que desees
        color: 'black', // Opcional: Color del texto de la lista
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '80%',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    textContainer: {
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 5,
    },
    title2: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5,
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
  });