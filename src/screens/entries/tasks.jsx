import React from "react";
import { StyleSheet, View } from "react-native";
import CardList from "src/components/card-list";
import ColorContainer from "src/components/color-container";
import SolidButton from "src/components/inputs/solid-button";
import { useEntryContext } from "src/contexts/entry-context";

const COLOR = "#E9887F";

const Tasks = ({
    navigation
}) => {
    const { entries } = useEntryContext();

    return <ColorContainer style={styles.Container} color={COLOR}>
        <View style={styles.ButtonContainer}>
            <SolidButton
                color={COLOR}
                onPress={() => navigation.navigate("New Task")}
            >New Task</SolidButton>
        </View>
        <View style={styles.ListContainer}>
            <CardList entries={entries} color={COLOR} style={styles.List} />
        </View>
    </ColorContainer>
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        display: "flex"
    },
    ButtonContainer: {
        alignItems: "flex-end",
        padding: 16,
        paddingBottom: 0
    },
    ListContainer: {
        padding: 16,
        flex: 1
    }
})

export default Tasks;