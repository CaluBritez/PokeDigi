import React, { useState } from "react";
import { StyleSheet, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

const PokemonScreen = () => {
    const [pokemonNumber, setPokemonNumber] = useState('');
    const [pokemonImage, setPokemonImage] = useState(null);
    const [error, setError] = useState('');

    const [digimonNumber, setDigimonNumber] = useState('');
    const [digimonImage, setDigimonImage] = useState(null);


    const fetchPokemonImage = () => {
        // Reset previous error
        setError('');

        // Check if the input is empty or not a number
        if (!pokemonNumber || isNaN(pokemonNumber)) {
            setError('Please enter a valid Pokemon/Digimon number');
            return;
        }
        // Check if the input is empty or not a number
        if (!digimonNumber || isNaN(digimonNumber)) {
            setError('Please enter a valid Pokemon/Digimon number');
            return;
        }        

        // Fetch Pokemon data from PokeAPI
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Pokemon not found');
                }
                return response.json();
            })
            .then(data => {
                const pokemonImageUrl = data.sprites.front_default;
                setPokemonImage(pokemonImageUrl);
            })
            .catch(error => {
                setError('Pokemon not found');
                console.error(error);
            });
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.text}>Enter Pokemon Number:</Text>
            <TextInput
                style={styles.input}
                onChangeText={text =>{
                    setDigimonNumber(text);
                    setPokemonNumber(text);}}
                value={pokemonNumber}
                keyboardType="numeric"
            />
            <TouchableOpacity onPress={fetchPokemonImage} style={styles.button}>
                <Text style={styles.buttonText}>Get Pokemon</Text>
            </TouchableOpacity>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
            {pokemonImage && (
                <Image
                    source={{ uri: pokemonImage }}
                    style={styles.image}
                />
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        marginBottom: 10,
    },
    input: {
        height: 40,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    image: {
        width: 250,
        height: 250,
        marginBottom: 15,
        marginTop: 15,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
});

export default PokemonScreen;