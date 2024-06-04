import { StyleSheet, Text, View, Pressable, SafeAreaView, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Ionicons from '@expo/vector-icons/Ionicons'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Button from '../components/Button'
import styles from './login.style'

const validationSchema = Yup.object().shape({
  login: Yup.string()
    .min(1, 'Поле не должно быть пустым')
    .required('Поле не должно быть пустым'),
  password: Yup.string()
    .min(1, 'Поле не должно быть пустым')
    .required('Поле не должно быть пустым')
});

const LoginScreen = () => {
  const navigation = useNavigation()
  const [loader, setLoader] = useState(false)
  const [obsecureText, setObsecureText] = useState(false)

  const inValidForm = () => {
    Alert.alert(
      "Ошибка",
      "Пожалуйста убедитесь что заполнили все необходимые поля",
      [
        {
          text: "Ок", onPress: () => {}
        },
      ]
    )
  }

  // Внутри функции login в странице авторизации
const login = async (values) => {
  setLoader(true)
  try {
    const endpoint = "http://dortechs.ru/api/client/loginMobile"
    const response = await axios.post(endpoint, values)

    if (response.status === 200) {
      const responseData = response.data
      await AsyncStorage.setItem(`user${responseData.PartnerId}`, JSON.stringify(responseData))
      await AsyncStorage.setItem('PartnerId', JSON.stringify(responseData.PartnerId))
      
      console.log("Logged in successfully. Navigating to client page..."); // Добавим эту строку
      navigation.navigate("Клиент")

      const newUser = await AsyncStorage.getItem(`user${responseData.PartnerId}`)
      console.log(newUser)
    } else {
      Alert.alert(
        "Ошибка",
        "Пожалуйста убедитесь в корректности данных",
        [
          {
            text: "Ок", onPress: () => {}
          },
        ]
      )
    }
  } catch (error) {
    console.error('Error during login:', error)
    Alert.alert(
      "Ошибка",
      `Произошла ошибка при подключении к серверу: ${error.message}`,
      [
        {
          text: "Ок", onPress: () => {}
        },
      ]
    )
  } finally {
    setLoader(false)
  }
}


  return (
    <SafeAreaView>
      <View style={styles.titleWrapper}>
        <View style={styles.contentRow}>
          <Ionicons name="arrow-back" size={40} onPress={() => navigation.goBack()} />
          <Text style={styles.subtitleStyle}>Вход</Text>
        </View>
      </View>
      <Formik
        initialValues={{ login: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={values => login(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, touched, values, errors, isValid, setFieldTouched }) => (
          <View style={styles.columnBack}>
            <View style={styles.contentColumn}>
              <Text style={styles.subtitle}>Введите данные</Text>
            </View>
            <View style={styles.contentRow}>
              <Ionicons style={styles.iconbottom} name="person-circle" size={30} />
              <View style={styles.Column}>
                <TextInput
                  style={styles.textInput}
                  placeholder='Введите Логин'
                  onFocus={() => { setFieldTouched('login') }}
                  onBlur={() => { setFieldTouched('login', '') }}
                  value={values.login}
                  onChangeText={handleChange('login')}
                  autoCapitalize='none'
                  autoCorrect={false}
                />
              </View>
            </View>
            {errors.login && (
              <Text style={styles.error}>{errors.login}</Text>
            )}
            <View style={styles.contentRow}>
              <Pressable onPress={() => setObsecureText(!obsecureText)}>
                <Ionicons size={30} style={styles.iconbottom} name={obsecureText ? "eye" : "eye-off"} />
              </Pressable>
              <View style={styles.Column}>
                <View>
                  <TextInput
                    secureTextEntry={!obsecureText}
                    style={styles.textInput}
                    placeholder='Введите Пароль'
                    onFocus={() => { setFieldTouched('password') }}
                    onBlur={() => { setFieldTouched('password', '') }}
                    value={values.password}
                    onChangeText={handleChange('password')}
                    autoCapitalize='none'
                    autoCorrect={false}
                  />
                </View>
              </View>
            </View>
            {errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
            <View style={styles.contentColumn}>
              <Button
                loader={loader}
                title={"Вход"}
                onPress={isValid ? handleSubmit : inValidForm}
                isValid={isValid}
              />
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  )
}

export default LoginScreen
