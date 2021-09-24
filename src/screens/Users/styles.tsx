import { StyleSheet } from "react-native";
import * as Colors from '../../theme/Colors';
export default StyleSheet.create({
    container: { 
        flex:1
    },
    header:{ 
        flex:1,
        backgroundColor:Colors.primary,
        justifyContent:'center',
        alignItems:'center',

        
    },
    content:{
        backgroundColor:'rgb(242,242,242)',
        paddingHorizontal:8
    }
});