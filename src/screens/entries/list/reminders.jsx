import React, { useState } from "react";
import { ScrollView } from "react-native";
import { StyleSheet, View } from "react-native";
import CardList from "src/components/card-list";
import ReminderCard from "src/components/card/reminder-card";
import SolidButton from "src/components/inputs/solid-button";
import { useEntryContext } from "src/contexts/entry-context";
import useSetColor from "src/hooks/use-set-color";

const COLOR = "#92F598";

const Reminders = ({
    navigation,
    openedEntryId,
    setOpenedEntryId
}) => {
    const { entries } = useEntryContext();

    useSetColor({ mainColor: COLOR })

    return <View style={styles.Container}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.ButtonContainer}>
                <SolidButton
                    color={COLOR}
                    onPress={() => navigation.navigate("New Reminder")}
                >New Reminder</SolidButton>
            </View>
            <CardList
                style={styles.ListContainer}
                entries={entries.filter(e=>e.type == "reminder")}
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
    const { removeEntry } = useEntryContext();

    return <ReminderCard
        key={entry.id}
        entry={entry}
        color={COLOR}

        open={openedEntryId == entry.id}

        onPress={() => {
            if (openedEntryId != entry.id) setOpenedEntryId(entry.id);
            else setOpenedEntryId(-1);
        }}
        onDeletePress={() => {
            removeEntry(entry.id);
        }}
        onEditPress={() => navigation.navigate("Edit Reminder", { entryId: entry.id })}
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

export default Reminders;