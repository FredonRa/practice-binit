import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
    StyleSheet,
    Text, 
    View, 
    Image, 
    TouchableWithoutFeedback, 
    TouchableOpacity, 
    ImageBackground 
} from 'react-native';

import { createNativeStackNavigator  } from "@react-navigation/native-stack";
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';

interface Props {
    
}
 
const WelcomeScreen : FC<Props> = ({ navigation }) => {
    let image = require("./../../assets/background.jpg");
    let logo = require("./../../assets/logo-red.png");
    const Stack = createNativeStackNavigator ();    

    return (
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover"  style={styles.image}>
          <View style={styles.containerLogo}>
            <Image source={logo} style={styles.logo}/>
            <Text style={styles.logoText}>Sell What You Don't Need</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}><Text style={styles.login}>Next</Text></TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'dodgerblue',
      justifyContent: "center",
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    image: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "auto",
      paddingTop: 50
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    },
    containerLogo: {
      flex: 1,
      alignItems: "center",
      position: "absolute",
      top: 120
    },
    logo: {
      width: 100,
      height: 100
    },
    logoText: {
      fontSize: 16,
      marginTop: 10
    },
    login: {
      backgroundColor: "#A9333A",
      borderRadius: 10,
      paddingTop: 10,
      paddingBottom: 10,
      textAlign: "center",
      color: "#fff",
      fontWeight: "600",
      width: 300,
    },
    register: {
      marginTop: 15,
      marginBottom: 20,
      textAlign: "center",
    }
  });
 
export default WelcomeScreen;