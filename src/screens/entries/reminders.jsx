import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import TestCard from "src/components/card/test-card";
import ColorContainer from "src/components/color-container";
import { useColorContext } from "src/contexts/color-context";

const COLOR = "#92F598";

const Reminders = ({
    navigation
}) => {
    const {fillStyles, colors, parseToColorData} = useColorContext();

    const colorData = useMemo(()=>parseToColorData(COLOR),[])

    return <ColorContainer style={styles.Container} color={COLOR}>
        <View style={styles.List}>
            <TestCard colorData={{fillStyles, colors}}/>
            <TestCard colorData={colorData}/>
        </View>
    </ColorContainer>
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        display: "flex",
        padding:24
    },
    List:{
        display: "flex",
        flexDirection:"column",
        alignItems:"stretch",
        justifyContent:"flex-start",
        gap:24
    }
})

export default Reminders;