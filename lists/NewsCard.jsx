import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const logoImage = require('../images/Logo.png')

class NewsCard extends Component {
    render() {
      const { title, description } = this.props;
      
      return (
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.container}>
            <View style={styles.contentRow}>
              <Image style={styles.image} source={logoImage} />
              <View style={styles.contentColumn}>
                <View style={styles.title}>
                  <Text>{title}</Text>
                </View>
                <Text style={styles.text}>{description}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    }
  }

export default NewsCard

const styles = StyleSheet.create({
    container:{
        height:90,
        width:380,
        backgroundColor:"#B1B1B1",
        borderRadius:15
    },
    image:{
        height:70,
        width:70,
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
        alignItems:"center"
    },
    text:{
        marginTop:10
    }
})