import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Platform,
    NavigatorIOS,
    Image,
    ImageBackground,
    Alert,

} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { PROVIDER_GOOGLE, Marker, AnimatedRegion } from 'react-native-maps';
import styles from './styles';
import Geolocation from '@react-native-community/geolocation';
import { Content, AnimatedView, DrawerScreen, Clock } from '@components';
import { dateToString } from '../../utils/Formater';
import * as Colors from '../../theme/Colors';
import { Props } from '../../interfaces/types';

const Home: React.FC<Props> = ({ navigation }) => {

    const [coordinate, setCoordinate] = useState(null)

    useEffect(() => {
        Geolocation.getCurrentPosition(info => {
            console.log(Platform.OS, info.coords)
            setCoordinate({
                latitude: info.coords.latitude,
                longitude: info.coords.longitude
            })
            // setCoordinate({...info.coords})
        },
            error => Alert.alert('Error', JSON.stringify(error)),
            { enableHighAccuracy: false, timeout: 20000, maximumAge: 3600000 },
        );
    }, [])


    useEffect(() => {
        console.log('usefe coord', coordinate);
    }, [coordinate])


    return (
        <DrawerScreen style={styles.container} navigation={navigation} >

            <ImageBackground source={require('../../assets/cover13.jpg')} style={{
                flex: 1,

            }} resizeMode='cover' >
                <View style={{ flex: 2 }}>
                    <View>

                    </View>
                    <AnimatedView style={{ alignItems: 'center', flex: 1, paddingTop: 32 }}>
                        <Text style={styles.title}>Bienvenid@</Text>
                        <Text style={styles.subtitle}>{dateToString()}</Text>
                        <Clock style={styles.subtitle} />
                    </AnimatedView>



                </View>




                <Content style={{paddingTop:4}}>
                    <Text style={styles.smallText}>Esta es tu ubicación actual</Text>
                    {
                        coordinate &&
                        <MapView
                            mapType='standard'
                            provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : null}

                            style={{
                                flex: 1,
                            }}
                            region={{...coordinate, latitudeDelta:0, longitudeDelta:0}}



                        >
                            <Marker

                                coordinate={coordinate}
                            />
                        </MapView>
                    }
                </Content>
            </ImageBackground>
        </DrawerScreen>
    )
}

export default Home;