import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { SafeAreaView } from 'react-native-safe-area-context'
import RequestsList from '../lists/RequestsList'
import { useNavigation } from '@react-navigation/native'
import ServiceList from '../lists/ServiceList'

const ServiceAdd = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView>
            <View style={styles.titleWrapper}>
                <View style={styles.contentRow}>
                    <Ionicons name="arrow-back" size={40} onPress={()=>navigation.goBack()}/>
                    <Text style={styles.subtitleStyle}>Выберите услугу</Text>
                </View>
            </View>
        <ScrollView  style={styles.notifications}>
          <ServiceList/>
        </ScrollView>
    </SafeAreaView>
  )
}

export default ServiceAdd

const styles = StyleSheet.create({
    titleStyle:{
      fontWeight: 'bold',
      fontSize:40
    },
    contentRow:{
        flexDirection:"row",
        marginTop: 0,
        marginLeft:10
    },
    titleWrapper:{
        marginHorizontal:10,
    },
    title:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    subtitleStyle:{
        fontWeight: 'bold',
        fontSize:30,
        marginLeft:30
    },
    margin:{
      marginBottom:182
    },
    list:{}
  })