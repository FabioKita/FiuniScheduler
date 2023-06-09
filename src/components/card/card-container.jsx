import React from "react";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

const CardContainer = ({
    style,
    children,
    colorData: { fillStyles }
}) => {
    return <Animated.View style={[styles.Container, fillStyles.mainColor].concat(style)}>
        {children}
    </Animated.View>
}

const styles = StyleSheet.create({
    Container: {
        borderRadius: 8,
        backgroundColor: "white",
        overflow:"hidden"
    }
})

export default CardContainer;