import { StyleSheet } from "react-native";

export default StyleSheet.create({
    Container: {
        flex: 1
    },
    Title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: '10%',
        textAlign: "center",
    },
    Input: {
        height: 40,
        marginTop: 20,
        marginBottom: 20,
        marginRight: 30,
        marginLeft: 30,
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
    },
    LoginButtonContainer: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        padding: 10,
        margin: 10
    },
    LoginButton: {
        display: 'flex',
        backgroundColor: 'blue',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 5,
        margin: 10,
        flexDirection: 'column',
    },
    ButtonContainer: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        padding: 10,
        margin: 10
    },
    Buttons: {
        display: 'flex',
        backgroundColor: 'blue',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 5,
        margin: 10,
        flexDirection: 'column',
    },
    ButtonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    }
})