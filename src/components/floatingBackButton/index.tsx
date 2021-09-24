import React from 'react'
import {
    TouchableOpacity,

} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export const FloatingBackButton = ({ onPress })=>{


    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <FontAwesomeIcon name='chevron-left' style={styles.icon} />
        </TouchableOpacity>
    )
}