import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import TestCard from "src/components/card/test-card";
import FocusDelay from "../wrappers/focus-delay";
import FocusFade from "../wrappers/focus-fade";

const CardList = ({
    color,
    entries = [],
    style
}) => {
    const renderItem = ({ item }) => {
        return <TestCard key={item.id} color={color} />
    }

    return <FocusDelay>
        <FocusFade>
            <FlatList
                data={entries}
                style={[styles.List].concat(style)}
                renderItem={renderItem}
                ItemSeparatorComponent={Gap}
            />
        </FocusFade>
    </FocusDelay>
}

const Gap = () => {
    return <View style={{ marginTop: 16 }} />
}

const styles = StyleSheet.create({
    List: {
        padding: 16
    }
})

export default CardList;