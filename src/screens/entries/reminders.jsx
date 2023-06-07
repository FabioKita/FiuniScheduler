import React from "react";
import { StyleSheet, View } from "react-native";
import TestCard from "src/components/card/test-card";
import ColorContainer from "src/components/color-container";

const Reminders = ({
    navigation
}) => {
    return <ColorContainer style={styles.Container} color="#AED581">
        <View style={styles.List}>
            <TestCard/>
            <TestCard/>
            <TestCard/>
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

export default Reminders;