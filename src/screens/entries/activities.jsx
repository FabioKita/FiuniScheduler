import React from "react";
import { StyleSheet, View } from "react-native";
import ColorContainer from "src/components/color-container";

const COLOR = "#B9B5FC";

const Activities = () => {
    return <ColorContainer style={styles.Container} color={COLOR}>
        <View style={styles.List}>
        </View>
    </ColorContainer>
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        display: "flex",
        padding:24
    },
    List:{
        display: "flex",
        flexDirection:"column",
        alignItems:"stretch",
        justifyContent:"flex-start",
        gap:24
    }
})

export default Activities;