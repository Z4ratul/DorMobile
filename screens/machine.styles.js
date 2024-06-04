import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    titleStyle:{
        fontWeight: 'bold',
        fontSize:40,
        textAlign: 'center' // выравнивание по центру
    },
    titleWrapper:{
    },
    title:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    contentColumn:{
        flexDirection:"column",
        alignItems:"center",
    },
    imageStyle:{
        width:300,
        height:250,

    },
    contentRow:{
        flexDirection:"row",

        alignContent:"stretch",
    },
    Column:{
        flexDirection:"column",
        alignItems:"center",
    },
    Column3:{
        flexDirection:"column",
        alignItems:"center",
    },
    iconarrow:{
        marginRight:100
    },
    Column2:{
        marginTop:10,
        flexDirection:"column",
        width:150,
        alignItems:"center",
    },
    atitle:{
        fontWeight: 'bold',
        fontSize:25,
        marginTop:20,
        textAlign: 'center' // выравнивание по центру
    },
    icon:{

        flexDirection:"column",
    },
    iconbottom:{
        marginTop:5,
        flexDirection:"column",
    },
    subTitle:{
        fontWeight: 'bold',
        fontSize:17,
        marginBottom:15,
        textAlign: 'center' // выравнивание по центру
    },
    subtext:{
        fontSize:13,

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
        marginLeft:110
    },
    bottommargin:{
        marginBottom:60
    }
})

export default styles
