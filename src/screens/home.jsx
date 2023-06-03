import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import ColorContainer from "src/components/color-container";

const Home = ({
    navigation
})=>{
    return <ColorContainer style={styles.Container}>
        <Pressable onPress={()=>navigation.navigate("Entries")}>
        <Text> home </Text>
        </Pressable>
    </ColorContainer>
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }
})

export default Home;