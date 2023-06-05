import React, { createContext, useContext, useEffect, useState } from "react";
import { interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { pSBC } from "src/utils/color-utils";

const INITIAL_COLOR = "#ffffff";

const colorContext = createContext();

export const useColorContext = () => {
    return useContext(colorContext);
}

export const ColorProvider = ({
    children
}) => {
    const [previusColor, setPreviusColor] = useState(INITIAL_COLOR);
    const [targetColor, setTargetColor] = useState(INITIAL_COLOR);

    const [previusBackgroundColor, setPreviusBackgroundColor] = useState(INITIAL_COLOR);
    const [targetBackgroundColor, setTargetBackgroundColor] = useState(INITIAL_COLOR);

    const [previusDarkColor, setPreviusDarkColor] = useState(INITIAL_COLOR);
    const [targetDarkColor, setTargetDarkColor] = useState(INITIAL_COLOR);

    const [previusOutlineColor, setPreviusOutlineColor] = useState(INITIAL_COLOR);
    const [targetOutlineColor, setTargetOutlineColor] = useState(INITIAL_COLOR);

    const [duration, setDuration] = useState(0);

    const [colorSwitch, setColorSwitch] = useState(false);

    const progress = useSharedValue(0);

    useEffect(() => {
        progress.value = 0;
        progress.value = withTiming(1, {
            duration: duration,
        });
    }, [colorSwitch]);

    const setColor = ({ 
        colorString, 
        backgroundColorString = pSBC(0.7, colorString), 
        darkColorString = pSBC(-0.4, colorString), 
        outlineColorString = pSBC(-0.4, colorString), 
        duration = 250 
    }) => {
        setPreviusColor(interpolateColor(progress.value, [0, 1], [previusColor, targetColor]));
        setTargetColor(colorString);

        setPreviusBackgroundColor(interpolateColor(progress.value, [0, 1], [previusBackgroundColor, targetBackgroundColor]));
        setTargetBackgroundColor(backgroundColorString);

        setPreviusDarkColor(interpolateColor(progress.value, [0, 1], [previusBackgroundColor, targetBackgroundColor]))
        setTargetDarkColor(darkColorString)

        setPreviusOutlineColor(interpolateColor(progress.value, [0, 1], [previusOutlineColor, targetOutlineColor]));
        setTargetOutlineColor(outlineColorString);

        setDuration(duration);

        setColorSwitch(v=>!v);
    };

    const colorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: interpolateColor(progress.value, [0, 1], [previusColor, targetColor])
        };
    }, [previusColor, targetColor]);

    const backgroundColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: interpolateColor(progress.value, [0, 1], [previusBackgroundColor, targetBackgroundColor])
        };
    }, [previusBackgroundColor, targetBackgroundColor]);

    const darkColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: interpolateColor(progress.value, [0, 1], [previusDarkColor, targetDarkColor])
        };
    }, [previusDarkColor, targetDarkColor]);

    const outlineColorStyle = useAnimatedStyle(() => {
        return {
            borderColor: interpolateColor(progress.value, [0, 1], [previusOutlineColor, targetOutlineColor])
        };
    }, [previusBackgroundColor, targetBackgroundColor]);

    return <colorContext.Provider value={{
        colorStyle,
        backgroundColorStyle,
        darkColorStyle,
        outlineColorStyle,
        setColor
    }}>
        {children}
    </colorContext.Provider>
}