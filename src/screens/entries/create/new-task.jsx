import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

import ColorContainer from "src/components/color/color-container";
import useSetColor from "src/hooks/use-set-color";

import TitleInput from "src/components/inputs/title-input";
import DescripitionInput from "src/components/inputs/description-input";
import DateInput from "src/components/inputs/date-input";

const NewTask = ()=>{
    useSetColor({mainColor:"#E9887F"});

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState(new Date());

    return <ColorContainer style={styles.Container}>
        <View style={styles.InputContainer}>
            <Text style={styles.SubTitle}>Title</Text>
            <TitleInput value={title} setValue={setTitle}/>
        </View>
        <View style={styles.InputContainer}>
            <Text style={styles.SubTitle}>Description</Text>
            <DescripitionInput value={description} setValue={setDescription}/>
        </View>
        <View style={styles.InputContainer}>
            <Text style={styles.SubTitle}>Date</Text>
            <DateInput value={date} setValue={setDate}/>
        </View>
    </ColorContainer>
}

const styles = StyleSheet.create({
    Container:{
        padding:16,
        paddingTop:32,
        gap:16,
    },
    SubTitle:{
        fontSize:16,
        fontWeight:"bold"
    },
    InputContainer:{
        gap:8
    }
})

export default NewTask;