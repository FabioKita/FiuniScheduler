import React from "react";
import { StyleSheet, Text } from "react-native";
import ColorContainer from "src/components/color-container";

const a = [1, 1, 1, 1, 1, 1, 1, 1, 1]

const NewEntry = ({
    navigation
}) => {
    return <ColorContainer style={styles.Container} color="#F36C60">
        <Text>
            New Entry
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

export default NewEntry;