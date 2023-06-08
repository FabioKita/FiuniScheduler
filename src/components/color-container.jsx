import React from "react";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import { useColorContext } from "src/contexts/color-context";

const ColorContainer = ({
    children,
    style
}) => {
    const { colorData:{fillStyles} } = useColorContext();

    return <Animated.View style={[
        styles.Container, 
        fillStyles.lightColor
    ].concat(style)}>
        {children}
    </Animated.View>
}

const styles = StyleSheet.create({
    Container: {
        flex: 1
    }
})

export default ColorContainer;