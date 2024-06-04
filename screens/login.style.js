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
        alignItems:"center",
        marginTop : 30
    },
    columnBack:{
        marginTop:150
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
    button:(color)=> ({
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 25,
        width: 300,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: color,
        marginBottom:25
    }),
    subtitleStyle:{
        fontWeight: 'bold',
        fontSize:30,
        marginLeft:90
    },
    textInput:{
        borderColor :"#000000",
        borderWidth:1,
        borderRadius:5,
        flexDirection:'row',
        paddingHorizontal:10,
        fontSize: 20,
        height:40,
        marginLeft: 10,
        width:270,
        backgroundColor:"#FFFFFF"
    },
    iconbottom:{
        marginTop:3,
        marginLeft:10,
    },
    error:{
        color:"#FF0000",
        fontSize:15,
        marginTop:5,
        marginLeft:65
    }
})

export default styles