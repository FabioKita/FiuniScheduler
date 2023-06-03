import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import ColorContainer from "src/components/color-container";

const Home = ({
    navigation
})=>{
    return <ColorContainer style={styles.Container}>
        <Text> home </Text>
        <Button title="Navigate" onPress={()=>navigation.navigate("Entries")}/>
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