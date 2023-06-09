import React from "react";

import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

import { useColorContext } from "src/contexts/color-context";
import dayjs from "dayjs";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";



const TimeInput = ({
    value, 
    setValue = ()=>{},
    style
}) => {

    const { targetColors } = useColorContext().colorData;

    const onChange = (e, v)=>{
        if(e.type=='set') setValue(v)
    }

    const showDatePicker = ()=>{
        DateTimePickerAndroid.open({
            value:value??new Date(),
            onChange:onChange,
            mode:"time",
            display:"spinner"
        })
    }

    const hasValue = value != undefined;

    return <View style={[styles.Container, {borderColor:targetColors.darkColor}].concat(style)}>
        <Pressable 
            style={[styles.Pressable]} 
            onPress={showDatePicker}
        >
            <Ionicons color={"black"} name="time-outline" size={24}/>
            <Text style={[styles.Text, !hasValue&&styles.empty]}>
                {hasValue?dayjs(value).format("hh-mm A"):"Choose Time"}
            </Text>
        </Pressable>
        {hasValue&&
            <Pressable style={styles.Remove} onPress={()=>setValue(undefined)}>
                <Ionicons name="ios-close" size={24}/>
            </Pressable>
        }
    </View>
}

const styles = StyleSheet.create({
    Container:{
        backgroundColor:"#ffffff80",
        borderWidth: 1,
        borderRadius:8,
        paddingLeft:8,

        height:48,
        flexDirection:"row",
        alignItems:"stretch"
    },
    Pressable: {
        flexDirection:"row",
        alignItems:"center",
        gap:16,
        paddingRight:32
    },
    Remove:{
        borderLeftWidth:1,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:48
    },
    Text:{
        fontSize:16,
    },
    empty:{
        color:"gray"
    }

})

export default TimeInput