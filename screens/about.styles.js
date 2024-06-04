import { StyleSheet } from "react-native";

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
    contentColumn:{
        flexDirection:"column",
        alignItems:"center"
    },
    imageStyle:{
        width:200,
        height:190,
        marginTop:10
    },
    contentRow:{
        flexDirection:"row",
        marginTop: 5,
        marginLeft:20
    },
    Column:{
        marginTop:10,
        flexDirection:"column",
    },
    atitle:{
        fontWeight: 'bold',
        fontSize:30
    },
    icon:{
        marginTop:20,
        flexDirection:"column",
    },
    iconbottom:{
        marginTop:5,
        flexDirection:"column",
    },
    subTitle:{
        fontWeight: 'bold',
        fontSize:20,
        marginLeft: 5,
        width: 305,
        color:"#F4C55C"
    },
    subtext:{
        fontSize:13,
        marginLeft: 10,
        width: 305,
    },
    subtitleStyle:{
        fontWeight: 'bold',
        fontSize:30,
        marginLeft:80
    },
})

export default styles