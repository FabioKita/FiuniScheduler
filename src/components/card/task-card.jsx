import React, { useMemo, useState } from "react";
import CardContainer from "./card-container";
import { useColorContext } from "src/contexts/color-context";
import { StyleSheet } from "react-native";
import { TouchableRipple } from "react-native-paper";
import { View } from "react-native";
import CardTitle from "./card-title";
import CardDescription from "./card-description";
import CardTimeLabel from "./card-time-label";
import CardCheck from "./card-check";

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

    return <CardContainer colorData={finalColorData}>
        <TouchableRipple onPress={() => { }}>
            <View style={styles.InnerContainer}>
                <View style={{ flex: 1 }}>
                    <CardTitle>{entry.title}</CardTitle>
                    {entry.description &&
                        <CardDescription style={{ marginBottom: 8 }}>
                            {entry.description}
                        </CardDescription>}
                    <View style={styles.LabelContainer}>
                        {entry.datetime &&
                            <CardTimeLabel
                                colorData={finalColorData}
                                date={entry.datetime}
                            />}
                    </View>
                </View>
                <View>
                    <CardCheck active={active} setActive={setActive} colorData={finalColorData} />
                </View>
            </View>
        </TouchableRipple>
    </CardContainer>
}

const styles = StyleSheet.create({
    InnerContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 16
    },
    LabelContainer: {
        marginTop: 8,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    }
})

export default TaskCard;