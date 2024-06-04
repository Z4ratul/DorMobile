import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { ActivityIndicator } from "react-native-paper";

const Button= ({title, onPress, isValid, loader}) =>{
    return(
        <TouchableOpacity onPress={onPress} style={styles.button(isValid===false? "#B1B1B1":"#F4C55C")}>
            {loader ===false ? <Text>{title}</Text> : (<ActivityIndicator/>)}
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button:(color)=> ({
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 25,
        width: 240,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: color,
        marginBottom:25
    }),
})