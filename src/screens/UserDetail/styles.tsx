import { StyleSheet } from 'react-native';
import * as Colors from '../../theme/Colors';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary

    },
    header: {
        flex: 1,

    },
    title: {
        fontSize: 28,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'arial',
    },
    headerContent: {
        alignItems: 'center',
        flex: 1,
        paddingTop: 32,

    },
    data: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'arial',
        color: Colors.primary,
        marginLeft:16
    },
    text:{
        fontSize: 16,
        fontFamily: 'arial',
        color: Colors.primary,
        marginBottom:16,
        marginTop:4,
    },
    item:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:4
    },
    itemIcon:{
         color: Colors.primary,
          fontSize: 18
         }
    
})