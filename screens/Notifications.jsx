import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import RequestsList from '../lists/RequestsList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const Requests = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    setLoading(true); // Ensure the loading state is set to true when fetching data
    try {
      const id = await AsyncStorage.getItem('PartnerId');
      if (id !== null) {
        const userId = `user${JSON.parse(id)}`;
        const userData = await AsyncStorage.getItem(userId);
        if (userData !== null) {
          setData(JSON.parse(userData));
        }
      }
    } catch (error) {
      console.log('Ошибка получения данных', error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [])
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Загрузка...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <View style={styles.margin}>
        <View style={styles.titleWrapper}>
          <View style={styles.title}>
            <Text style={styles.titleStyle}>Заявки</Text>
          </View>
        </View>
        <ScrollView>
          <RequestsList flag={false} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Requests;

const styles = StyleSheet.create({
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 40,
  },
  titleWrapper: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  margin: {
    marginBottom: 182,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 20,
  },
});
