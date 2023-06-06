import React from "react";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import { useColorContext } from "src/contexts/color-context";

import CommonStyles from "src/styles/common-styles";

const CardContainer = ({
    style,
    children
})=>{
    const {colorStyle} = useColorContext();

    return <Animated.View style={[CommonStyles.Shadow, styles.Container, colorStyle, style]}>
        {children}
    </Animated.View>
}

const styles = StyleSheet.create({
    Container:{
        padding:16,
        borderRadius:8,
        backgroundColor:"white"
    }
})

export default CardContainer;