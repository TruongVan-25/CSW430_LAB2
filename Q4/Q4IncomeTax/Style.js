
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: "16",
    },
    title : {
        fontSize: 20,
        marginBottom: 10,
    },
    input: {
        borderColor: "gray",
        borderWidth: 1,
        width: '200',
        height: 40,
        marginBottom: 10,
        padding: 8,
        textAlign: "right",
    },
    result: {
        marginTop: 20,
        fontSize: 16,
    }
});

export default styles;