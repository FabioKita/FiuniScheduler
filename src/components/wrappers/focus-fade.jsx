import React, { useEffect, useState } from "react";
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";
import useOnFocus from "src/hooks/on-focus";

const FocusFade = ({
    children,
    duration = 250
})=>{
    const [ready, setReady] = useState(false);

    useOnFocus(()=>{
        setReady(true);
        return ()=>setReady(false);
    },[]);

    const fadeStyle = useAnimatedStyle(()=>{
        return {
            opacity:withTiming(ready?1:0,{duration})
        };
    },[ready]);

    return <Animated.View style={[{flex:1}, fadeStyle]}>
        {children}
    </Animated.View>;
}

export default FocusFade;