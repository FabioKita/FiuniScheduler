import React, { useMemo, useState } from "react";
import { View, StyleSheet } from "react-native";

import { useColorContext } from "src/contexts/color-context";

import CardContainer from "./common/card-container";
import CardTitle from "./common/card-title";
import CardDescription from "./common/card-description";
import CardTimeLabel from "./common/card-time-label";
import CardCheck from "./common/card-check";


const TestCard = ({
    color
}) => {
    const [active, setActive] = useState(false);
    const { colorData, parseToColorData } = useColorContext();

    const finalColorData = useMemo(() => {
        if (color) return parseToColorData(color);
        else return colorData;
    }, [color, colorData])

    return <CardContainer style={styles.Container} colorData={finalColorData}>
        <View style={{ flex: 1 }}>
            <CardTitle>Lorem ipsum dolor sit amet</CardTitle>
            <CardDescription style={{ marginBottom: 8 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod.
            </CardDescription>
            <View style={styles.LabelContainer}>
                <CardTimeLabel colorData={finalColorData} />
            </View>
        </View>
        <View>
            <CardCheck active={active} setActive={setActive} colorData={finalColorData} />
        </View>
    </CardContainer>
}

const styles = StyleSheet.create({
    Container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    LabelContainer: {
        marginTop: 8,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    }
})

export default TestCard;