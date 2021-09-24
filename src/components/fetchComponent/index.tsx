import React from 'react'
import{
    View,
    ActivityIndicator
} from 'react-native';
import styles from './styles';

export const FetchComponent: React.FC<Props> = ({isFetching=false, children})=>{

    return(
        <View style={[styles.container, isFetching&&{justifyContent:'center', alignItems:'center'}]}>
            {
                isFetching? <ActivityIndicator size='large' style={{marginTop:32}} />: children
            }
        </View>
    )
}