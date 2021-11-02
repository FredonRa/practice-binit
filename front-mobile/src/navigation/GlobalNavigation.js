import React, { useState } from 'react';
import { createNativeStackNavigator  } from "@react-navigation/native-stack";

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';

import { useSelector } from "react-redux"
import { Button, AsyncStorage } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import ProductsNavigation from '../navigation/ProductsNavigation';

import HomeNavigation from './HomeNavigation';
import UserNavigation from './UserNavigation';

const Tab = createBottomTabNavigator();



const GlobalNavigation = () => {
    const Stack = createNativeStackNavigator ();    
	const isLogged = useSelector((store) => store.loginReducer);
	const { isLoggedIn } = isLogged;

    return (  
		<>
			{!isLoggedIn ?
				<Stack.Navigator>
						<Stack.Group>
							<Stack.Screen name="Welcome" component={WelcomeScreen} />
							<Stack.Screen name="Login" component={LoginScreen} />
							<Stack.Screen name="Register" component={RegisterScreen} /> 
						</Stack.Group>
				</Stack.Navigator>
			:
				<Tab.Navigator  screenOptions={{ header: () => null }} mode="transparentModal">	
					<Tab.Group>
						<Tab.Screen 
							name="Home" 
							component={HomeNavigation} 
							options={{
								tabBarIcon: ({ color, size }) => (
								  <Ionicons name="home" color={color} size={size} />
								),
							}}
						/>
						<Tab.Screen 
							name="Products" 
							component={ProductsNavigation} 
							options={{
								tabBarIcon: ({ color, size }) => (
									<Ionicons name="md-cart" color={color} size={size} />
								),
							}}
						/>
						<Tab.Screen 
							name="Profile" 
							component={UserNavigation}
							options={{
								tabBarIcon: ({ color, size }) => (
									<Ionicons name="person-sharp" color={color} size={size} />								
								),
							}}
						/>
					</Tab.Group>
				</Tab.Navigator>
			}
		</>
    );
}
 
export default GlobalNavigation;