import * as React from 'react';
import {
    StyleSheet,
    Text, 
    View, 
    Image, 
    TouchableOpacity, 
    TouchableWithoutFeedback,
    SafeAreaView,
    ScrollView 
} from 'react-native';

import SetLoading from '../components/SetLoading';

import { ProductsUrl } from "../constants/Api";

interface HomeScreenProps {
    
}
 
const HomeScreen: FC<HomeScreenProps> = ({navigation}) => {
    const [ items, setItems ] = React.useState([])

    React.useEffect(() => {
        const getItems = async() => {
            await fetch(ProductsUrl)
            .then((res) => res.json())
            .then((json) => setItems(json))
            .catch((err) => console.log(err))
        }
        getItems();
    }, []);

    const renderItems = items.map((item, index) => {
        const { title, price, image } = item;
        let urlImage = {uri: image, width: 100, height: 100};
        return(
            <TouchableWithoutFeedback key={index} onPress={() => navigation.navigate("Product", {item})}>
                <View style={styles.item} >
                    <View style={styles.containerImageItem}>
                        <Image source={urlImage} />
                    </View> 
                    <View style={styles.containerInfoItem}>
                        <Text style={styles.titleItem}>{title}</Text>
                        <Text style={styles.priceItem}>${price.toFixed(2)}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    })

    return (  
        <>
            <Text>Home</Text>  
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        paddingTop: 10,
        // paddingHorizontal: 20,
    },
    containerItems: {
        marginTop: 20,
        flex: 1,
        minHeight: "100%",
        paddingBottom: 50,
        marginBottom: 40,
        paddingHorizontal: 16
    },
    item: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginVertical: 10,
        backgroundColor: "#fff",
        elevation: 7,
        borderRadius: 10
    },
    containerImageItem: {
        width: "40%",
    },
    containerInfoItem: {
        width: "60%",
        justifyContent: "space-between"
    },
    titleItem: {
        fontSize: 16
    },
    priceItem: {
        fontSize: 20,
        color: "green",
        textAlign: "right",
    }
})
 
export default HomeScreen;