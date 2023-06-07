import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Animated from "react-native-reanimated";
import { useColorContext } from "src/contexts/color-context";

import dayjs from "dayjs";
import calendar from 'dayjs/plugin/calendar';
dayjs.extend(calendar);

const CardTimeLabel = ({
    style,
    date,
    debugFill = true
})=>{
    const {darkColorStyle, outlineColorStyle} = useColorContext();

    const getTimeFromDate = (fromDate, toDate)=>{
        return dayjs(toDate).calendar(fromDate, {
            lastWeek: '[Last] dddd, hh:mm A', // Last week ( Last Monday at 2:30 AM )
            lastDay: '[Yesterday,] hh:mm A', // The day before ( Yesterday at 2:30 AM )
            sameDay: '[Today,] hh:mm A', // The same day ( Today at 2:30 AM )
            nextDay: '[Tomorrow,] hh:mm A', // The next day ( Tomorrow at 2:30 AM )
            nextWeek: '[Next] dddd, hh:mm A', // The next week ( Sunday at 2:30 AM )
            sameElse: 'DD/MM/YY, hh:mm A ', // Everything else ( 7/10/2011 )
        })
    }

    if(debugFill){
        return <Animated.View style={[styles.Container, styles.fill, darkColorStyle, outlineColorStyle, style]}>
            <Text style={styles.DateTextFill}>{getTimeFromDate(undefined, dayjs(date).add(6, 'day'))}</Text>
        </Animated.View>
    }

    return <Animated.View style={[styles.Container, styles.noFill, outlineColorStyle, style]}>
        <Text style={styles.DateText}>{getTimeFromDate(undefined, dayjs(date).add(6, 'day'))}</Text>
    </Animated.View>
}

const styles = StyleSheet.create({
    Container:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:8,
    },
    fill:{
        paddingHorizontal:18,
        paddingVertical:8
    },
    noFill:{
        paddingHorizontal:16,
        paddingVertical:6,
        borderWidth:2,
        backgroundColor:"transparent"
    },
    DateText:{
        fontSize:14,
        fontWeight:'bold'
    },
    DateTextFill:{
        fontSize:14,
        fontWeight:500,
        color:"white"
    }
});

export default CardTimeLabel;