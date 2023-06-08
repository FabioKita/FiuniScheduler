import React from "react";
import { StyleSheet, Text } from "react-native";
import ColorContainer from "src/components/color-container";

const NewTask = ({
    navigation
}) => {
    return <ColorContainer style={styles.Container} color="#E9887F">
        <Text> New Task </Text>
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

export default NewTask;