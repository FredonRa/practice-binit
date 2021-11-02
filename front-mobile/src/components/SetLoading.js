import React from 'react';
import { View, ActivityIndicator, StyleSheet, Dimensions } from 'react-native';

const heigthWindow = parseInt(Dimensions.get("window").height.toFixed(0));

const SetLoading = () => {
    return ( 
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: heigthWindow,
        // height: "100%"
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10
    }
  });
 
export default SetLoading;