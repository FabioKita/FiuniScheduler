import React, { createContext, useContext, useEffect, useState } from "react";
import { DefaultTheme } from "react-native-paper";
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

    const [previusOutlineColor, setPreviusOutlineColor] = useState(INITIAL_COLOR);
    const [targetOutlineColor, setTargetOutlineColor] = useState(INITIAL_COLOR);

    const [duration, setDuration] = useState(0);

    const progress = useSharedValue(0);

    useEffect(() => {
        progress.value = 0;
        progress.value = withTiming(1, {
            duration: duration,
        });
    }, [previusColor, targetColor, previusBackgroundColor,
        targetBackgroundColor, previusOutlineColor, targetOutlineColor, duration]);

    const setColor = ({ 
        colorString, 
        backgroundColorString = pSBC(0.7, colorString), 
        outlineColorString = pSBC(-0.5, colorString), 
        duration = 250 
    }) => {
        setPreviusColor(interpolateColor(progress.value, [0, 1], [previusColor, targetColor]));
        setTargetColor(colorString);

        setPreviusBackgroundColor(interpolateColor(progress.value, [0, 1], [previusBackgroundColor, targetBackgroundColor]));
        setTargetBackgroundColor(backgroundColorString);

        setPreviusOutlineColor(interpolateColor(progress.value, [0, 1], [previusOutlineColor, targetOutlineColor]));
        setTargetOutlineColor(outlineColorString);

        setDuration(duration);
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

    const outlineColorStyle = useAnimatedStyle(() => {
        return {
            borderColor: interpolateColor(progress.value, [0, 1], [previusOutlineColor, targetOutlineColor])
        };
    }, [previusBackgroundColor, targetBackgroundColor]);

    return <colorContext.Provider value={{
        colorStyle,
        backgroundColorStyle,
        outlineColorStyle,
        setColor
    }}>
        {children}
    </colorContext.Provider>
}