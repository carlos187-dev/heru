import React, { useEffect } from 'react'
import {
    View,
    Text
} from 'react-native';
import { DrawerScreen, BaseScreen, FetchComponent, UserItem } from '@components';
import { IUser, Props } from '../../interfaces/types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import { connect, useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { fetchUsersRequest } from '../../redux/actions/actions';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { AnimatedView } from '../../components';


const Users: React.FC<Props> = ({ navigation, store, fetchUsersRequest }) => {
    const dispatch = useDispatch();


    useEffect(() => {
        // dispatch(fetchUsersRequest());
        fetchUsersRequest();

    }, [])

    const Header = () => {
        return (
            <View style={styles.header}>
                <FontAwesomeIcon name='users' style={{ color: 'white', fontSize: 40 }} />



            </View>
        )
    }

    const onPressItem = (user: IUser) => {
        navigation.navigate('UserDetail', { user });
    }

    return (
        <DrawerScreen navigation={navigation} >
            <BaseScreen header={<Header />} headerHeight={120}>
                <FetchComponent isFetching={store.isFetching}>
                    <View style={styles.content}>

                        {
                            store.users.map((user: IUser) => <UserItem key={user.id} user={user} onPressItem={()=>onPressItem(user)} />)
                        }
                    </View>
                </FetchComponent>
            </BaseScreen>
        </DrawerScreen>
    )
}

const MapDispatchToProps = (state) => ({ store: state.users })
export default connect(MapDispatchToProps, ({ fetchUsersRequest }))(Users);
