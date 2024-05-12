import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import DigimonCard from "../src/components/DigimonCard";

const DigiScreen = () => {

    const functionFetch = (numPage) => {
        return fetch(`https://digi-api.com/api/v1/digimon?page=${numPage}`)
            .then(response => response.json())
            .then(data => {
                //console.log(data);
                return data.content;
            })
            .catch(error => console.error(error));
    }
    const [digimon, setDigimon] = useState([]);

    useEffect(() => {
        Promise.all([
            functionFetch(0),
            functionFetch(1),
            functionFetch(2),
            functionFetch(3)
        ]).then(results => {
            // Concatenar todos los resultados en un solo array
            const combinedResults = results.reduce((acc, curr) => acc.concat(curr), []);
            setDigimon(combinedResults);
        });
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={digimon}
                keyExtractor={item => item.name} // Assuming a unique 'name' property
                renderItem={({ item }) => (
                    <DigimonCard url={item?.href} />
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
      backgroundColor: 'white',
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 20, // Add space between text and image
    },
});

export default DigiScreen;