import { StyleSheet, Text, View, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import MachineCard from './MachineCard';
import useFetchMachines from '../hook/useFetchMachines';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'; // Add this import

const MachinesList = () => {
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);
  const navigation = useNavigation(); // Add this line

  useEffect(() => {
    checkExistingUser();
  }, [userLogin]);

  const checkExistingUser = async () => {
    const id = await AsyncStorage.getItem('id');
    if (!id) {
      navigation.navigate("Login"); // Ensure navigation is used here
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

  const { data, isLoading, isError, refetch } = useFetchMachines(userLogin ? userData?.PartnerId : 0);
  console.log("Fetched data:", data);
  console.log("PartnerId:", userData?.PartnerId);

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
        contentContainerStyle={{ rowGap: 15 }}
      />
    </View>
  );
};

export default MachinesList;

const styles = StyleSheet.create({
  position: {
    marginTop: 15,
    flexDirection: "column",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
  },
});
