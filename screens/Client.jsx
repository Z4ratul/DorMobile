import { StyleSheet, Text, View, Pressable, Alert } from 'react-native';
import React, { useState, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Client = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);

  useFocusEffect(
    useCallback(() => {
      checkExitingUser();
    }, [])
  );

  const checkExitingUser = async () => {
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
    }
  };

  const userLogout = async () => {
    try {
      const id = await AsyncStorage.getItem('PartnerId');
      if (id !== null) {
        const useId = `user${JSON.parse(id)}`;
        await AsyncStorage.multiRemove([useId, 'PartnerId']);
        setUserLogin(false);
        setUserData(null);
        navigation.replace("Bottom Navigation");
      }
    } catch (error) {
      console.log("Ошибка выхода", error);
    }
  };

  const logout = () => {
    Alert.alert(
      "Выход",
      "Вы уверены что хотите выйти?",
      [
        {
          text: "Выход", onPress: () => userLogout()
        },
        {
          text: "Отмена", onPress: () => console.log("Отмена")
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.column}>
        <View style={styles.titleWrapper}>
          <Text style={styles.titleStyle}>Клиент</Text>
        </View>
        <View style={styles.contentColumn}>
          <Ionicons name="person-circle" size={150} color="#333" style={styles.iconStyle} />
          <Text style={styles.subtitle}>
            {userLogin ? `${userData.surname} ${userData.name}` : "Выполните вход"}
          </Text>
          {!userLogin && (
            <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttonText}>Вход</Text>
            </Pressable>
          )}
        </View>
        {userLogin && (
          <View style={styles.columnBack}>
            <View style={styles.contentColumn}>
              <Text style={styles.subtitle}>Контакты менеджера</Text>
            </View>
            <View style={styles.contentRow}>
              <Ionicons style={styles.iconBottom} name="call" size={30} color="#333" />
              <Text style={styles.subtext}>+7-499-390-28-01</Text>
            </View>
            <View style={styles.contentRow}>
              <Ionicons style={styles.iconBottom} name="mail" size={30} color="#333" />
              <Text style={styles.subtext}>info@dortehlog.ru</Text>
            </View>
            <View style={styles.contentColumn}>
              <Pressable style={styles.button} onPress={() => logout()}>
                <Text style={styles.buttonText}>Выход</Text>
              </Pressable>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Client;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  column: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  titleWrapper: {
    marginBottom: 20,
  },
  titleStyle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  contentColumn: {
    alignItems: 'center',
    marginBottom: 20,
  },
  iconStyle: {
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#555',
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#F4C55C',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  columnBack: {
    width: '100%',
    padding: 20,
    backgroundColor: '#e9ecef',
    borderRadius: 8,
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconBottom: {
    marginRight: 10,
  },
  subtext: {
    fontSize: 18,
    color: '#333',
  },
});
