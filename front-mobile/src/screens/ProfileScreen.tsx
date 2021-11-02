import * as React from 'react';
import {
    StyleSheet,
    Text, 
    View, 
    Image, 
    TouchableWithoutFeedback,
    SafeAreaView,
} from 'react-native';

import { useSelector, useDispatch } from "react-redux";

import { logout } from "../redux/actions";

interface ProfileScreenProps {
    
}
 
const ProfileScreen: FC<ProfileScreenProps> = ({ navigation }) => {
    const user = useSelector((store) => store.loginReducer);
    const { username, email } = user.user;
    const avatar = require("./../../assets/avatar_base_M.png");

    const dispath = useDispatch();
    
    const logoutUser = () => {
        return dispath(logout(user))
    }

    return (  
        <SafeAreaView style={styles.container}>
            <View style={styles.containerImage}>
                <Image style={styles.imageProfile} source={avatar} />
            </View>
            <View style={styles.containerInfoUser}>
                <View style={styles.info}>
                    <Text style={styles.label}>Username</Text>
                    <Text style={styles.data}>{username}</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.label}>Email</Text>
                    <Text style={styles.data}>{email}</Text>
                </View>
                <View style={styles.editProfile} >
                    <TouchableWithoutFeedback onPress={() => navigation.navigate("Edit Profile")}>
                        <View>
                            <Text style={styles.editProfileText}>
                                Edit profile
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
            <View style={styles.containerLogout}>
                <TouchableWithoutFeedback  onPress={() => logoutUser()}>
                    <View style={styles.logout}>
                        <Text style={styles.logoutText}>Logout</Text>
                    </View>
                </TouchableWithoutFeedback>    
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
        borderRadius: 16,
        borderColor: "#ccc",
        borderWidth: 2,
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
 
export default ProfileScreen;