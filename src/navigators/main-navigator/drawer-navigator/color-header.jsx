import React from "react";
import {StyleSheet, Text, Pressable, View} from "react-native"
import Animated from "react-native-reanimated";
import { useColorContext } from "src/contexts/color-context";
import Ionicons from '@expo/vector-icons/Ionicons';

import CommonStyles from "src/styles/common-styles";

//TODO improve header button

const DrawerColorHeader = ({
    screenData,
    navigation
})=>{
    const { colorData:{fillStyles} } = useColorContext();

    return <Animated.View style={[CommonStyles.Shadow, styles.Container, fillStyles.mainColor]}>
        <HeaderContent screenData={screenData} navigation={navigation}/>
    </Animated.View>
}

const HeaderContent = ({
    screenData,
    navigation
})=>{
    const headertype = screenData.focusedScreen.options?.headerType;

    if(headertype == "back"){
        return <Pressable style={styles.PressableContainer} onPress={navigation.goBack}>
            <View style={[styles.Button]}>
                <Ionicons name="arrow-back" size={32}/>
            </View>
            <Text style={styles.Title}>{screenData.focusedScreen.name}</Text>
        </Pressable>
    }else{
        return <Pressable style={styles.PressableContainer} onPress={navigation.openDrawer}>
            <View style={[styles.Button]}>
                <Ionicons name="menu" size={32}/>
            </View>
            <Text style={styles.Title}>{screenData.focusedScreen.name}</Text>
        </Pressable>
    }
}

const styles = StyleSheet.create({
    Container:{
        display:"flex",
        alignItems:"stretch",
        flexDirection:"row",
        zIndex:20,
        paddingTop:24
    },
    PressableContainer:{
        display:"flex",
        alignItems:"center",
        flexDirection:"row",
        padding:16,
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

export default DrawerColorHeader;