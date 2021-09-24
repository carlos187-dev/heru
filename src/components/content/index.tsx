import React, { useEffect, useState, useRef, } from 'react'
import {
    View,
    Animated
} from 'react-native';
import { Props } from '../../interfaces/types';
import styles from './styles';

export const Content: React.FC<Props> = ({ children, style }) => {
    const fade = useRef(new Animated.Value(0)).current;


    useEffect(() => {
        Animated.timing(fade, {
            toValue: 1,
            useNativeDriver:true,
            duration: 800,
        }).start();
    }, []);

    const translateAnim = {
        translateY: fade.interpolate({
            inputRange: [0, 1],
            outputRange: [50, 0],
            extrapolate:'clamp',
            
        })
    }

    return (
        <Animated.View style={[styles.container, { transform: [translateAnim], opacity: fade }, style]}>
            {
                children
            }
        </Animated.View>
    )
}