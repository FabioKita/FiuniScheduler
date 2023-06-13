import React from "react";
import { ScrollView } from "react-native";
import { StyleSheet, View } from "react-native";
import CardList from "src/components/card-list";
import TaskCard from "src/components/card/task-card";
import SolidButton from "src/components/inputs/solid-button";
import { useEntryContext } from "src/contexts/entry-context";
import useSetColor from "src/hooks/use-set-color";

const COLOR = "#E9887F";

const Tasks = ({
    navigation,
    openedEntryId,
    setOpenedEntryId
}) => {
    useSetColor({ mainColor: COLOR });

    const { entries } = useEntryContext();

    return <View style={styles.Container}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{minHeight:700}}>
            <View style={styles.ButtonContainer}>
                <SolidButton
                    color={COLOR}
                    onPress={() => navigation.navigate("New Task")}
                >New Task</SolidButton>
            </View>
            <CardList
                style={styles.ListContainer}
                entries={entries.filter(e=>e.type == "task")}
                renderEntry={e=><EntryCard 
                    entry={e} 
                    navigation={navigation} 
                    openedEntryId={openedEntryId} 
                    setOpenedEntryId={setOpenedEntryId}
                />}
            />
        </ScrollView>
    </View>
}

const EntryCard = ({
    entry,
    openedEntryId,
    setOpenedEntryId,
    navigation
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