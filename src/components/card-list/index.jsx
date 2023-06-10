import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Animated, { FadeInDown, FadeOutDown, Layout } from "react-native-reanimated";

const CardList = ({
    entries,
    renderEntry,
    style
}) => {
    return <View style={style} >
        {entries.map((e, i)=><EntryContainer key={e.id} entry={e} index={i} renderEntry={renderEntry}/>)}
    </View>
}

const EntryContainer = ({
    entry,
    index,
    renderEntry
}) => {
    return <Animated.View
        entering={FadeInDown}
        exiting={FadeOutDown}
        Layout={Layout}
    >
        {renderEntry(entry, index)}
    </Animated.View>
}

export default CardList;