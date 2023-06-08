import React from "react";
import { StyleSheet, Text } from "react-native";
import ColorContainer from "src/components/color/color-container";
import { Button } from "react-native-paper"; 
import SolidButton from "src/components/inputs/solid-button";
import useSetColor from "src/hooks/use-set-color";

const Home = ({
    navigation
}) => {
    useSetColor({mainColor:"#ffffff"});

    return <ColorContainer style={styles.Container}>
        <Text> home </Text>
        <SolidButton color={"#E9887F"} onPress={()=>navigation.navigate("Entries")}>
            Navigate
        </SolidButton>
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