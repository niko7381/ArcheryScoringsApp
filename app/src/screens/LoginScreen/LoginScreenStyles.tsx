import { StyleSheet } from "react-native";

export default StyleSheet.create({
    Title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: '40%',
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
    Buttons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }
})