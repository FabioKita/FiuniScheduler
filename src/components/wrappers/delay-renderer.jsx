import React, { useEffect, useState } from "react";
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";

const DelayRenderer = ({
    children,
    placeholderComponent = <></>,
    delay = 0,
})=>{
    const [ready, setReady] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            setReady(true);
            console.log("ready");
        }, delay);
    },[])

    const style = useAnimatedStyle(()=>{
        return {
            opacity:withTiming(ready?1:0,{duration:250})
        };
    })

    if(!ready) return placeholderComponent
    return <Animated.View style={[{flex:1}, style]}>
        {children}
    </Animated.View>;
}

export default DelayRenderer;