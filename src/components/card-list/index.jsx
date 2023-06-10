import React from "react";
import { View, StyleSheet } from "react-native";
import TaskCard from "src/components/card/task-card";

const CardList = ({
    entries = [],
    renderEntry = ()=><></>
}) => {
    return <View styles={styles.List}>
        {entries.map(e=><TaskCard key={e.id} entry={e} />)}
    </View>
}

const styles = StyleSheet.create({
    List:{
        gap:16
    }
})

export default CardList;