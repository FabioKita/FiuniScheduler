import React from "react";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import TaskCard from "src/components/card/task-card";
import ColorContainer from "src/components/color/color-container";
import useSetColor from "src/hooks/use-set-color";

const ViewTask = ({route, navigation})=>{
    const { entry } = route.params;

    useSetColor({ mainColor: "#E9887F" });

    return <ColorContainer style={styles.Container}>
        <Text style={styles.Title}>{entry.title}</Text>
        <Text style={styles.Description}>{entry.description}</Text>
    </ColorContainer>
}

const styles = StyleSheet.create({
    Container:{
        padding:32,
        paddingTop:48
    },
    Title:{
        fontSize:20,
        fontWeight:"bold"
    },
    Description:{
        fontSize:16
    }
})

export default ViewTask;