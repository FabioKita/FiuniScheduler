import React from "react";
import { StyleSheet, Text, Button, Pressable, View } from "react-native";
import ColorContainer from "src/components/color-container";

const Home = ({
    navigation
}) => {
    return <ColorContainer style={styles.Container}>
        <Text> home </Text>
        <Pressable style={styles.Button} onPress={() => navigation.navigate("Entries")}>
            <Text> Navigate </Text>
        </Pressable>
    </ColorContainer>
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap:16
    },
    Button:{
        padding:16,
        paddingHorizontal:32,
        backgroundColor:"lightblue",
        borderRadius:8
    }
})

export default Home;