import { StyleSheet, Text, View, ActivityIndicator, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import useFetchVIN from '../hook/useFetchVIN';
const logoImage = require('../images/Machine.png');
import useFetchMachinetype from '../hook/useFetchMachinetype';
import useFetchManufacturer from '../hook/useFetchManufacturer';

const Machine = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { VINNumber } = route.params;
  const { data, isLoading, error } = useFetchVIN(VINNumber);
  const { typeData } = useFetchMachinetype(data.MachineTypeId);
  const { manData } = useFetchManufacturer(data.ManufacturerId);
  console.log(data)
  return (

    <SafeAreaView style={styles.safeArea}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text style={styles.errorText}>{error.message}</Text>
      ) : (
        <View style={styles.container}>
          <View style={styles.header}>
            <Ionicons name="arrow-back" size={40} onPress={() => navigation.goBack()} />
            <Text style={styles.headerTitle}>Техника</Text>
          </View>
          <View style={styles.content}>
            <Image
              style={styles.image}
              source={data.image ? { uri: `http://dortechs.ru/${data.image}` } : logoImage}
            />
            <Text style={styles.sectionTitle}>Характеристики</Text>
            <View style={styles.infoRow}>
              <View style={styles.infoBox}>
                <Text style={styles.infoText}>Производитель: {manData.name}</Text>
              </View>
              <View style={styles.infoBox}>
                <Text style={styles.infoText}>Тип машины: {typeData.name}</Text>
              </View>
            </View>
            <View style={styles.infoRow}>
              <View style={styles.infoBox}>
                <Text style={styles.infoText}>Модель: {data.modelName}</Text>
              </View>
              <View style={styles.infoBox}>
                <Text style={styles.infoText}>Серия: {data.serialNumber}</Text>
              </View>
            </View>
            <View style={styles.infoRow}>
              <View style={styles.infoBox}>
                <Text style={styles.infoText}>Год производства: {new Date(data.dateOfManufacture).getFullYear()}</Text>
              </View>
              <View style={styles.infoBox}>
                <Text style={styles.infoText}>VIN-номер: {data.VINNumber}</Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Machine;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
      fontWeight: 'bold',
      fontSize:30,
      marginLeft:70
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15,
  },
  infoBox: {
    width: '48%',
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});
