import React from 'react';

import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import styles from './styles';


export const DrawerContent = (props)=>{

    return(
        <DrawerContentScrollView style={styles.container} {...props}>
            <DrawerItemList {...props}  />
        </DrawerContentScrollView>
    )
  }