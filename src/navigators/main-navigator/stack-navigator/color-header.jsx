import React, { useEffect } from "react";
import {StyleSheet, Text, Pressable, View} from "react-native"
import Animated from "react-native-reanimated";
import { useColorContext } from "src/contexts/color-context";
import Ionicons from '@expo/vector-icons/Ionicons';

const ColorHeader = ({
    route,
    navigation
})=>{
    const { colorStyle } = useColorContext();

    return <Animated.View style={[styles.Container, styles.Shadow, colorStyle]}>
        <Pressable style={styles.PressableContainer} onPress={()=>navigation.openDrawer()}>
            <View style={[styles.Button]}>
                <Ionicons name="menu" size={32}/
            ></View>
            <Text style={styles.Title}>{route.name}</Text>
        </Pressable>
    </Animated.View>
}

const styles = StyleSheet.create({
    Container:{
        padding:16,
        paddingTop:40,
        display:"flex",
        alignItems:"center",
        flexDirection:"row",
        zIndex:20
    },
    Shadow:{
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation:10
    },
    PressableContainer:{
        display:"flex",
        alignItems:"center",
        flexDirection:"row"
    }, 
    Title:{
        marginLeft:32,
        fontSize:20,
        fontWeight:"bold",
    },
    Button:{
        width:40,
        height:40,
        borderRadius:100,
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    }
})

export default ColorHeader;