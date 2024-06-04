import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context'
import {  TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import styles from './screen.styles';
import { Button } from 'react-native-paper';
import MachinesList from '../lists/MachinesList';


const Machines = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView>
      <View style={styles.titleWrapper}>
        <View style={styles.contentRow}>
            <Ionicons name="arrow-back" size={40} onPress={()=>navigation.goBack()}/>
            <Text style={styles.subtitleStyle}>Техника</Text>
        </View>
      </View>
      <ScrollView style={styles.bottommargin}>
        <MachinesList/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Machines

