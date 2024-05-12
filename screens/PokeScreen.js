import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import PokemonCard from "../src/components/PokemonCard";

const PokemonScreen = () => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
            .then(response => response.json())
            .then(data => {setPokemon(data.results)})
            .catch(error => console.error(error));
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={pokemon}
                keyExtractor={item => item.name}
                renderItem={({item}) => (     
                    <PokemonCard url={item?.url} />
                )}  
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1, // Make the container take up the whole screen
      alignItems: 'center', // Center elements horizontally
      justifyContent: 'center', // Center elements vertically
      backgroundColor: '#white',
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 20, // Add space between text and image
    },
  });

export default PokemonScreen;