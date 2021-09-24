import React, { useRef, useState, useEffect } from 'react'
import {
    View,
    Animated
} from 'react-native';
import { Props } from '../../interfaces/types';
import styles from './styles';
const HEADER_HEIGHT = 120;
export const BaseScreen: React.FC<Props> = ({ children, header, headerHeight }) => {
    const scrollAnim = useRef(new Animated.Value(0)).current;
    const [headerSize, setHeaderSize] = useState(100);


    useEffect(() => {
        console.log('tamaño', headerSize, header)
    }, [headerSize])


    const animHeight = scrollAnim.interpolate({
        inputRange: [0, headerHeight ],
        outputRange: [headerHeight, headerHeight*0.5],
        extrapolate: 'clamp'
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[{height: animHeight}, styles.header]} onLayout={(event) => {
                const { width, height } = event.nativeEvent.layout;
                console.log('heigh', height);
                setHeaderSize(height);

            }}>
                {header}
            </Animated.View>
            <Animated.ScrollView style={{flexGrow:1}} contentContainerStyle={{paddingTop:HEADER_HEIGHT, }} onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollAnim } } }], {
                useNativeDriver:false
            })} >
                {children}
            </Animated.ScrollView>
        </View>
    )
}