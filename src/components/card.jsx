import React from "react";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withDelay, withSequence, withSpring, withTiming } from "react-native-reanimated";
import { StyleSheet, Text } from "react-native";
import { useColorContext } from "src/contexts/color-context";
import useOnFocus from "src/hooks/on-focus";

const Card = ({
    delay = 0
})=>{
    const {colorStyle} = useColorContext();

    const progress = useSharedValue(0);

    useOnFocus(()=>{
        progress.value = 0;
        progress.value = withDelay(delay, withTiming(1,{duration:500}));
        return ()=>progress.value = withDelay(delay/10, withTiming(2,{duration:250}));
    }, [])

    const enterStyle = useAnimatedStyle(()=>{
        return {
            opacity:interpolate(progress.value, [0, 1, 2], [0, 1, 0]),
            transform:[{translateY:interpolate(progress.value, [0, 1, 2], [200, 0, 200])}]
        }
    })

    return <Animated.View style={[styles.Container, styles.Shadow, colorStyle, enterStyle]}>
        <Text>Hola</Text>
    </Animated.View>
}

const styles = StyleSheet.create({
    Container:{
        padding:30,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:8,
        height:80,
        margin:16
    },
    Shadow:{
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation:10
    },
})

export default Card;