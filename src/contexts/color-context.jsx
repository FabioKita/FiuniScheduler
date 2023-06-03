import React, {createContext, useContext, useEffect, useState} from "react";
import { DefaultTheme } from "react-native-paper";
import { interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { pSBC } from "src/utils/color-utils";

const INITIAL_COLOR = "#ffffff";

const colorContext = createContext();

export const useColorContext = ()=>{
    return useContext(colorContext);
}

export const ColorProvider = ({
    children
})=>{
    const [previusColor, setPreviusColor] = useState(INITIAL_COLOR);
    const [targetColor, setTargetColor] = useState(INITIAL_COLOR);

    const [previusBackgroundColor, setPreviusBackgroundColor] = useState(INITIAL_COLOR);
    const [targetBackgroundColor, setTargetBackgroundColor] = useState(INITIAL_COLOR);
    
    const [duration, setDuration] = useState(0);

    const progress = useSharedValue(0);
    
    useEffect(()=>{
        progress.value = 0;
        progress.value = withTiming(1, {
            duration: duration,
        });
    },[previusColor, targetColor, duration]);

    const setColor = ({colorString, backgroundColorString = pSBC(0.7, colorString), duration = 250})=>{
        setPreviusColor(interpolateColor(progress.value, [0, 1], [previusColor, targetColor]));
        setTargetColor(colorString);

        setPreviusBackgroundColor(interpolateColor(progress.value, [0, 1], [previusBackgroundColor, targetBackgroundColor]));
        setTargetBackgroundColor(backgroundColorString);

        setDuration(duration);
    };

    const colorStyle = useAnimatedStyle(()=>{
        const color = interpolateColor(progress.value, [0, 1], [previusColor, targetColor]);
        return {
            backgroundColor:color
        };
    }, [previusColor, targetColor]);

    const backgroundColorStyle = useAnimatedStyle(()=>{
        const color = interpolateColor(progress.value, [0, 1], [previusBackgroundColor, targetBackgroundColor]);
        return {
            backgroundColor:color
        };
    }, [previusBackgroundColor, targetBackgroundColor]);

    const themeStyle = useAnimatedStyle(()=>{
        const color = interpolateColor(progress.value, [0, 1], [previusColor, targetColor]);
        return {
            ...DefaultTheme,
            colors: {
                ...DefaultTheme.colors,
                primary: color
            },
        };
    }, [previusColor, targetColor])

    return <colorContext.Provider value={{
        colorStyle,
        backgroundColorStyle,
        themeStyle,
        setColor
    }}>
        {children}
    </colorContext.Provider>
}