import React, { useEffect, } from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch, connect } from 'react-redux';
import styles from './styles';
import { fetchUsersRequest } from '../../redux/actions/actions';
import { RootState } from '../../redux/reducers';
import { Props } from '../../interfaces/types';


const Splash: React.FC<Props> = ({ navigation }) => {
    //const { store, fetchUsersRequest } = props;
    const dispatch = useDispatch();
    const { isFetching, users, error } = useSelector(
        (state: RootState) => state.users
    );

    useEffect(() => {
        console.log('props', )
        setTimeout(() => {
            navigation.navigate('Dashboard');
        }, 2000);
        // fetchUsersRequest()
        /*dispatch(fetchUsersRequest());
        if(users){
            navigation.navigate('Home');
        }*/
    }, [])

    return (
        
           
            <ImageBackground source={require('../../assets/cover13.jpg')}  style={{
                flex:1,
                
            }} />
         
    )
}


//const MapDispatchToProps = (state) => ({ store: state.users })
//export default connect(MapDispatchToProps, ({ fetchUsersRequest }))(Splash);
export default Splash;
