import React from "react";
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";
import { StyleSheet, Pressable} from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';

const CardCheck = ({
    style,
    colors,
    active = false,
    setActive = ()=>{}
})=>{
    const activeStyle = useAnimatedStyle(()=>{
        const backColor = active?colors.darkColor:"transparent";

        return {
            backgroundColor:withTiming(backColor, {duration:100}),
            borderColor:withTiming(colors.darkColor, {duration:250}),
            borderWidth:active?0:2,
            borderRadius:8,
            borderStyle:active?"solid":"dashed"
        };
    }, [active, colors])

    return <Pressable onPress={()=>setActive(!active)}>
        <Animated.View style={[
            styles.Container, 
            activeStyle
        ].concat(style)}>
            {active&&<Ionicons color={"white"} name="ios-checkmark-sharp" size={32}/>}
        </Animated.View>
    </Pressable>
}

const styles = StyleSheet.create({
    Container:{
        width:48,
        height:48,
        justifyContent:"center",
        alignItems:"center",
    },
    notFilled:{
        borderWidth:2,
        borderRadius:8,
        borderStyle:"dashed",
        backgroundColor:"transparent"
    },
    filled:{
        borderWidth:0,
        borderRadius:8,
        borderStyle:"solid",
        backgroundColor:"transparent"
    }
});

export default CardCheck;