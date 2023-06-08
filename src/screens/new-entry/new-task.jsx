import React from "react";
import { StyleSheet, Text } from "react-native";
import ColorContainer from "src/components/color-container";
import useSetColor from "src/hooks/use-set-color";

const NewTask = ({
    navigation
}) => {
    return <ColorContainer style={styles.Container}>
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