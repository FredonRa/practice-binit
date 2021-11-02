import * as React from 'react';
import {
    StyleSheet,
    Text, 
    View, 
    Alert,
    Image, 
    TouchableWithoutFeedback, 
    TouchableOpacity, 
    TextInput,
    ImageBackground,
    SafeAreaView
     
} from 'react-native';

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RegisterUrl } from '../constants/Api';

interface RegisterScreenProps {
}

const register = async(username, email, password, navigation) => {
    let user = {
        username: username,
        email: email,
        password: password,
        role: "USER"
    }

    return await fetch(RegisterUrl, {
        method: 'POST',
        mode: "cors",
        headers: {  // these could be different for your API call
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),    
    })
    .then((res) => {
        return res.json()
    })
    .then((res) => {
        res.ok ?
            (() => {
                console.log("okkk")
                navigation.navigate("Login");
                Alert.alert('Register success', 'Register success');
            })()
        : Alert.alert('Register problem', res.err.message);
    })
    .catch((err) => {
        console.log("error: ", err)
    })
}

 
const RegisterScreen: FC<RegisterScreenProps> = ({navigation}) => {
    let logo = require("./../../assets/logo-red.png");

    const [ username, setUsername ] = React.useState("");
    const [ email, setEmail ] = React.useState("");
    const [ password, setPassword ] = React.useState("");
  
    return (  
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView keyboardShouldPersistTaps="always" contentContainerStyle={styles.keyboardAware}>
                <View style={styles.containerLogo}>
                    <Image source={logo} style={styles.logo} />
                </View>
                <View style={styles.containerInputs}>
                    <TextInput style={styles.input}  placeholder="Username" onChangeText={(text) => setUsername(text)}></TextInput>
                    <TextInput style={styles.input}  placeholder="Email" onChangeText={(text) => setEmail(text)}></TextInput>
                    <TextInput style={styles.input}  placeholder="Password" onChangeText={(text) => setPassword(text)}></TextInput>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => register(username, email, password, navigation)}>
                    <Text style={styles.login}>Register</Text>
                </TouchableOpacity>
                <TouchableWithoutFeedback  onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.register}>Already have an account? Login</Text>
                </TouchableWithoutFeedback>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
}
 
const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignContent: "center",
        justifyContent: "center",
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
      alignSelf: "center",
    },
    register: {
      marginTop: 15,
      marginBottom: 20,
      textAlign: "center",
    },
    containerInputs: {
        height: 200
    },
    input: {
        width: 300,
        alignSelf: "center",
        marginBottom: 10,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#ccc",
        paddingVertical: 5,
        paddingHorizontal: 20,
    },
    keyboardAware: {
        flex: 1,
        justifyContent: "center"
    },
    containerLogo: {
        width: "100%",
        height: 100,
        alignContent: "center",
        justifyContent: "center",
    },
    logo: {
        width: 90,
        height: 90,
        alignSelf: "center",
        marginBottom: 40
    },
    button: {
        
    }
  });

export default RegisterScreen;