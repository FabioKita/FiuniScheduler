import React, { createContext, useContext, useState } from "react";
import { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { pSBC } from "src/utils/color-utils";

const INITIAL_COLOR = "#ffffff";
const DARK_COLOR_PERCENTAGE = -0.6;
const LIGHT_COLOR_PERCENTAGE = 0.6;
const DEFAULT_DURATION = 250;

const colorContext = createContext();

export const useColorContext = () => {
    return useContext(colorContext);
}

export const ColorProvider = ({
    children
}) => {
    const [mainColor, setMainColor] = useState(INITIAL_COLOR);
    const [darkColor, setDarkColor] = useState(INITIAL_COLOR);
    const [lightColor, setLightColor] = useState(INITIAL_COLOR);

    const [duration, setDuration] = useState(DEFAULT_DURATION);

    const setColor = ({
        mainColorString,
        darkColorString = pSBC(DARK_COLOR_PERCENTAGE, mainColorString),
        lightColorString = pSBC(LIGHT_COLOR_PERCENTAGE, mainColorString),
        duration = DEFAULT_DURATION
    })=>{
        setMainColor(mainColorString);
        setDarkColor(darkColorString);
        setLightColor(lightColorString);
        setDuration(duration);
    }

    const fillStyles = {
        mainColor:useAnimatedStyle(()=>{
            return { backgroundColor:withTiming(mainColor, { duration }) }
        }, [mainColor, duration]),
        darkColor:useAnimatedStyle(()=>{
            return { backgroundColor:withTiming(darkColor, { duration }) }
        }, [darkColor, duration]),
        lightColor:useAnimatedStyle(()=>{
            return { backgroundColor:withTiming(lightColor, { duration }) }
        }, [lightColor, duration])
    }

    const outlineStyles = {
        mainColor:useAnimatedStyle(()=>{
            return { borderColor:withTiming(mainColor, { duration }) }
        }, [mainColor, duration]),
        darkColor:useAnimatedStyle(()=>{
            return { borderColor:withTiming(darkColor, { duration }) }
        }, [darkColor, duration]),
        lightColor:useAnimatedStyle(()=>{
            return { borderColor:withTiming(lightColor, { duration }) }
        }, [lightColor, duration])
    }

    const targetColors = {
        mainColor,
        darkColor,
        lightColor
    }

    const parseToColorData = (colorString)=>{
        const mc = colorString;
        const dc = pSBC(DARK_COLOR_PERCENTAGE, mc);
        const lc = pSBC(LIGHT_COLOR_PERCENTAGE, mc);

        return {
            fillStyles:{
                mainColor:{ backgroundColor:mc },
                darkColor:{ backgroundColor:dc },
                lightColor:{ backgroundColor:lc }
            },
            outlineStyles:{
                mainColor:{ borderColor:mc },
                darkColor:{ borderColor:dc },
                lightColor:{ borderColor:lc }
            },
            targetColors:{
                mainColor:mc,
                darkColor:dc,
                lightColor:lc
            }
        }
    }

    return <colorContext.Provider value={{
        colorData:{
            fillStyles,
            outlineStyles,
            targetColors
        },
        setColor,
        parseToColorData
    }}>
        {children}
    </colorContext.Provider>
}