import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerMenu: {
        //alignSelf:'flex-end',
        //borderWidth:1,
        padding: 8,
        position: 'absolute',
        zIndex: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,

    },
    drawerIcon: {
        color: 'white',
        fontSize: 32,
    }
});