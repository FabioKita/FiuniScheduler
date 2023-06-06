import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import TestCard from "src/components/card/test-card";
import ColorContainer from "src/components/color-container";

const Tasks = ({
    navigation
}) => {
    return <ColorContainer style={styles.Container} color="#F36C60">
        <View>
            <TestCard/>
        </View>
    </ColorContainer>
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        display: "flex",
        padding:16
    },
    List:{
        display:"flex",
        flexDirection:"column",
        alignItems:"stretch",
        justifyContent:"flex-start"
    }
})

export default Tasks;