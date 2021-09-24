import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Platform,
    NavigatorIOS,
    Image,
    ImageBackground,

} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

import { Content, AnimatedView, FloatingBackButton } from '@components';
import { dateToString, formatAddress } from '../../utils/Formater';
import * as Colors from '../../theme/Colors';
import { Props } from '../../interfaces/types';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const UserDetail: React.FC<Props> = ({ navigation, route }) => {

    const { user } = route.params;


    useEffect(() => {
        console.log('props', user)
    }, [])


    return (
        <SafeAreaView style={styles.container}>


            <View style={styles.header}>
                <FloatingBackButton onPress={() => navigation.goBack()} />
                <AnimatedView style={styles.headerContent}>
                    <FontAwesomeIcon name='user' style={{ color: 'white', fontSize: 32 }} />
                    <Text style={styles.title}>{user.name}</Text>


                </AnimatedView>



            </View>




            <Content style={{ paddingHorizontal: 16 }}>

                <View style={styles.item}>
                <FontAwesomeIcon name='user' style={styles.itemIcon} />
                <Text style={styles.data}>Usuario</Text>
                </View>
                <Text style={styles.text}>{user.username}</Text>
                <View style={styles.item}>
                <EntypoIcon name='email' style={styles.itemIcon} />
                <Text style={styles.data}>Correo</Text>
                </View>
                <Text style={styles.text}>{user.email}</Text>
                <View style={styles.item}>
                <EntypoIcon name='address' style={styles.itemIcon} />
                <Text style={styles.data}>Dirección</Text>
                </View>
                <Text style={styles.text}>{formatAddress(user.address)}</Text>
                <View style={styles.item}>
                <FontAwesomeIcon name='phone' style={styles.itemIcon} />
                <Text style={styles.data}>Número de teléfono</Text>
                </View>
                <Text style={styles.text}>{user.phone}</Text>
                <View style={styles.item}>
                <MaterialIcon name='work' style={styles.itemIcon} />
                <Text style={styles.data}>Compañia</Text>
                </View>
                <Text style={styles.text}>{user.company.name}</Text>
            </Content>

        </SafeAreaView>
    )
}

export default UserDetail;