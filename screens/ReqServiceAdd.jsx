import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Formik } from 'formik'; 
import * as yup from 'yup'; 
import useFetchServiceId from '../hook/useFetchServiceId';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useFetchMachines from '../hook/useFetchMachines';
import Button from '../components/Button';
import useFetchClient from '../hook/useFetchClient';
import axios from 'axios';

const ReqServieceAdd = () => {
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const { id, clientId } = route.params;
  const [isMachineSelected, setIsMachineSelected] = useState(false);
  const [loader,setLoader] = useState(false)

  const reqAdd = async (values) => {
    try {
        setLoader(true); 
        const endpoint = "http://192.168.0.102:80/api/request/new";
        const data = {
            description: values.Description,
            PartnerId: userData.id, // Замените на правильное значение
            MachineVINNumber: values.MachineVINNumber,
            ServiceListId: values.ServicelistId,
            closeDate: null // Значение closeDate будет установлено на сервере
        };

        const response = await axios.post(endpoint, data);
        if (response.status === 200) {
            setLoader(false);
            navigation.replace("Bottom Navigation");
        } else {
            Alert.alert(
                "Ошибка",
                "Произошла ошибка при обработке запроса. Попробуйте позже",
                [{ text: "Ок", onPress: () => {} }]
            );
        }
    } catch (error) {
        console.error('Ошибка при отправке данных:', error);
        Alert.alert(
            "Ошибка",
            "Произошла ошибка при отправке запроса. Попробуйте позже",
            [{ text: "Ок", onPress: () => {} }]
        );
    } finally {
        setLoader(false);
    }
};


  useEffect(() => {
    checkExistingUser();
  }, [userLogin]);


  const checkExistingUser = async () => {
    const storedId = await AsyncStorage.getItem('id');
    const useId = `user${JSON.parse(storedId)}`;

    try {
      const currentUser = await AsyncStorage.getItem(useId);

      if (currentUser !== null) {
        const parsedData = JSON.parse(currentUser);
        setUserData(parsedData);
        setUserLogin(true);
      } else {
        navigation.navigate("Login");
      }
    } catch (error) {
      console.log("Ошибка получения данных", error);
    }
  };

  const { data: machinesData, isLoading: machinesLoading, error: machinesError } = useFetchMachines(userLogin ? userData.id : 0);
  const { data: serviceData, isLoading: serviceLoading, error: serviceError } = useFetchServiceId(id);
  return (
    <SafeAreaView style={styles.container}>
      <Formik
       initialValues={{ ServicelistId: id, MachineVINNumber: null, Description: '', ClientId: clientId}}
       onSubmit={values => {
         reqAdd(values);
       }}
        validationSchema={yup.object().shape({
          Description: yup.string().required('Введите описание заявки'),
        })}
      >
        {({ values, handleChange, handleSubmit, isValid, isSubmitting, errors }) => (
          <View style={styles.container}>
            {(machinesLoading || serviceLoading) ? (
              <ActivityIndicator size="large" color="#0000ff" />
            ) : (machinesError || serviceError) ? (
              <Text>{machinesError ? machinesError.message : serviceError.message}</Text>
            ) : (
              <View style={styles.container}>
                <View style={styles.header}>
                  <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconarrow}>
                    <Ionicons name="arrow-back" size={40} />
                  </TouchableOpacity>
                  <Text style={styles.subtitleStyle1}>Услуга</Text>
                </View>
                <View style={styles.content}>
                  <View style={styles.inputContainer}>
                    <Text style={styles.subTitle}>Выбранная вами услуга:</Text>
                    <Text style={styles.subTitle1}>{serviceData && serviceData.name}</Text>
                  </View>
                  <View style={styles.inputContainer}>
                    <Text style={styles.subTitle}>Выберите технику:</Text>
                    <ScrollView style={{ maxHeight: 300 }}>
                      {machinesData && machinesData.length > 0 ? (
                        machinesData.map((item, index) => (
                          <TouchableOpacity
                            key={index}
                            onPress={() => {
                              handleChange('MachineVINNumber')(item.VINNumber);
                              setIsMachineSelected(true);
                            }}
                            style={{
                              paddingVertical: 10,
                              paddingHorizontal: 20,
                              backgroundColor: values.MachineVINNumber === item.VINNumber ? '#F4C55C' : 'transparent',
                            }}>
                            <Text style={{ color: values.MachineVINNumber === item.VINNumber ? 'white' : 'black', fontSize: 18 }}>
                              {item.VINNumber} {item.ModelName}
                            </Text>
                          </TouchableOpacity>
                        ))
                      ) : (
                        <Text>Нет доступной техники</Text>
                      )}
                    </ScrollView>
                  </View>
                  <View style={styles.inputContainer}>
                    <Text style={styles.subTitle}>Описание заявки:</Text>
                    <TextInput
                      style={[styles.input]}
                      multiline
                      placeholder="Введите описание заявки"
                      value={values.Description}
                      onChangeText={handleChange('Description')}
                    />
                    {errors.Description && (
                      <Text style={{ color: 'red' }}>{errors.Description}</Text>
                    )}
                  </View>
                  <Button
                    title="Отправить"
                    onPress={handleSubmit}
                    isValid={isMachineSelected && isValid}
                    loader={loader}
                  />
                </View>
              </View>
            )}
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default ReqServieceAdd;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  iconarrow: {
    marginRight: 20,
  },
  subtitleStyle: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  subtitleStyle1: {
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft:80
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  subTitle: {
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 5,
  },
  subTitle1: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    minHeight: 100,
    textAlignVertical: 'top',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    width: '100%',
    borderRadius: 5,
    backgroundColor: '#F4C55C',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
