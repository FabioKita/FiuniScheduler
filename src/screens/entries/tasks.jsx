import React from "react";
import { StyleSheet, Text, Button } from "react-native";
import ColorContainer from "src/components/color-container";

const Tasks = ({
    navigation
}) => {
    return <ColorContainer style={styles.Container} color="#F36C60">
        <Text>
            Tasks
        </Text>
        <Button title="Create New Task" onPress={()=>navigation.navigate("New Entry")}/>
    </ColorContainer>
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Tasks;