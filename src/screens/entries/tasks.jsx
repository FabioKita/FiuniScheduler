import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorContainer from "src/components/color-container";
const Tasks = ({
    navigation
}) => {
    return <ColorContainer style={styles.Container} color="#F36C60">
        <Text>
            Tasks
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

export default Tasks;