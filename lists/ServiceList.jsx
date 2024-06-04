import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import RequestCard from './RequestCard';
import useFetchReqService from '../hook/useFetchReqService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ServiceCard from './ServiceCard';
import useFetchClient from '../hook/useFetchClient';

const ServiceList = () => {
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);

  // Переместите useEffect выше использования переменных userData и userLogin
  useEffect(() => {
    checkExistingUser();
  }, [clientData]); // Передайте зависимость useEffect, если необходимо

  const checkExistingUser = async () => {
    const storedId = await AsyncStorage.getItem('PartnerId');
    const useId = `user${JSON.parse(storedId)}`;

    try {
      const currentUser = await AsyncStorage.getItem(useId);

      if (currentUser !== null) {
        const parsedData = JSON.parse(currentUser);
        setUserData(parsedData);
        setUserLogin(true);
      } else {
        navigation.navigate("Login");
      }
    } catch (error) {
      console.log("Ошибка получения данных", error);
    }
  };

  const { data: clientData, isLoading: clientLoading, error: clientError } = useFetchClient(userLogin ? userData.id : 0);
  const { data, isLoading, error } = useFetchReqService();

  return (
    <View style={styles.position}>
      {isLoading && clientLoading ? (
        <ActivityIndicator size={12} />
      ) : error && clientError ? (
        <Text>{error.message}</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (<ServiceCard item={item} clientData={clientData} />)}
          contentContainerStyle={{ rowGap: 15 }}
        />
      )}
    </View>
  );
};

export default ServiceList;

const styles = StyleSheet.create({
  position: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
