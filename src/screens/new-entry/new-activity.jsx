import React from "react";
import { StyleSheet, Text } from "react-native";
import ColorContainer from "src/components/color-container";

const NewActivity = ({
    navigation
}) => {
    return <ColorContainer style={styles.Container} color="#B9B5FC">
        <Text> New Activity </Text>
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

export default NewActivity;