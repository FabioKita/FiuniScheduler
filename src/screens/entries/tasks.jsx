import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import TestCard from "src/components/card/test-card";
import ColorContainer from "src/components/color-container";
import { useColorContext } from "src/contexts/color-context";

const COLOR = "#F59892";

const Tasks = ({
    navigation
}) => {
    const {fillStyles} = useColorContext();

    return <ColorContainer style={styles.Container} color={COLOR}>
        <View style={styles.List}>
            <TestCard fillStyle={fillStyles}/>
            <TestCard fillStyle={fillStyles}/>
            <TestCard fillStyle={fillStyles}/>
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

export default Tasks;