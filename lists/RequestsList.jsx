import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator} from 'react-native';
import RequestCard from './RequestCard';
import useFetchRequests from '../hook/useFetchRequests';
import useFetchActiveReq from '../hook/useFetchActiveReq';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RequestsList = ({ flag }) => {
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);

  useEffect(() => {
    checkExistingUser();
  }, [userLogin]); // Передаем userLogin в массив зависимостей

  const checkExistingUser = async () => {
    const id = await AsyncStorage.getItem('PartnerId');
    const useId = `user${JSON.parse(id)}`;

    try {
      const currentUser = await AsyncStorage.getItem(useId);

      if (currentUser !== null) {
        const parsedData = JSON.parse(currentUser);
        setUserData(parsedData);
        setUserLogin(true);
      }
    } catch (error) {
      console.log("Ошибка получения данных", error);
    }
  };

  const { data, isLoading, error } = flag ? useFetchActiveReq(userLogin ? userData.id : 0) : useFetchRequests(userLogin ? userData.id : 0);

  return (
    <View style={styles.position}>
      {isLoading ? (
        <ActivityIndicator size={12} />
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
                // Применяем ограничение на количество символов для описания прямо здесь
                description: item.description.length > 10 ? `${item.description.slice(0, 30)}...` : item.description
              }}
            />
          )}
          contentContainerStyle={{ rowGap: 15 }}
        />
      )}
    </View>
  );
};

export default RequestsList;

const styles = StyleSheet.create({
  position: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
