import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import styles from './screen.service'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'react-native-paper'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Services = () => {
  const navigation = useNavigation()
  const [userData, setUserData] = useState(null)
  const [userLogin, setUserLogin] = useState(false)

  useEffect(()=>{
    checkExitingUser()
  },[])

  const checkExitingUser = async () =>{
    const id = await AsyncStorage.getItem('PartnerId')
    const useId = `user${JSON.parse(id)}`

    try{
      const currentUser = await AsyncStorage.getItem(useId)

      if(currentUser !== null){
        const parsedData = JSON.parse(currentUser)
        setUserData(parsedData)
        setUserLogin(true)
      }
    }catch (error){
      console.log("Ошибка получения данных", error)
    }
  };
  return (
    <SafeAreaView>
      {userLogin ===false?(
        <View style={styles.buttonColumn}>
          <View style = {styles.titleWrapper}>
            <View style = {styles.title}>
            <Text style = {styles.subtitle}>{userLogin === true ? `${userData.Surname} ${userData.Name}` : "Выполните вход"}</Text>
            </View>
          </View>
          <Pressable style={styles.button} onPress={()=>navigation.navigate('Login')}>
            <Text style={styles.text}>Вход</Text>
          </Pressable>
        </View>
      ):(
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
