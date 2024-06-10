import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import NewsColumn from '../lists/NewsColumn'
import RequestsList from '../lists/RequestsList'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'

const Main = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        try {
          const id = await AsyncStorage.getItem('PartnerId')
          if (id !== null) {
            const userId = `user${JSON.parse(id)}`
            const userData = await AsyncStorage.getItem(userId)
            if (userData !== null) {
              setData(JSON.parse(userData))
            }
          }
        } catch (error) {
          console.log('Ошибка получения данных', error)
        } finally {
          setLoading(false)
        }
      }
      
      fetchData()
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
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <View style={styles.title}>
          <Text style={styles.titleStyle}>Главная</Text>
        </View>
      </View>
      <View style={styles.news}>
        <NewsColumn />
      </View>
      <View style={styles.titleWrapper}>
        <View style={styles.title}>
          <Text style={styles.subtitleStyle}>Текущие заявки</Text>
        </View>
      </View>
      <ScrollView style={styles.notifications}>
        <RequestsList flag={true} />
      </ScrollView>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
  news: {
    height: 350
  },
  notifications: {
    height: 279,
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 40
  },
  titleWrapper: {
    marginHorizontal: 10,
    marginTop: 10
  },
  title: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  subtitleStyle: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingText: {
    fontSize: 20
  }
})
