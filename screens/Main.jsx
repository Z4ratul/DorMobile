import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import NewsColumn from '../lists/NewsColumn'
import RequestsList from '../lists/RequestsList'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Main = () => {

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
        <RequestsList flag={true}/>
      </ScrollView>
    </View>
  );
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
})
