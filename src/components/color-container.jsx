import React from "react";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

import { useColorContext } from "src/contexts/color-context";
import useOnFocus from "src/hooks/on-focus";

const ColorContainer = ({
    children,
    style,
    color = "#ffffff",
    duration = 0,
    backgroundColor = undefined
}) => {
    const { setColor, backgroundColorStyle } = useColorContext();

    useOnFocus(() => {
        if (backgroundColor) setColor({
            colorString:color, 
            backgroundColorString:backgroundColor,
            duration
        });
        else setColor({
            colorString:color,
            duration
        });
    })

    return <Animated.View style={[styles.Container, backgroundColorStyle, style]}>
        {children}
    </Animated.View>
}

const styles = StyleSheet.create({
    Container: {
        flex: 1
    }
})

export default ColorContainer;