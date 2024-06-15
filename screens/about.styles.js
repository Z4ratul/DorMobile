import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

const logoImage = require('../images/Logo.png');

const About = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleWrapper}>
        <View style={styles.title}>
          <Text style={styles.titleStyle}>Дортехнологика</Text>
        </View>
      </View>
      <View style={styles.contentColumn}>
        <Image style={styles.imageStyle} source={logoImage}></Image>
      </View>
      <View style={styles.contentSection}>
        <View style={styles.titleWrapper}>
          <View style={styles.title}>
            <Text style={styles.atitle}>Что мы делаем</Text>
          </View>
        </View>
        <View style={styles.contentRow}>
          <Ionicons style={styles.icon} name="build" size={35} color="#333" />
          <View style={styles.Column}>
            <Text style={styles.subTitle}>Подбор технологии и техники для строительных и дорожных работ</Text>
            <Text style={styles.subtext}>Жестче, чем метал. Прочнее железа.</Text>
          </View>
        </View>
        <View style={styles.contentRow}>
          <Ionicons style={styles.icon} name="build" size={35} color="#333" />
          <View style={styles.Column}>
            <Text style={styles.subTitle}>Снабжение запасными частями и компонентами</Text>
            <Text style={styles.subtext}>Расходники и ГСМ в наличии и под заказ.</Text>
          </View>
        </View>
        <View style={styles.contentRow}>
          <Ionicons style={styles.icon} name="build" size={35} color="#333" />
          <View style={styles.Column}>
            <Text style={styles.subTitle}>Услуги сервиса и ремонта</Text>
            <Text style={styles.subtext}>Любые виды работ по поддержанию работоспособности Вашей машины.</Text>
          </View>
        </View>
        <View style={styles.titleWrapper}>
          <View style={styles.title}>
            <Text style={styles.atitle}>Свяжитесь с нами</Text>
          </View>
        </View>
        <View style={styles.contentRow}>
          <Ionicons style={styles.iconbottom} name="home" size={20} color="#333" />
          <View style={styles.Column}>
            <Text style={styles.subtext}>129226, Россия, Москва, Докукина 8, стр. 2</Text>
          </View>
        </View>
        <View style={styles.contentRow}>
          <Ionicons style={styles.iconbottom} name="phone-portrait" size={20} color="#333" />
          <View style={styles.Column}>
            <Text style={styles.subtext}>+7-499-390-28-01</Text>
          </View>
        </View>
        <View style={styles.contentRow}>
          <Ionicons style={styles.iconbottom} name="mail" size={20} color="#333" />
          <View style={styles.Column}>
            <Text style={styles.subtext}>info@dortehlog.ru</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  titleWrapper: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#333',
  },
  contentColumn: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 20,
  },
  imageStyle: {
    width: 200,
    height: 190,
    marginTop: 10,
  },
  contentSection: {
    paddingHorizontal: 20,
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  Column: {
    marginLeft: 10,
    flexDirection: 'column',
  },
  atitle: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#333',
  },
  icon: {
    marginRight: 10,
  },
  iconbottom: {
    marginRight: 10,
  },
  subTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#F4C55C',
    marginBottom: 5,
  },
  subtext: {
    fontSize: 15,
    color: '#555',
  },
});
