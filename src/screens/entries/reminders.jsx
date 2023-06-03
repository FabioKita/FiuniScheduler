import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorContainer from "src/components/color-container";

const Reminders = ({
    navigation
}) => {
    return <ColorContainer style={styles.Container} color="#AED581" duration={200}>
        <Text>
            Reminders
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

export default Reminders;