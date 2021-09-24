import { StyleSheet } from 'react-native';
import * as Colors from '../../theme/Colors';
export default StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        backgroundColor: Colors.primary
    },
    title: {
        fontSize: 32,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'arial',
        alignSelf: 'center'
    },
    subtitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: 'arial',
    },
    smallText:{
        fontFamily: 'arial',
        color: Colors.primary,
        alignSelf:'center',
        fontSize:16,
        fontWeight:'bold',
    }
})