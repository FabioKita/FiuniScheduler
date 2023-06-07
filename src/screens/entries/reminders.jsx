import React from "react";
import { StyleSheet, View } from "react-native";
import TestCard from "src/components/card/test-card";
import ColorContainer from "src/components/color-container";
import { useColorContext } from "src/contexts/color-context";

const COLOR = "#92F598";

const Reminders = ({
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

export default Reminders;