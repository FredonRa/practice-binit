import * as React from 'react';

import {
    StyleSheet,
    Text, 
    View, 
    TextInput,
    SafeAreaView
} from 'react-native';

import { useSelector, useDispatch } from "react-redux";


interface EditProfileScreenProps {
    
}
 
const EditProfileScreen: FC<EditProfileScreenProps> = () => {
    const user = useSelector((store) => store.loginReducer);
    const { username, email } = user.user;

    return (  
        <SafeAreaView style={styles.container}>

            <View style={styles.containerInfoUser}>
                <View style={styles.info}>
                    <Text style={styles.label}>Username</Text>
                    <Text style={styles.data}>{username}</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.label}>Insert the new username</Text>
                    <TextInput style={styles.data} />
                </View>
                <View style={styles.info}>
                    <Text style={styles.label}>Email</Text>
                    <Text style={styles.data}>{email}</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        paddingTop: 10,
        marginHorizontal: 10
    },
    containerImage: {
        backgroundColor: "#ccc",
        borderRadius: 150,
        height: 300,
        width: 300,
        alignSelf: "center",
        overflow: "hidden"
    },
    imageProfile: {
        width: 300,
        height: 300
    },
    containerInfoUser: {
        width: "100%",
        // height: 300,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
    },
    containerLogout: {
        width: "100%",
        height: 40,
        marginVertical: 30
    },
    logout: {
        width: "100%",
        flex: 1,
        height: "100%",
        alignSelf: "center",
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: "#FF5151",
        borderRadius: 16
    },
    logoutText: {
        textAlign: "center",
        fontWeight: "700",
        fontSize: 18,
        color: "#fff"
    },
    info: {
        marginVertical: 10,
    },
    label: {
        color: "#5A5A5A",
        fontSize: 16
    },
    data: {
        fontSize: 18
    },
    editProfile: {
        // backgroundColor: "red",
        width: "100%",
        alignSelf: "center",
        borderRadius: 16,
    },
    editProfileText: {
        textAlign: "center",
        paddingVertical: 6,
        fontWeight: "700",
        fontSize: 18,
        color: "#FF5151",

    }
});
 
export default EditProfileScreen;