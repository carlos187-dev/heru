import React,{useEffect,useRef} from 'react'
import {
    TouchableOpacity,
    Image,
    Text,
    View,
    Animated
} from 'react-native';
import styles from './styles';
import  FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';


export const UserItem = ({ user, onPressItem })=>{
    const fade = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.timing(fade, {
            toValue: 1,
            useNativeDriver: true,
            duration: 500,
        }).start();
    }, []);

    const translateAnim = {
        translateX: fade.interpolate({
            inputRange: [0, 1],
            outputRange: [-200, 0],
        })
    }

    return(
        <Animated.View style={[{ transform: [translateAnim], opacity: fade, }]}>
            <TouchableOpacity style={styles.container} onPress={onPressItem}>
            <View style={styles.iconContainer}>
            <FontAwesomeIcon name='user' style={{color:'white', fontSize:32}} />
            </View>
            <View style={styles.content}>
                <Text style={styles.text}>{`${user.username} ${user.name}`}</Text>
                <Text style={styles.email}>{user.email}</Text>
                <Text style={styles.smallText}>{user.phone}</Text>
            </View>
        </TouchableOpacity>
        </Animated.View>
    )
}