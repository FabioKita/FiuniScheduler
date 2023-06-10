import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorContainer from "src/components/color/color-container";
import useSetColor from "src/hooks/use-set-color";

const Configurations = () => {
    useSetColor({mainColor:"#AAAAAA"});

    return <ColorContainer style={styles.Container}>
        <Text>Config</Text>
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

export default Configurations;