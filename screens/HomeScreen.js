import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {

    //const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <Text style={styles.text}>Now you are here</Text>

        </View>
    );
};
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
    },
    image: {
      width: 200, // Adjust width as needed
      height: 200, // Adjust height as needed
      marginBottom: 15,
      marginTop: 15, // Add space between image and button
    },
    button: {
      backgroundColor: 'tomato',
      padding: 10,
      borderRadius: 10,
      width: '50%',
      alignSelf: 'center',
    },
    buttonText: {
      fontSize: 15,
      color: 'white',
      textAlign: 'center',
    },
  });
export default HomeScreen;