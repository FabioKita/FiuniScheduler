import React from "react";
import {StyleSheet} from "react-native"
import Animated from "react-native-reanimated";
import { useColorContext } from "src/contexts/color-context";

const ColorHeaderBackground = ()=>{
    const { colorStyle } = useColorContext();
    return <Animated.View style={[StyleSheet.absoluteFill, colorStyle]}/>
}

export default ColorHeaderBackground;