import React from "react";
import { StyleSheet, View } from "react-native";
import TaskCard from "src/components/card/task-card";
import SolidButton from "src/components/inputs/solid-button";
import { useEntryContext } from "src/contexts/entry-context";
import useSetColor from "src/hooks/use-set-color";

const COLOR = "#E9887F";

const Tasks = ({
    navigation
}) => {
    const { entries } = useEntryContext();

    useSetColor({ mainColor: COLOR })

    return <View style={styles.Container}>
        <View style={styles.ButtonContainer}>
            <SolidButton
                color={COLOR}
                onPress={() => navigation.navigate("New Task")}
            >New Task</SolidButton>
        </View>
        <View style={styles.ListContainer}>
            {entries
            .filter(e=>e.type == "task")
            .map(e=><TaskCard 
                key={e.id} 
                entry={e} 
                color={COLOR}
            />)}
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
        flex: 1,
        gap:16,
        padding:16
    }
})

export default Tasks;