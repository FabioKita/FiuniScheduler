import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

import ColorContainer from "src/components/color/color-container";
import useSetColor from "src/hooks/use-set-color";

import TitleInput from "src/components/inputs/title-input";
import DescripitionInput from "src/components/inputs/description-input";
import DateTimeInput from "src/components/inputs/date-time-input";
import SolidButton from "src/components/inputs/solid-button";

const NewTask = () => {
    useSetColor({ mainColor: "#E9887F" });

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState(undefined);

    return <ColorContainer>
        <View style={styles.ContentContainer}>
            <View style={styles.InputContainer}>
                <Text style={styles.SubTitle}>Title</Text>
                <TitleInput value={title} setValue={setTitle} />
            </View>
            <View style={styles.InputContainer}>
                <Text style={styles.SubTitle}>Description</Text>
                <DescripitionInput value={description} setValue={setDescription} />
            </View>
            <View style={[styles.InputContainer, { alignItems: "flex-start" }]}>
                <Text style={styles.SubTitle}>Date / Time</Text>
                <DateTimeInput value={date} setValue={setDate} />
            </View>
        </View>
        <View style={styles.Footer}>
            <SolidButton>Create Task</SolidButton>
        </View>
    </ColorContainer>
}

const styles = StyleSheet.create({
    ContentContainer: {
        padding: 16,
        paddingTop: 32,
        gap: 16,
    },
    SubTitle: {
        fontSize: 16,
        fontWeight: "bold"
    },
    InputContainer: {
        gap: 8,
    },
    Footer: {
        padding: 16,
        paddingTop:32
    }
})

export default NewTask;