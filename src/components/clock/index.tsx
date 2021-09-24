import React, {useEffect, useState} from 'react'
import { Text } from 'react-native'

export const Clock = ({style}) =>{
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    

    useEffect(() => {
        const interval = setInterval(
            ()=>{
                
                logic();
                
            },1000
        );

        return ()=> clearInterval(interval);
    }, [])


    const logic = ()=>{
        setTime(new Date().toLocaleTimeString());
    }

    return(
        <Text style={style}>{time}</Text>
    )
}
