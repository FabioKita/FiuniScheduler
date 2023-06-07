import React, { createContext, useContext, useState } from "react";
import { useAnimatedStyle, withTiming } from "react-native-reanimated";
import { pSBC } from "src/utils/color-utils";

const INITIAL_COLOR = "#ffffff";

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

    const [duration, setDuration] = useState(250);

    const setColor = ({
        mainColorString,
        darkColorString = pSBC(-0.6, mainColorString),
        lightColorString = pSBC(0.6, mainColorString),
        duration = 250
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

    return <colorContext.Provider value={{
        fillStyles,
        outlineStyles,
        setColor
    }}>
        {children}
    </colorContext.Provider>
}