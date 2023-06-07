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

    const colors = {
        mainColor,
        darkColor,
        lightColor
    }

    const parseToColorData = (colorString)=>{
        const mc = colorString;
        const dc = pSBC(-0.6, mc);
        const lc = pSBC(0.6, mc);

        return {
            fillStyles:{
                mainColor:{backgroundColor:mc},
                darkColor:{backgroundColor:dc},
                lightColor:{backgroundColor:lc}
            },
            outlineStyles:{
                mainColor:{borderColor:mc},
                darkColor:{borderColor:dc},
                lightColor:{borderColor:lc}
            },
            colors:{
                mainColor:mc,
                darkColor:dc,
                lightColor:lc
            },
        }
    }

    return <colorContext.Provider value={{
        fillStyles,
        outlineStyles,
        colors,
        setColor,
        //utility
        parseToColorData
    }}>
        {children}
    </colorContext.Provider>
}