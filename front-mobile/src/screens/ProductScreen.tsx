import * as React from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    Image,
    SafeAreaView,
    ScrollView 
} from 'react-native';

 
const ProductScreen = ({  route, navigation }) => {
    const { params } = route;
    const { category, description, id, price, image, rating, title } = params.item;

    let urlImage = { uri: image, width: "100%", height: 350 };
    return (  
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.categoryItem}>{category}</Text>
                <View style={styles.containerImageItem}>
                    <Image style={styles.imageItem} source={urlImage} />
                </View>
                <View style={styles.containerInfoItem}>
                    <Text style={styles.titleItem}>
                        {title}
                    </Text>
                    <Text style={styles.priceItem}>
                        ${price}
                    </Text>
                    <View style={styles.containerDescriptionItem}>
                        <Text style={styles.descriptionTitle}>
                            Description product
                        </Text>
                        <Text style={styles.descriptionItem}>
                            {description}
                        </Text>
                    </View>
                </View>
                <Text>{}</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        height: "100%",
        paddingTop: 10,
        paddingHorizontal: 16,
        // marginHorizontal: 16,
        backgroundColor: "#fff"
    },
    containerImageItem: {
        width: "100%",
        height: 350,
        justifyContent: "center",
        alignContent: "center",
        marginTop: 20
    },
    imageItem: {
        alignSelf: "center",
    },
    containerInfoItem: {
        width: "100%",
        justifyContent: "space-between"
    },
    titleItem: {
        fontSize: 16,
        marginTop: 20,

    },
    priceItem: {
        fontSize: 20,
        color: "green",
        textAlign: "left",
        marginVertical: 8
    },
    categoryItem: {
        textAlign: "left",
        width: "100%",
        textTransform: "capitalize"
    },
    containerDescriptionItem: {
        borderTopColor: "#ccc",
        borderTopWidth: 1,
        paddingVertical: 10
    },
    descriptionTitle: {
        marginBottom: 5,
        fontWeight: "600",
    }
})
 
export default ProductScreen;