import React from 'react';
import {View,Text, StyleSheet, FlatList, Image, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import data from '../data/data';
import Boton from '../components/Boton';

const Home = () => {
    const navigation = useNavigation()
    const informacion = data;

    const irDetalles = async () => {
        navigation.navigate('Detail');
    };


    return (
        <ScrollView style={styles.container}>
            <Text style={styles.IndicaionesT}>Indicaiones</Text>
            <Text style={styles.Indicaiones}>Pantalla 1: Crear una pantalla con información de los estudiantes, mostrar el nombre, carné y foto de los estudiantes.Mostrar la información de los estudiantes en forma de card. </Text>
            <View style={styles.fondoTextoA}>
            <Boton
            textoBoton='Ir a creditos' accionBoton={irDetalles}/>
            </View>
            <View>
                <View style={styles.fondoTexto}>
                    <Text style={styles.title}>Estudiantes</Text>
                </View>
                <View style={styles.flatListContainer}>
                    <FlatList
                        data={informacion}
                        horizontal={true}
                        renderItem={({ item }) => (
                            <View style={styles.cardContainer}>
                                <Image source={item.src} style={styles.image} />
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.title}>{item.numero}</Text>
                            </View>
                        )}
                        keyExtractor={(item) => item.id}
                    />
            </View>

            <Text style={styles.title}></Text>

            <Text style={styles.title}></Text>
        </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#FFF',
        paddingTop: 20,
        marginTop: StatusBar.currentHeight || 20,
    },
    flatListContainer: {
        height: 330, // Altura fija para evitar el crecimiento automático
        marginHorizontal:5
    },
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        marginHorizontal: 5,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems:'center'
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        borderStartColor: 'blue',
        paddingHorizontal: 40,
    },
    texto:{
        marginHorizontal:15
    },
    fondoTexto:{
        backgroundColor: '#8ACA5B',
        paddingHorizontal: 100,
        paddingVertical:10,
        margin: 12,
    },
    fondoTextoA:{
        paddingHorizontal: 100,
        paddingVertical:10,
        margin: 12,
        
    },
    imageT:{
        width: 40,
        height: 15,
    },
    IndicaionesT:{
        fontSize: 24,
        fontWeight: 'bold',
        borderStartColor: 'blue',
        paddingHorizontal: 18,
    },
    Indicaiones:{
        fontSize: 12,
        borderStartColor: 'blue',
        paddingHorizontal: 18,
    },
    Titulo2:{
        fontSize: 16,
        fontWeight: 'bold',
        borderStartColor: 'blue',
        paddingHorizontal: 50,
    }
  });