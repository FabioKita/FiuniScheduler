import React from "react";
import { StyleSheet, View } from "react-native";
import CardList from "src/components/card-list";
import SolidButton from "src/components/inputs/solid-button";
import FocusDelay from "src/components/wrappers/focus-delay";
import FocusFade from "src/components/wrappers/focus-fade";
import { useEntryContext } from "src/contexts/entry-context";
import useSetColor from "src/hooks/use-set-color";

const COLOR = "#E9887F";

const Tasks = ({
    navigation
}) => {
    const { entries } = useEntryContext();

    useSetColor({mainColor:COLOR})

    return <FocusDelay >
        <FocusFade >
            <View style={styles.Container}>
                <View style={styles.ButtonContainer}>
                    <SolidButton
                        color={COLOR}
                        onPress={() => navigation.navigate("New Task")}
                    >New Task</SolidButton>
                </View>
                <View style={styles.ListContainer}>
                    <CardList color={COLOR} entries={entries}/>
                </View>
            </View>
        </FocusFade>
    </FocusDelay>
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