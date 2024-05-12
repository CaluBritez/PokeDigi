import { Text, View, Image, StyleSheet } from "react-native";
import { useState, useEffect } from "react";

export default function DigimonCard({ url }) {
    
    const [digimonEspecifico, setdigimonEspecifico] = useState({});
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {setdigimonEspecifico(data)})
            .catch(error => console.error(error));
    }, [url]);
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {digimonEspecifico.name ? `${digimonEspecifico.id} - ${digimonEspecifico.name}` : "Loading..."}
            </Text>
            <Image style={styles.img}
                source={{uri: digimonEspecifico && digimonEspecifico.images && digimonEspecifico.images.length > 0 ? digimonEspecifico.images[0].href : ""}}
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
      color: '#393d42',
      fontFamily: 'Cochin',
      fontWeight: 'bold',
    },
    img: {
        width: 200,
        height: 200
    }
  });