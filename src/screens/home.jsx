import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorContainer from "src/components/color-container";

const Home = ()=>{
    return <ColorContainer style={styles.Container}>
        <Text>
            home
        </Text>
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