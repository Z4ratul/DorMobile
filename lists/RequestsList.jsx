import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import RequestCard from './RequestCard';
import useFetchRequests from '../hook/useFetchRequests';
import useFetchActiveReq from '../hook/useFetchActiveReq';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const RequestsList = ({ flag }) => {
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      const checkExistingUser = async () => {
        try {
          const id = await AsyncStorage.getItem('PartnerId');
          if (id !== null) {
            const useId = `user${JSON.parse(id)}`;
            const currentUser = await AsyncStorage.getItem(useId);
            if (currentUser !== null) {
              const parsedData = JSON.parse(currentUser);
              setUserData(parsedData);
              setUserLogin(true);
            } else {
              setUserLogin(false);
            }
          } else {
            setUserLogin(false);
          }
        } catch (error) {
          console.log("Ошибка получения данных", error);
        } finally {
          setLoading(false);
        }
      };

      checkExistingUser();
    }, [])
  );

  const { data, isLoading, error } = flag ? useFetchActiveReq(userLogin ? userData.PartnerId : 0) : useFetchRequests(userLogin ? userData.PartnerId : 0);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : error ? (
        <Text>{error.message}</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <RequestCard
              item={{
                ...item,
                description: item.description.length > 30 ? `${item.description.slice(0, 30)}...` : item.description
              }}
            />
          )}
          contentContainerStyle={styles.listContent}
        />
      )}
    </View>
  );
};

export default RequestsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10, // Добавил горизонтальные отступы
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContent: {
    paddingBottom: 15,
  },
});
