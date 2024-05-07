import React from "react";
import { StyleSheet, Image, ScrollView, Text } from 'react-native';

const PokemonScreen = () => {

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.text}>Now you are in PokemonScreen</Text>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1, // Make the container take up the whole screen
      alignItems: 'center', // Center elements horizontally
      justifyContent: 'center', // Center elements vertically
    },
    image: {
      width: 250, // Adjust width as needed
      height: 250, // Adjust height as needed
      marginBottom: 15,
      marginTop: 15, // Add space between image and button
    },
    
  });

export default PokemonScreen;