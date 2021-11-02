import React from 'react';
import { createNativeStackNavigator  } from "@react-navigation/native-stack";

import ListProductsScreen from "../screens/ListProductsScreen";
import ProductScreen from '../screens/ProductScreen';

const ProductsStack = createNativeStackNavigator()

const ProductsNavigation = () => {
    return (  
        <ProductsStack.Navigator>
			<ProductsStack.Screen name="Products" component={ListProductsScreen}/>
			<ProductsStack.Screen name="Product" component={ProductScreen}/>
        </ProductsStack.Navigator>
    );
}
 
export default ProductsNavigation;