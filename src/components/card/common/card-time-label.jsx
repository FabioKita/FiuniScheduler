import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Animated from "react-native-reanimated";
import { useColorContext } from "src/contexts/color-context";

const CardTimeLabel = ({
    style,
    data
})=>{
    const {outlineColorStyle} = useColorContext();

    const parseTimeData = (date = new Date())=>{
        
    }

    return <Animated.View style={[styles.Container, outlineColorStyle, style]}>
        <Text>{data}</Text>
    </Animated.View>
}

const styles = StyleSheet.create({
    Container:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",

        padding:8,
        borderRadius:8,
        borderWidth:2,

    }
});

export default CardTimeLabel;