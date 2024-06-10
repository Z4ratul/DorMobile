import { StyleSheet, Text, View, Pressable, Alert } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './client.styles'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'react-native'
const clientImage = require('../images/clientlogo.png')
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Client = () => {
  const navigation = useNavigation()
  const [userData, setUserData] = useState(null)
  const [userLogin, setUserLogin] = useState(false)

  useFocusEffect(
    useCallback(() => {
      checkExitingUser();
    }, [])
  );

  const checkExitingUser = async () => {
    try {
      const id = await AsyncStorage.getItem('PartnerId')
      if (id !== null) {
        const useId = `user${JSON.parse(id)}`
        const currentUser = await AsyncStorage.getItem(useId)
        if (currentUser !== null) {
          const parsedData = JSON.parse(currentUser)
          setUserData(parsedData)
          setUserLogin(true)
        } else {
          setUserLogin(false)
        }
      } else {
        setUserLogin(false)
      }
    } catch (error) {
      console.log("Ошибка получения данных", error)
    }
  };

  const userLogout = async () => {
    try {
      const id = await AsyncStorage.getItem('PartnerId')
      if (id !== null) {
        const useId = `user${JSON.parse(id)}`
        await AsyncStorage.multiRemove([useId, 'PartnerId'])
        setUserLogin(false)
        setUserData(null)
        navigation.replace("Bottom Navigation")
      }
    } catch (error) {
      console.log("Ошибка выхода", error)
    }
  }

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
    )
  }

  return (
    <SafeAreaView>
      <View style={styles.Column}>
        <View style={styles.titleWrapper}>
          <View style={styles.title}>
            <Text style={styles.titleStyle}>Клиент</Text>
          </View>
        </View>
        <View style={styles.contentColumn}>
          <Image style={styles.imageStyle} source={clientImage}></Image>
          <Text style={styles.subtitle}>
            {userLogin ? `${userData.surname} ${userData.name}` : "Выполните вход"}
          </Text>
          {!userLogin && (
            <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.text}>Вход</Text>
            </Pressable>
          )}
        </View>
        {userLogin && (
          <View style={styles.columnBack}>
            <View style={styles.contentColumn}>
              <Text style={styles.subtitle}>Контакты менеджера</Text>
            </View>
            <View style={styles.contentRow}>
              <Ionicons style={styles.iconbottom} name="md-phone-portrait" size={40} />
              <View style={styles.Column}>
                <Text style={styles.subtext}>+7-499-390-28-01</Text>
              </View>
            </View>
            <View style={styles.contentRow}>
              <Ionicons style={styles.iconbottom} name="mail" size={40} />
              <View style={styles.Column}>
                <Text style={styles.subtext}>info@dortehlog.ru</Text>
              </View>
            </View>
            <View style={styles.contentColumn}>
              <Pressable style={styles.button} onPress={() => logout()}>
                <Text style={styles.text}>Выход</Text>
              </Pressable>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  )
}

export default Client
