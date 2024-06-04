import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    position:{
        flexDirection:"column",
        alignItems:"center",
        marginLeft:10,
        marginRight:10
    },
    container:{
        height:100,
        width:340,
        backgroundColor:"#B1B1B1",
        borderRadius:15,
        marginBottom:15
    },
    image:{
        height:80,
        width:70,
        borderRadius:15,
        margin:10,
    },
    contentRow:{
        flexDirection:"row",
        alignItems:"center"
    },
    contentColumn:{
        flexDirection:"column",
        width:200,
        alignItems:"center"
    },
    title:{

    },
    text:{
        fontWeight: 'bold',
        fontSize:15,
    }
})

export default styles