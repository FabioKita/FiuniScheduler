import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Card from "src/components/card";
import ColorContainer from "src/components/color-container";

let a = [1, 1, 1, 1, 1]

const Activities = () => {
    return <ColorContainer style={styles.Container} color="#91A7FF">
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