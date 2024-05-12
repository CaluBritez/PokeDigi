import { Text, View, Image, StyleSheet } from "react-native";
import { useState, useEffect } from "react";

export default function PokemonCard({ url }) {
    
    const [pokemonEspecifico, setPokemonEspecifico] = useState({});
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {setPokemonEspecifico(data)})
            .catch(error => console.error(error));
    }, [url]);
    const capitalizeFirstLetter = (name) => {
        // Capitalize the first letter and return the entire string
        return name.charAt(0).toUpperCase() + name.slice(1);
      };
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {pokemonEspecifico.name ? `${pokemonEspecifico.id} - ${capitalizeFirstLetter(pokemonEspecifico.name)}` : "Loading..."}
            </Text>
            <Image style={styles.img}
                source={{ uri: pokemonEspecifico.sprites?.other?.["official-artwork"]?.front_default }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1, // Make the container take up the whole screen
      alignItems: 'center', // Center elements horizontally
      justifyContent: 'center', // Center elements vertically
    },
    text: {
      fontSize: 30,
      textAlign: 'center',
      marginBottom: 20, // Add space between text and image
      fontFamily: 'Cochin',
      fontWeight: 'bold',
      color: '#393d42'
    },
    img: {
        width: 200,
        height: 200
    }
  });