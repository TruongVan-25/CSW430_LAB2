import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        padding: "16",
    },
    mainDisplay: {
        fontWeight: 'bold',
        fontSize: 85,
        marginTop: 300,
    },
    keyDigit: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#fff',
        width: 80,
        height: 80,
        padding: 5,
        margin: 3,
        elevation: 5
    },
    digitText: {
        fontSize: 50,
    },
    row : {
        flexDirection: 'row',
    },
    operator: {
        color: 'orange',
    },
    operatorBox: {
        backgroundColor: 'rgb(233, 233, 233)',
    },
    digit0: {
        width: 190,
        marginLeft: 10
    },
    digitEqual: {
        backgroundColor: 'orange',
        width: 40,
        height: 80,
    },
    digitEqualCol: {
        color: '#fff'
    },
    clearButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        width:300,
        height: 70,
        marginTop: 20,
        backgroundColor: 'rgb(233, 233, 233)',
        elevation: 5
    }
});