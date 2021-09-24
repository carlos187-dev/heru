import React from 'react'

import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { Props } from '../../interfaces/types';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { DrawerActions } from '@react-navigation/routers';


export const DrawerScreen: React.FC<Props> = ({ children, navigation, colorIcon='white'  }) => {


    const toggleDrawer = () =>{
        navigation.dispatch(DrawerActions.openDrawer());
        
    }

    
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.drawerMenu} onPress={toggleDrawer}>
                <FeatherIcon name='menu' style={[styles.drawerIcon, { color: colorIcon}]}  />
            </TouchableOpacity>
            {
                children
            }
        </SafeAreaView>
    )
}