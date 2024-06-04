import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import RequestsList from '../lists/RequestsList'

const Requests = () => {
  return (
    <View>
      <View style={styles.margin}>
        <View style = {styles.titleWrapper}>
          <View style = {styles.title}>
            <Text style = {styles.titleStyle}>Заявки</Text>
          </View>
          </View>
        <ScrollView  >
          <RequestsList flag={false}/>
        </ScrollView>
      </View>
    </View>
  )
}

export default Requests

const styles = StyleSheet.create({
  titleStyle:{
    fontWeight: 'bold',
    fontSize:40
  },
  titleWrapper:{
      marginHorizontal:10,
      marginTop:10
  },
  title:{
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center"
  },
  margin:{
    marginBottom:182
  }
})