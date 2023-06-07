import { useIsFocused } from "@react-navigation/native";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import { useColorContext } from "src/contexts/color-context";

const ColorContainer = ({
    children,
    style,
    color = "#ffffff",
    duration = 500
}) => {
    const { setColor, backgroundColorStyle } = useColorContext();
    
    const focused = useIsFocused();
    useEffect(()=>{
        if(!focused) return;
        setColor({
            colorString:color,
            duration
        });
    }, [focused]);

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