import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    contentColumn:{
        flexDirection:"column",
    },
    contentColumnInput:{
        flexDirection:"column",
        alignItems:"center",
        alignContent:"space-around",
        marginLeft:50,
        marginTop:20
    },
    contentColumnOutput:{
        flexDirection:"column",
        alignItems:"center",
        alignContent:"space-around",
        marginLeft:30,
        marginTop:20
    },
    contentRow:{
        flexDirection:"row",
        alignContent:"space-between",
        alignItems:"center",
    },
    contentRowD:{
        flexDirection:"row",
        alignContent:"space-between",
        alignItems:"center",
        marginLeft:-5
    },
    lowerdata:{
        flexDirection:"column",
        alignItems:"left",
        marginLeft: 61,
        marginTop:10
    },
    titleStyle:{
        fontWeight: 'bold',
        fontSize:30
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
    subtitle:{
        marginTop:20,
        marginLeft:15,
        fontSize:19
    },
    textinputstyle:{
        height:35,
        width:100,
        backgroundColor:"#ffffff",
        borderWidth:1,
        borderRadius:5

    },
    textstyle:{
        fontSize:13,
    },
    textstyleS:{
        fontSize:13,
        marginLeft:-20
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
        marginTop:10
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        width: 200,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#F4C55C',
        marginBottom:25
    },
    contentColumnAlert:{
        flexDirection:"column",
        alignItems:"center",
        marginTop:20
    },
    textAlert: {
        fontSize: 13,
        lineHeight: 21,
        color: 'red',
    },
})

export default styles