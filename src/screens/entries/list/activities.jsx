import React from "react";
import { StyleSheet, View } from "react-native";
import CardList from "src/components/card-list";
import SolidButton from "src/components/inputs/solid-button";
import { useEntryContext } from "src/contexts/entry-context";
import useSetColor from "src/hooks/use-set-color";

const COLOR = "#B9B5FC";

const Activities = ({
    navigation
}) => {
    const { entries } = useEntryContext();

    useSetColor({ mainColor: COLOR });

    return <View style={styles.Container}>
        <View style={styles.ButtonContainer}>
            <SolidButton
                color={COLOR}
                onPress={() => navigation.navigate("New Activity")}
            >New Activity</SolidButton>
        </View>
        <View style={styles.ListContainer}>
        </View>
    </View>
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
        flex: 1
    }
})

export default Activities;