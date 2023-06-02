import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Home = ()=>{
    return <View style={styles.Container}>
        <Text>
            Home
        </Text>
    </View>
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