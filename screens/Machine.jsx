import { StyleSheet, Text, View, ActivityIndicator, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from '../screens/machine.styles';
import useFetchVIN from '../hook/useFetchVIN'
const logoImage = require('../images/Machine.png')
import useFetchMachinetype from '../hook/useFetchMachinetype'
import useFetchManufacturer from '../hook/useFetchManufacturer'

const Machine = () => {
  const navigation = useNavigation()
  const route = useRoute();
  const { VINNumber } = route.params;
  const {data, isLoading, error} = useFetchVIN(VINNumber)
  const {typeData} = useFetchMachinetype(data.MachineTypeId)
  const {manData} = useFetchManufacturer(data.ManufacturerId)
  console.log(typeData.name)
  console.log(data.MachineTypeId)


  return (
    <SafeAreaView>
        {isLoading ? (
          <ActivityIndicator size = {12}/>
        ) : error ? (
          <Text>{error.message}</Text>
        ):
          <View >
            <View style={styles.titleWrapper}>
            <View style={styles.contentRow}>
              <Ionicons name="arrow-back" size={40} onPress={()=>navigation.goBack()}/>
              <Text style={styles.subtitleStyle}>Техника</Text>
            </View>
            </View>
            <View style={styles.contentColumn}>
              <Image style={styles.imageStyle} source={{ uri: `http://192.168.0.102:80/${data.image}` }} />
              <Text style={styles.atitle}>Характеристики</Text>
              <View style={styles.contentRow}>
                <View style={styles.Column2}>
                  <Text style={styles.subTitle}>Производитель: {manData.name}</Text>
                </View>
                <View style={styles.Column2}>
                  <Text style={styles.subTitle}>Тип машины: {typeData.name}</Text>
                </View>
              </View>
              <View style={styles.contentRow}>
                <View style={styles.Column2}>
                  <Text style={styles.subTitle}>Модель: {data.modelName}</Text>
                </View>
                <View style={styles.Column2}>
                  <Text style={styles.subTitle}>Серия: {data.serialNumber}</Text>
                </View>
              </View>
              <View style={styles.contentRow}>
                <View style={styles.Column2}>
                  <Text style={styles.subTitle}>Год производства: {new Date(data.dateOfManufacture).getFullYear()}</Text>
                </View>
                <View style={styles.Column2}>
                  <Text style={styles.subTitle}>VIN-Number: {data.VINNumber}</Text>
                </View>
              </View>
            </View>
          </View>}
    </SafeAreaView>
  )
}

export default Machine
