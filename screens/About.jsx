import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import styles from './about.styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context'

const logoImage = require('../images/Logo.png')

const About = () => {
  return (
    <SafeAreaView>
      <View style = {styles.titleWrapper}>
        <View style = {styles.title}>
          <Text style = {styles.titleStyle}>Дортехнологика</Text>
        </View>
      </View>
      <View>
      <View style={styles.contentColumn}>
        <Image style={styles.imageStyle} source={logoImage}></Image>
      </View>
        <View style={styles.Column}>
          <View style = {styles.titleWrapper}>
            <View style = {styles.title}>
              <Text style = {styles.atitle}>Что мы делаем</Text>
            </View>
          </View>
          <View style={styles.contentRow}>
            <Ionicons style={styles.icon} name="build" size={35}/>
            <View style={styles.Column}>
              <Text style={styles.subTitle}>Подбор технологии и техники для строительных и дорожных работ</Text>
              <Text style={styles.subtext}>Жестче, чем метал. Прочнее железа.</Text>
            </View>
          </View>
          <View style={styles.contentRow}>
            <Ionicons style={styles.icon} name="build" size={35}/>
            <View style={styles.Column}>
              <Text style={styles.subTitle}>Снабжение запасными частями и компонентами</Text>
              <Text style={styles.subtext}>Расходники и ГСМ в наличии и под заказ.</Text>
            </View>
          </View>
          <View style={styles.contentRow}>
            <Ionicons style={styles.icon} name="build" size={35}/>
            <View style={styles.Column}>
              <Text style={styles.subTitle}>Услуги сервиса и ремонта</Text>
              <Text style={styles.subtext}>Любые виды работ по поддержанию работоспособности Вашей машины.</Text>
            </View>
          </View>
          <View>
            <View style = {styles.titleWrapper}>
              <View style = {styles.title}>
                <Text style = {styles.atitle}>Свяжитесь с нами</Text>
                </View>
            </View>
            <View style={styles.contentRow}>
             <Ionicons style={styles.iconbottom} name="home" size={20}/>
              <View style={styles.Column}>
                <Text style={styles.subtext}>129226, Россия, Москва, Докукина 8, стр. 2</Text>
              </View>
            </View>
            <View style={styles.contentRow}>
             <Ionicons style={styles.iconbottom} name="md-phone-portrait" size={20}/>
              <View style={styles.Column}>
                <Text style={styles.subtext}>+7-499-390-28-01</Text>
              </View>
            </View>
            <View style={styles.contentRow}>
             <Ionicons style={styles.iconbottom} name="mail" size={20}/>
              <View style={styles.Column}>
                <Text style={styles.subtext}>info@dortehlog.ru</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default About