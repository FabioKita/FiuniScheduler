import React, { useEffect, useState } from "react";
import CardContainer from "./common/card-container";
import CardTitle from "./common/card-title";
import CardDescription from "./common/card-description";
import CardTimeLabel from "./common/card-time-label";
import { View, StyleSheet } from "react-native";
import CardCheck from "./common/card-check";


const TestCard = ({
    colorData:{
        fillStyles = {},
        colors = {}
    } = {}
})=>{
    const [active, setActive] = useState(false);

    return <CardContainer style={[styles.Container, fillStyles.mainColor]}>
        <View style={{flex:1}}>
            <CardTitle>Test</CardTitle>
            <CardDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod.
            </CardDescription>
            <View style={styles.LabelContainer}>
                <CardTimeLabel style={[fillStyles.darkColor]}/>
            </View>
        </View>
        <View>
            <CardCheck colors={colors} active={active} setActive={setActive}/>
        </View>
    </CardContainer>
}

const styles = StyleSheet.create({
    Container:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center"
    },
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