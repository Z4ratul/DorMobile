import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState, useCallback } from 'react'
import styles from './screen.service'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Services = () => {
  const navigation = useNavigation()
  const [userData, setUserData] = useState(null)
  const [userLogin, setUserLogin] = useState(false)
  const [loading, setLoading] = useState(true)

  useFocusEffect(
    useCallback(() => {
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
        } finally {
          setLoading(false)
        }
      }

      checkExitingUser()
    }, [])
  )

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Загрузка...</Text>
      </View>
    )
  }

  return (
    <SafeAreaView>
      {userLogin === false ? (
        <View style={styles.buttonColumn}>
          <View style={styles.titleWrapper}>
            <View style={styles.title}>
              <Text style={styles.subtitle}>{userLogin === true ? `${userData.surname} ${userData.name}` : "Выполните вход"}</Text>
            </View>
          </View>
          <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.text}>Вход</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.buttonColumn}>
          <Pressable style={styles.button} onPress={() => navigation.navigate("Machines")}>
            <Text style={styles.text}>Ваша Техника</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => navigation.navigate("ServiceAdd")}>
            <Text style={styles.text}>Заказать услугу</Text>
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  )
}

export default Services
