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
        marginTop: 0,
        marginLeft:10
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
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 25,
        width: 300,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#F4C55C',
        marginBottom:25
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.5,
        color: 'white',
    },
    buttonColumn:{
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        marginTop:250
    },
    subtitleStyle:{
        fontWeight: 'bold',
        fontSize:30,
        marginLeft:70
    },
    bottommargin:{
        marginBottom:60
    },
    centerText:{
        alignContent: "center",
        justifyContent :"center",
        flexDirection:"column",
        marginTop:100
    }
    
})

export default styles