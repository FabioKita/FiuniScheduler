import React from "react";
import {StyleSheet, Text, Pressable, View} from "react-native"
import Animated from "react-native-reanimated";
import { useColorContext } from "src/contexts/color-context";
import Ionicons from '@expo/vector-icons/Ionicons';

//TODO improve header button

const DrawerColorHeader = ({
    screenData,
    drawerNavigation
})=>{
    const { colorStyle } = useColorContext();
    return <Animated.View style={[styles.Container, styles.Shadow, colorStyle]}>
        <HeaderContent screenData={screenData} drawerNavigation={drawerNavigation}/>
    </Animated.View>
}

const HeaderContent = ({
    screenData,
    drawerNavigation
})=>{
    const headertype = screenData.focusedScreen.options?.headerType;

    if(headertype == "back"){
        return <Pressable style={styles.PressableContainer} onPress={drawerNavigation.goBack}>
            <View style={[styles.Button]}>
                <Ionicons name="arrow-back" size={32}/>
            </View>
            <Text style={styles.Title}>{screenData.focusedScreen.name}</Text>
        </Pressable>
    }else{
        return <Pressable style={styles.PressableContainer} onPress={drawerNavigation.openDrawer}>
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