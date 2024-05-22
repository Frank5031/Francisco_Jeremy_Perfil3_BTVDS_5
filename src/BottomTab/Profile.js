import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import dataA from '../data/dataA';
import dataB from '../data/dataB';
import Boton from '../components/Boton';

const Profile = () => {
    const informacionA = dataA;
    const informacionB = dataB;

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.IndicaionesT}>Indicaciones</Text>
            <Text style={styles.Indicaiones}>Crear un arreglo de objetos con la información de sus comidas favoritas y mostrarlo en la pantalla. El arreglo de objetos debe de tener un mínimo de 6 comidas y estos deben de mostrar la información siguiente: Imagen, nombre de la comida, descripción de la comida.</Text>
            <View>
                <View style={styles.fondoTextoA}>
                    <Text style={styles.textoFondo}>Platillos favoritos</Text>
                </View>
                <Text style={styles.IndicaionesT}>Platillos favoritos de Jeremy</Text>
                <View style={styles.flatListContainer}>
                    <FlatList
                        data={informacionA}
                        horizontal={true}
                        renderItem={({ item }) => (
                            <View style={styles.cardContainer}>
                                <Image source={item.src} style={styles.image} />
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.description}>{item.numero}</Text>
                            </View>
                        )}
                        keyExtractor={(item) => item.id}
                    />
                </View>
                <Text style={styles.IndicaionesT}>Platillos favoritos de Francisco</Text>
                <View style={styles.flatListContainer}>
                    <FlatList
                        data={informacionB}
                        horizontal={true}
                        renderItem={({ item }) => (
                            <View style={styles.cardContainer}>
                                <Image source={item.src} style={styles.image} />
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.description}>{item.numero}</Text>
                            </View>
                        )}
                        keyExtractor={(item) => item.id}
                    />
                </View>
                <Text style={styles.title}></Text>
                <Text style={styles.title}></Text>
            </View>
        </ScrollView>
    );
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingTop: 20,
        marginTop: StatusBar.currentHeight || 20,
    },
    flatListContainer: {
        height: 600, // Altura fija para evitar el crecimiento automático
        marginHorizontal: 5,
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
        alignItems: 'center',
        width: 150, // Añadido para limitar el ancho de la tarjeta
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center', // Asegura que el texto esté centrado horizontalmente
        marginBottom: 5, // Añadido para espacio entre título y descripción
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        flexWrap: 'wrap', // Permite que el texto se ajuste a múltiples líneas si es necesario
    },
    texto: {
        marginHorizontal: 15,
    },
    fondoTexto: {
        backgroundColor: 'orange',
        paddingHorizontal: 100,
        paddingVertical: 10,
        margin: 12,
    },
    fondoTextoA: {
        backgroundColor: '#5F4A36',
        paddingHorizontal: 119,
        paddingVertical: 10,
        margin: 12,
    },
    textoFondo: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    imageT: {
        width: 40,
        height: 15,
    },
    IndicaionesT: {
        fontSize: 24,
        fontWeight: 'bold',
        borderStartColor: 'blue',
        paddingHorizontal: 18,
    },
    Indicaiones: {
        fontSize: 12,
        borderStartColor: 'blue',
        paddingHorizontal: 18,
    },
    Titulo2: {
        fontSize: 16,
        fontWeight: 'bold',
        borderStartColor: 'blue',
        paddingHorizontal: 50,
    }
});
