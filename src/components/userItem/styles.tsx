import { StyleSheet } from "react-native";
import * as Colors from '../../theme/Colors';

export default StyleSheet.create({
    container:{
        paddingVertical: 16,
        paddingHorizontal:8,
        backgroundColor:'white',
        flexDirection:'row',
        marginVertical:6,
        borderRadius:4
    },
    iconContainer:{
        paddingVertical:12,
        paddingHorizontal:16,
        backgroundColor:Colors.primary,
        borderRadius:8
    },
    content:{
        justifyContent:'center',
        flex:1,
        marginLeft:16
    },
    text:{
        color: Colors.primary,
        fontSize:16,
        fontWeight:'bold',
    },
    email:{
        color: Colors.primary,
        fontSize:16,
        
    },
    smallText:{
        color: Colors.secondary,
        fontSize:14
    }
});