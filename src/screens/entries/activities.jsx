import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorContainer from "src/components/color-container";

const Activities = () => {
    return <ColorContainer style={styles.Container} color="#91A7FF" duration={200}>
        <Text>
            Activities
        </Text>
    </ColorContainer>
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Activities;