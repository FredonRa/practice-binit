import React from 'react';
import { createNativeStackNavigator  } from "@react-navigation/native-stack";
import ProfileScreen from '../screens/ProfileScreen';
import LogoutScreen from '../screens/LogoutScreen';
import EditProfileScreen from '../screens/EditProfileScreen';

const UserStack = createNativeStackNavigator()

const UserNavigation = () => {
    return (  
        <UserStack.Navigator>
			<UserStack.Screen name="Profile" component={ProfileScreen}/>
			<UserStack.Screen name="Edit Profile" component={EditProfileScreen}/>
			<UserStack.Screen name="Logout" component={LogoutScreen}/>
        </UserStack.Navigator>
    );
}
 
export default UserNavigation;