import { StyleSheet } from "react-native";
import * as Colors from '../../theme/Colors';
export default StyleSheet.create({
    container: {
        left: 16,
        top:16,
        backgroundColor: 'white',
        width: 32,
        height: 32,
        borderRadius: 16,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
        zIndex:10

    },
    icon: {
        color: Colors.primary,
        fontSize: 18
    }
})