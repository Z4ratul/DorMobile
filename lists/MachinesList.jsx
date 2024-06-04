import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import MachineCard from './MachineCard';
import useFetchMachines from '../hook/useFetchMachines';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const MachinesList = () => {
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    checkExistingUser();
  }, [userLogin]);

  const checkExistingUser = async () => {
    const id = await AsyncStorage.getItem('PartnerId');
    if (!id) {
      navigation.navigate("Login");
      return;
    }

    const useId = `user${JSON.parse(id)}`;

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

  const { data, isLoading, isError } = useFetchMachines(userLogin ? userData?.PartnerId : 0);

  if (isLoading) {
    return <ActivityIndicator size={12} />;
  }

  if (isError) {
    return <Text>Error: {isError.message}</Text>;
  }

  if (!data) {
    return <Text>No data available</Text>;
  }

  return (
    <View style={styles.position}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.VINNumber}
        renderItem={({ item }) => <MachineCard item={item} />}
        contentContainerStyle={{ paddingVertical: 15 }}
      />
    </View>
  );
};

export default MachinesList;

const styles = StyleSheet.create({
  position: {
    marginTop: 15,
    alignItems: "center",
    paddingHorizontal: 10,
  },
});
