import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const styles = StyleSheet.create({
    Body:{
        flex: 1, backgroundColor: colors.card
    },

    Container:{
        backfaceVisibility: 'hidden',
        margin:15,
        backgroundColor: colors.card,
        width:100,
        height:100,
        borderRadius:15,
        elevation:10
    },

    Area:{ 
        padding: 20
    },

    backButton:{
        flexDirection: 'row', 
        Index: 5
    },

    backText:{
        color: colors.blue, 
        fontWeight: '500', 
        marginLeft: 5, 
        fontSize: 14
    },

    titleText:{
        alignSelf: 'center', 
        textAlign: 'center', 
        fontSize: 18, 
        color: 'black',
        marginVertical: 5, 
        fontFamily: 'ProximaNova-Regular'
    },

    inputBody:{
        width: '90%', 
        alignSelf: 'center',
    },

    userRow:{
        flexDirection: 'row', 
        alignItems: 'center', 
        backgroundColor: '#FFFFFF',
        paddingVertical: 0,
        height: 40,
        borderRadius: 10, 
        marginVertical: 12
    },

    userText:
    { 
        width: '73%',
        fontSize: 16,
        fontWeight: '400',
        marginLeft: 15 
    },

    passwordRow:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingVertical: 0,
        height: 40,
        borderRadius: 10,
        marginVertical: 5
    },

    passwordText:
    { 
        width: '73%',
        fontWeight: '400',
        marginLeft: 15,
        fontSize: 16, 
    },

    checkboxBody:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        paddingHorizontal: 10,
        alignItems: 'center' 
    },

    checkboxButton:{
        flexDirection: 'row',
        alignItems: 'center'   
    },

    checkboxIconRow:{
        backgroundColor: colors.blue,
        width: 15,
        height: 15
    },

    tickImage:{
        width: 15,
        height: 15,
        resizeMode: 'contain'
    },

    checkboxContainer:{
        borderWidth: 3,
        borderColor: colors.blue,
        width: 15,
        height: 15
    },

    checkboxText:{
        marginLeft: 10,
        color: '#000000'
    },

    forgotPassword:{
        color: '#0069B4',
        fontSize: 14,
        textDecorationLine: 'underline' 
    },

    loginButton:{
        width: '100%',
        padding: 15,
        paddingVertical: 12,
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        opacity: 1,
        backgroundColor:'#0069B4' 
    },

    loginBottunText:{
        color: 'white',
        fontSize: 18,
        fontWeight: '400'
    },

    popupContainer:{
        backgroundColor: 'white',
        marginVertical: '5%',
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 10,
        width: '100%',
        alignSelf: 'center',
        padding: 10 
    },

    popupmessageText:{
        alignSelf: 'center',
        marginBottom: '5%',
        textAlign: 'center' 
    },

    signUpButton:{
        marginHorizontal: 40,
        marginTop: 20  
    },

    signUpButtonText:{
        color: '#F39200',
        fontSize: 14,
        alignSelf: 'flex-end'
    },

    backButtonIcon:{
        color:colors.blue
    },

    Logo:{
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 100,
    },

    inputIcon:{
        color:colors.blue,
        marginLeft: 10
    },

    hideEyeButton:{
        marginRight: 14,
        color: '#E5E5E5'   
    },
    ml10:{
        marginLeft: 10
    },
    ml14:{
        marginLeft: 10
    }
  });