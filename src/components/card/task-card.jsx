import React, { useMemo, useState } from "react";
import CardContainer from "./card-container";
import { useColorContext } from "src/contexts/color-context";
import { StyleSheet, View, Text } from "react-native";
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";
import Ionicons from '@expo/vector-icons/Ionicons';

import CardTitle from "./card-title";
import CardDescription from "./card-description";
import CardTimeLabel from "./card-time-label";
import CardCheck from "./card-check";
import CardActionButton from "./card-action-button";

const TaskCard = ({
    color,
    entry
}) => {
    const [active, setActive] = useState(false);

    const { colorData, parseToColorData } = useColorContext();

    const finalColorData = useMemo(() => {
        if (color) return parseToColorData(color);
        else return colorData;
    }, [color, colorData]);

    const [open, setOpen] = useState(false);

    const heightStyle = useAnimatedStyle(() => {
        return {
            maxHeight: withTiming(!open ? 0 : 200, { duration: 500 }),
            opacity: withTiming(!open ? 0 : 1, { duration: 500 })
        }
    }, [open])

    return <CardContainer
        colorData={finalColorData}
        onPress={() => setOpen(o => !o)}
        innerStyle={{ padding: 16 }}
    >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            <CardTitle style={{ flex: 1 }}>{entry.title}</CardTitle>
            <CardCheck colorData={finalColorData} active={active} setActive={setActive} />
        </View>
        <Animated.View style={[heightStyle, { overflow: "hidden", gap:16 }]}>
            <View style={[styles.DescriptionContainer]}>
                {entry.description &&
                    <CardDescription>{entry.description}</CardDescription>
                }
            </View>
            <View>
                <View style={{flexDirection:"row", gap:16}}>
                    <CardActionButton
                        icon={<Ionicons name={"pencil"} size={20} />}
                        label={"Edit"}
                        onPress={() => {}}
                        style={{flex:1}}
                    />
                    <CardActionButton
                        icon={<Ionicons name={"trash"} size={20} />}
                        label={"Delete"}
                        onPress={() => {}}
                        style={{flex:1}}
                    />
                </View>
            </View>
        </Animated.View>
    </CardContainer>
}

const styles = StyleSheet.create({
    LabelContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    OpenContainer: {
        gap: 8,
        marginTop:16
    },
    DescriptionContainer:{
        marginTop:16
    }
    
})

export default TaskCard;