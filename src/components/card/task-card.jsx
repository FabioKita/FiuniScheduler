import React, { useMemo, useState } from "react";
import CardContainer from "./card-container";
import { useColorContext } from "src/contexts/color-context";
import { StyleSheet, View, Text } from "react-native";
import Animated, { useAnimatedStyle, withTiming, withDelay } from "react-native-reanimated";
import Ionicons from '@expo/vector-icons/Ionicons';

import CardTitle from "./card-title";
import CardDescription from "./card-description";
import CardTimeLabel from "./card-time-label";
import CardCheck from "./card-check";
import CardActionButton from "./card-action-button";

const TaskCard = ({
    color = "#ffffff",
    entry,

    active = false,
    open = false,

    onPress,
    onCheckPress,
    onEditPress,
    onDeletePress
}) => {
    const { parseToColorData } = useColorContext();

    const finalColorData = useMemo(() => {
        return parseToColorData(color);
    }, [color]);

    const heightStyle = useAnimatedStyle(() => {
        return {
            maxHeight: withTiming(!open ? 0 : 200, { duration: 500 }),
            opacity: withTiming(!open ? 0 : 1, { duration: 500 })
        }
    }, [open])

    return <CardContainer
        colorData={finalColorData}
        onPress={onPress}
        style={{ zIndex: open ? 10 : 0 }}
        innerStyle={{ padding: 16 }}
    >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            <CardTitle style={{ flex: 1 }}>{entry.title}</CardTitle>
            <CardCheck colorData={finalColorData} active={active} onPress={onCheckPress} />
        </View>
        <Animated.View style={[heightStyle, {overflow:"hidden"}]}>
            {entry.description && <View style={{marginTop:16}}>
                <CardDescription>{entry.description}</CardDescription>
            </View>}
            <View style={{ flexDirection: "row", gap: 16, marginTop:16 }}>
                <CardActionButton
                    icon={<Ionicons name={"pencil"} size={20} />}
                    label={"Edit"}
                    onPress={onEditPress}
                    style={{ flex: 1 }}
                />
                <CardActionButton
                    icon={<Ionicons name={"trash"} size={20} />}
                    label={"Delete"}
                    onPress={onDeletePress}
                    style={{ flex: 1 }}
                />
            </View>
        </Animated.View>
        {entry.datetime && <View style={styles.LabelContainer}>
            <CardTimeLabel date={entry.datetime} colorData={finalColorData} />
        </View>}
    </CardContainer>
}

const styles = StyleSheet.create({
    LabelContainer: {
        marginTop: 8,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    }
})

export default TaskCard;