import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    Column:{
        flexDirection:"column",
    },
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
    imageStyle:{
        width:220,
        height:190,
        marginTop:30,
        marginLeft:15
    },
    contentColumn:{
        flexDirection:"column",
        alignItems:"center"
    },
    columnBack:{
        marginTop:70
    },
    subtitle:{
        marginTop:20,
        fontSize:25
    },
    contentRow:{
        flexDirection:"row",
        marginTop: 20,
        marginLeft:10
    },
    subtext:{
        marginLeft: 10,
        marginTop:8,
        width: 305,
        fontSize:20
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 25,
        width: 300,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#F4C55C',
        marginTop:40
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.5,
        color: 'white',
    },
})

export default styles