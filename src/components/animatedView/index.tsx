import React, { useEffect, useState, useRef } from 'react'
import {
    View,
    Animated
} from 'react-native';
import { Props } from '../../interfaces/types';


export const AnimatedView: React.FC<Props> = ({ children, style, }) => {
    const fade = useRef(new Animated.Value(0)).current;


    useEffect(() => {
        Animated.timing(fade, {
            toValue: 1,
            useNativeDriver: true,
            duration: 800,
        }).start();
    }, []);

    const translateAnim = {
        translateY: fade.interpolate({
            inputRange: [0, 1],
            outputRange: [-200, 0],
        })
    }

    return (
        <Animated.View style={[{ transform: [translateAnim], opacity: fade }, style]}>
            {
                children
            }
        </Animated.View>
    )
}