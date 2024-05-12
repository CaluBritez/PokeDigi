import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

const HomeScreen = () => {

    //const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <Text style={styles.text}>What is your favorite bug?</Text>

            <Image style={styles.img}
                source={require('../img/costacostaHome.jpg')}
            />

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1, // Make the container take up the whole screen
      alignItems: 'center', // Center elements horizontally
      justifyContent: 'center', // Center elements vertically
      backgroundColor: '#393d42',
    },
    text: {
      fontSize: 30,
      textAlign: 'center',
      marginBottom: 20, // Add space between text and image
      fontFamily: 'Cochin',
      fontWeight: 'bold',
      color: '#9fa3a9'
    },
  });
export default HomeScreen;