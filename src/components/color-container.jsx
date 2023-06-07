import { useIsFocused } from "@react-navigation/native";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import { useColorContext } from "src/contexts/color-context";

const ColorContainer = ({
    children,
    style,
    color = "#ffffff",
    darkColor = undefined,
    lightColor = undefined,
    duration = 250
}) => {
    const { setColor, fillStyles } = useColorContext();
    
    const focused = useIsFocused()
    useEffect(()=>{
        if(!focused) return;
        setColor({
            mainColorString:color,
            darkColorString:darkColor,
            lightColorString:lightColor,
            duration
        });
    },[focused])

    return <Animated.View style={[styles.Container, fillStyles.lightColor].concat(style)}>
        {children}
    </Animated.View>
}

const styles = StyleSheet.create({
    Container: {
        flex: 1
    }
})

export default ColorContainer;