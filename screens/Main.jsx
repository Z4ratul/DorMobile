import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native';
import React, { useState, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import NewsColumn from '../lists/NewsColumn';
import RequestsList from '../lists/RequestsList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const Main = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
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
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.loadingText}>Загрузка...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.titleStyle}>Главная</Text>
      </View>
      <View style={styles.news}>
        <NewsColumn />
      </View>
      <View style={styles.subtitleWrapper}>
        <Text style={styles.subtitleStyle}>Текущие заявки</Text>
      </View>
      <ScrollView contentContainerStyle={styles.notificationsContainer}>
        <RequestsList flag={true} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  news: {
    height: 320,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  notificationsContainer: {
    paddingHorizontal: 10,
    paddingBottom: 60, 
  },
  titleWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 34,
    color: '#333',
    textAlign: 'center',
  },
  subtitleWrapper: {
    marginHorizontal: 20,
    marginTop: 0,
    marginBottom: 10,
  },
  subtitleStyle: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#666',
    textAlign: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    marginTop: 10,
    color: '#333',
  },
});
