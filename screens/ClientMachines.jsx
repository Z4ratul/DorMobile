import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './screen.styles';


const ClientMachines = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView>
        <View style={styles.titleWrapper}>
        <View style={styles.contentRow}>
            <Ionicons name="arrow-back" size={40} onPress={()=>navigation.goBack()}/>
            <Text style={styles.subtitleStyle}>Аренда</Text>
        </View>
      </View>
      <View style={styles.buttonColumn}>
          <Pressable style={styles.button} onPress={() => navigation.navigate("Machine")}>
            <Text style={styles.text}>Машина</Text>
          </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default ClientMachines