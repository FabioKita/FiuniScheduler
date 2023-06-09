import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import ColorContainer from "src/components/color/color-container";
import DescripitionInput from "src/components/inputs/description-input";
import TitleInput from "src/components/inputs/title-input";
import useSetColor from "src/hooks/use-set-color";

const NewTask = ()=>{
    useSetColor({mainColor:"#E9887F"});

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <ColorContainer style={styles.Container}>
        <View style={styles.InputContainer}>
            <Text style={styles.SubTitle}>Title</Text>
            <TitleInput value={title} setValue={setTitle}/>
        </View>
        <View style={styles.InputContainer}>
            <Text style={styles.SubTitle}>Description</Text>
            <DescripitionInput value={description} setValue={setDescription}/>
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