import { StyleSheet } from "react-native"

export default StyleSheet.create({
    Title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: '40%',
        textAlign: "center",
    },

    Inputs: {
        height: 40,
        marginTop: 20,
        marginBottom: 20,
        marginRight: 30,
        marginLeft: 30,
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
    },
    ButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly', // eller 'space-between', 'center' alt efter look
        padding: 10,
    },
    LoginButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end', // eller 'space-between', 'center' alt efter look
        padding: 10,
        marginRight: 22
    },
    LoginButton: {
        display: 'flex',
        backgroundColor: 'blue',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 5,
    },
    Buttons: {
        display: 'flex',
        backgroundColor: 'blue',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 5,
        flexDirection: 'row',
    },
    ButtonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    }
})