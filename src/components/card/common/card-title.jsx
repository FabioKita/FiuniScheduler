import React from "react";
import { StyleSheet, Text } from "react-native";

const CardTitle = ({
    style,
    children
})=>{
    return <Text style={[styles.Title, style]}>{children}</Text>
}

const styles = StyleSheet.create({
    Title:{
        fontSize:20,
        fontWeight:"bold"
    }
})

export default CardTitle;