import React from "react";
import { StyleSheet, Text } from "react-native";
import ColorContainer from "src/components/color-container";

const NewReminder = ({
    navigation
}) => {
    return <ColorContainer style={styles.Container}>
        <Text> New Reminder </Text>
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

export default NewReminder;