import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const styles = StyleSheet.create({
    Body:{
        flex: 1, 
        backgroundColor: '#f8f8ff', 
        paddingBottom: 10,
       
    },
    title:{
        justifyContent:'center',
        alignItems:'center',
        color:colors.white
    },
    ButtonRow:{
        flexDirection:'row'
    },
    button:{
        backgroundColor:colors.blue,
        marginTop:10,
        marginLeft:14,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        width:80,
        height:50 
    },
    image:{
        marginLeft:2,
        marginTop:5,
        width:170,
        height:250,
        borderRadius:10
    },
    tittle:{
        fontSize:20,
        justifyContent:'center',
        color:'#00008b',
        marginLeft:60
    },
    writeRow:{
        marginBottom:5,
        width:170
    },
    cart:{
        backgroundColor:'#dcdcdc',
        width:175,
        marginLeft:10,
        marginBottom:5,
        borderRadius:10,
        marginTop:10
    },
    buttonText:{
        color:'#f8f8ff',
        fontSize:12
    }
});

