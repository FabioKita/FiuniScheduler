import React from "react";
import { StyleSheet, View } from "react-native";
import CardList from "src/components/card-list";
import ColorContainer from "src/components/color-container";
import { useEntryContext } from "src/contexts/entry-context";

const COLOR = "#B9B5FC";

const Activities = () => {
    const {entries} = useEntryContext();

    return <ColorContainer style={styles.Container} color={COLOR}>
        <CardList entries={entries} color={COLOR} style={styles.List}/>
    </ColorContainer>
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        display: "flex"
    },
    List: {
        flex:1
    }
})

export default Activities;