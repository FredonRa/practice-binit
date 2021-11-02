import React from 'react';
import { createNativeStackNavigator  } from "@react-navigation/native-stack";
import HomeScreen from '../screens/HomeScreen';

const HomeStack = createNativeStackNavigator()

const HomeNavigation = () => {
    return (  
        <HomeStack.Navigator>
			<HomeStack.Screen name="Home" component={HomeScreen}/>
        </HomeStack.Navigator>
    );
}
 
export default HomeNavigation;