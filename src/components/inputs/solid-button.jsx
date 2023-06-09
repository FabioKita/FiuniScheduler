import React, { useMemo } from "react";
import { StyleSheet } from "react-native"
import { Button } from "react-native-paper";
import Animated from "react-native-reanimated";
import { useColorContext } from "src/contexts/color-context";

const SolidButton = ({
    children,
    color,
    onPress = ()=>{}
})=>{
    const { colorData, parseToColorData } = useColorContext();

    const finalColorData = useMemo(() => {
        if (color) return parseToColorData(color);
        else return colorData;
    }, [color, colorData]);
    const {targetColors} = finalColorData;

    return <Animated.View style={[styles.Container, {backgroundColor:targetColors.darkColor}]}>
        <Button 
            mode="contained" 
            buttonColor="transparent" 
            onPress={onPress}
            style={styles.Content}
        >
            {children}
        </Button>
    </Animated.View>
}

const styles = StyleSheet.create({
    Container:{
        borderRadius:8
    },
    Content:{
        borderRadius:0
    }
})

export default SolidButton;