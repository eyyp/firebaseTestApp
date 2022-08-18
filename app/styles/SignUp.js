import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const styles = StyleSheet.create({
    Body:{
        flex: 1, 
        backgroundColor: '#F6F8FB', 
        paddingBottom: 10
    },
    Container:{
        padding: 20, 
        paddingBottom: 0 
    },
    backButton:{ 
        flexDirection: 'row', 
        zIndex: 5 
    },
    backButtonText:{
        color: colors.blue, 
        fontWeight: '500', 
        marginLeft: 5, 
        fontSize: 14
    },
    Logo:{
        alignSelf: 'center', 
        justifyContent: 'center' 
    },
    tittle:{
        alignSelf: 'center', 
        textAlign: 'center', 
        fontWeight: '400', 
        fontSize: 18, 
        color: 'black', 
        marginVertical: 5 
    },
    tabRow:{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        width: '80%', 
        alignSelf: 'center' 
    },
    BireyselButton:{
        backgroundColor: '#FFFFFF', 
        paddingVertical: 10, 
        paddingHorizontal: 0, 
        height: 70, 
        justifyContent: 'space-between', 
        borderWidth: 2, 
        borderRadius: 8, 
        marginBottom: 10, 
        borderRadius: 12,
        alignItems: 'center', 
        width: '47%' 
    },
    BireyselText:{
        fontWeight: "600", 
        fontSize: 16, 
        textTransform: 'uppercase' 
    },
    kurumsalButton:{
        backgroundColor: '#FFFFFF', 
        paddingVertical: 10, 
        paddingHorizontal: 0, 
        height: 70, 
        justifyContent: 'space-between', 
        borderWidth: 2, 
        borderRadius: 8,  
        marginBottom: 10, 
        borderRadius: 12, 
        alignItems: 'center', 
        width: '47%' 
    },
    kurumsalText:{
        fontWeight: "600", 
        fontSize: 16, 
        textTransform: 'uppercase' 
    },
    inputRow:{
        width: '80%', 
        alignSelf: 'center'
    },
    nameSurnameRow:{
        flexDirection: 'row', 
        padding: 3, 
        paddingVertical: 0, 
        height: 40, 
        alignItems: 'center', 
        borderColor: 'white', 
        backgroundColor: 'white', 
        borderRadius: 10, 
        marginVertical: 5 
    },
    inputNameSurname:{
        width: '73%', 
        marginLeft: 15, 
        fontWeight: '400'
    },
    emailRow:{
        flexDirection: 'row', 
        padding: 3, 
        paddingVertical: 0, 
        height: 40, 
        alignItems: 'center', 
        borderColor: 'white', 
        backgroundColor: 'white', 
        borderRadius: 10, 
        marginVertical: 5 
    },
    inputEmail:{
        width: '73%', 
        marginLeft: 15, 
        fontWeight: '400'
    }
});

