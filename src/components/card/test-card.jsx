import React from "react";
import CardContainer from "./common/card-container";
import CardTitle from "./common/card-title";
import CardDescription from "./common/card-description";
import CardTimeLabel from "./common/card-time-label";
import { View, StyleSheet } from "react-native";


const TestCard = ()=>{
    return <CardContainer>
        <CardTitle>Test</CardTitle>
        <CardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod.
        </CardDescription>
        <View style={styles.LabelContainer}>
            <CardTimeLabel/>
        </View>
    </CardContainer>
}

const styles = StyleSheet.create({
    LabelContainer:{
        marginTop:16,

        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        gap:8
    }
})

export default TestCard;