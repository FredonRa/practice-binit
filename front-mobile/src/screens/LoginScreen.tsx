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
    SafeAreaView
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';



import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"


import { useDispatch, useStore } from 'react-redux';
import { SnackbarComponent } from '../components/Snackbar';
import { Snackbar } from 'react-native-paper'

import { login } from '../redux/actions';

interface LoginScreenProps {
    
}

const LoginScreen: FC<LoginScreenProps> = ({navigation}) => {
    let logo = require("./../../assets/logo-red.png");
    const dispatch = useDispatch()
    const [ email, setEmail ] = React.useState("");
    const [ errorEmail, setErrorEmail ] = React.useState(false);
    const [ password, setPassword ] = React.useState(null);
    const [ errorPassword, setErrorPassword ] = React.useState("");
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const [ snackbarVisible, setSnackbarVisible ] = React.useState(false);
    const [ messageSnackBar, setMessageSnackbar ] = React.useState("");
    const [ showPassword, setShowPassword ] = React.useState(true);
    const [ loginOk, setLoginOk ] = React.useState(true)
    // const [ snackbarColor, setSnackbarColor ] = useState("#FF2442")
    const userData = {};

    const loginTest = () => {
        const emailTest = regex.test(email);
        const passwordNull = password == "" || password == null || password == undefined;
        userData.email = email;
        userData.password = password;

        if (!emailTest && passwordNull ) {
            setStateOfSnackbar("Email and password is empty");
            setErrorEmail(true);
            setErrorPassword(true);
            setLoginOk(false);
            return
        } else {
            setErrorEmail(false);
            setErrorPassword(false);
        }
        
        if (!emailTest) {
            setStateOfSnackbar("Incorrect email, please retry");
            setErrorEmail(true)
            setLoginOk(false);
            return
        } else {
            setErrorEmail(false)
        }
        
        if (passwordNull) {
            setStateOfSnackbar("Password is empty, please retry");
            setErrorPassword(true);
            setLoginOk(false);
            return
        } else {
            setErrorPassword(false);
        }

        if (!passwordNull && emailTest) {
            return dispatch(login(userData))
        }
    }

    const setStateOfSnackbar = (message) => {
        setMessageSnackbar(message);
        setSnackbarVisible(true);
    }

    return (  
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView keyboardShouldPersistTaps="always" contentContainerStyle={styles.keyboardAware}>
                <View style={styles.containerLogo}>
                    <Image source={logo} style={styles.logo} />
                </View>
                <View style={styles.containerInputs}>
                    <View>
                        <TextInput 
                            style={[styles.input, {borderColor: errorEmail ? "#FF2442" : "#ccc"}]}
                            placeholder="Email" errorPassword
                            onChangeText={(text) => setEmail(text)}
                        />
                    </View>
                    <View>
                        <TextInput 
                            style={[styles.input, {borderColor: errorPassword ? "#FF2442" : "#ccc"}]} 
                            placeholder="Password" 
                            secureTextEntry={showPassword} 
                            onChangeText={(text) => setPassword(text)}
                        />
                        <TouchableOpacity style={styles.showPassword} onPress={() => { setShowPassword(!showPassword) }}>
                            <Ionicons name={showPassword ? "eye" : "eye-off"} size={24} color="grey" />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={() =>  loginTest()}>
                    <Text style={styles.login}>Login</Text>
                </TouchableOpacity>
                <TouchableWithoutFeedback  onPress={() => navigation.navigate("Register")}>
                    <Text style={styles.register}>Don't have an account yet? Sign Up!</Text>
                </TouchableWithoutFeedback>
            </KeyboardAwareScrollView>

            <Snackbar 
                visible={snackbarVisible}
                style={{
                    backgroundColor: "#FF2442",
                }}
                onDismiss={() => {
                    setSnackbarVisible(false)     
                    setMessageSnackbar("");
                }}
                action={{
                    label: 'OK',
                    onPress: () => {
                        setSnackbarVisible(false)     
                        setMessageSnackbar("");
                    },
                  }}
            >
                {messageSnackBar}
            </Snackbar>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignContent: "center",
        justifyContent: "center",
        marginHorizontal: 10
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
        height: 140
    },
    input: {
        width: 300,
        alignSelf: "center",
        marginBottom: 10,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 10,
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
    showPassword: {
        position: "absolute",
        right: 50,
        top: 18
    }
  });
 
 
export default LoginScreen;