import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { FadeInDown, FadeInUp, FadeOutDown, Layout, Transition } from "react-native-reanimated";
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

    const [openedEntryId, setOpenedEntryId] = useState(-1);

    return <View style={styles.Container}>
        <View style={styles.ButtonContainer}>
            <SolidButton
                color={COLOR}
                onPress={() => navigation.navigate("New Task")}
            >New Task</SolidButton>
        </View>
        <View style={styles.ListContainer}>
            {entries.filter(e => e.type == "task")
                .map(e => <Animated.View 
                    key={e.id} 
                    entering={FadeInDown} 
                    exiting={FadeOutDown} 
                    layout={Layout.stiffness(0)}
                >
                    <EntryCard
                        entry={e}
                        openedEntryId={openedEntryId}
                        setOpenedEntryId={setOpenedEntryId}
                    />
                </Animated.View>)
            }
        </View>
    </View>
}

const EntryCard = ({
    entry,
    openedEntryId,
    setOpenedEntryId
}) => {
    const { setEntry, removeEntry } = useEntryContext();

    return <TaskCard
        key={entry.id}
        entry={entry}
        color={COLOR}

        open={openedEntryId == entry.id}
        active={entry.status == "done"}

        onPress={() => {
            if (openedEntryId != entry.id) setOpenedEntryId(entry.id);
            else setOpenedEntryId(-1);
        }}
        onCheckPress={() => {
            if (entry.status == "in_progress") setEntry(entry.id, { status: "done" });
            else setEntry(entry.id, { status: "in_progress" })
        }}
        onDeletePress={() => {
            removeEntry(entry.id);
        }}
        onEditPress={() => navigation.navigate("Edit Task", { entryId: entry.id })}
    />
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
        gap: 16,
        padding: 16
    }
})

export default Tasks;