import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Entries = ()=>{
    return <View style={styles.Container}>
        <Text>
            Entries
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

export default Entries;