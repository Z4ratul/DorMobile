import { StyleSheet, Text, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import useFetchClient from '../hook/useFetchClient'
import AsyncStorage from '@react-native-async-storage/async-storage'

const logoImage = require('../images/Machine.png')

const ServiceCard = ({item, clientData}) => {
    const navigation = useNavigation()
   
    const handleCardPress = () => {
        navigation.navigate("ReqServieceAdd", {
          id: item.id,
          clientId: clientData
        })
    }

  return (
    <View>
        <TouchableOpacity onPress={handleCardPress}>
            <View style={styles.container}>
                <View style={styles.contentColumn}>
                    <Text style={styles.title}>{item.name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default ServiceCard

const styles = StyleSheet.create({
    container:{
        height:80,
        width:330,
        marginTop:10,
        backgroundColor:"#F4C55C",
        borderRadius:15,
        justifyContent:"center"
    },
    contentRow:{
        flexDirection:"row"
    },
    contentColumn:{
        flexDirection:"column",
        alignContent:"center",
        justifyContent:"center"
    },
    title:{
        fontSize:30,
        fontWeight:"bold",
        textAlign: "center" // Выравнивание текста по центру
    },
    text:{
        marginTop:10
    }
})
