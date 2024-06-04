import { StyleSheet, Text, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const logoImage = require('../images/Machine.png')

const MachineCard = ({item}) => {
    const navigation = useNavigation()

    const handleCardPress = () => {
        navigation.navigate("Machine", {
          VINNumber: item.VINNumber,
        })
    }

  return (
    <View>
        <TouchableOpacity onPress={handleCardPress}>
        <View style={styles.container}>
            <View style={styles.contentRow}>
                <Image style={styles.image} source={{ uri: `http://dortechs.ru/${item.image}` }} />
                    <View style={styles.contentColumn}>
                        <View style={styles.title}>
                            <Text style={styles.title}>{item.modelName}</Text>
                        </View>

                    </View>
            </View>
        </View>
    </TouchableOpacity>
    </View>

  )
}

export default MachineCard

const styles = StyleSheet.create({
    container:{
        height:150,
        width:330,
        backgroundColor:"#F4C55C",
        borderRadius:15
    },
    image:{
        height:130,
        width:130,
        borderRadius:15,
        marginLeft:10,
        marginTop:10,
    },
    contentRow:{
        flexDirection:"row"
    },
    contentColumn:{
        flexDirection:"column",
        marginTop:10,
        marginLeft:10,
        width:180,
    },
    title:{
        alignItems:"center",
        fontSize:30,
        fontWeight:"bold"
    },
    text:{
        marginTop:10
    }

})