import React from "react";
import {StyleSheet, Text, Pressable, View} from "react-native"
import Animated from "react-native-reanimated";
import { useColorContext } from "src/contexts/color-context";
import Ionicons from '@expo/vector-icons/Ionicons';

const StackColorHeader = ({
    screenData,
    stackNavigation
})=>{
    const { colorStyle } = useColorContext();

    return <Animated.View style={[styles.Container, styles.Shadow, colorStyle]}>
        <Pressable style={styles.PressableContainer} onPress={()=>stackNavigation.pop()}>
            <View style={[styles.Button]}>
                <Ionicons name="arrow-back" size={32}/>
            </View>
            <Text style={styles.Title}>{screenData.focusedScreen.name}</Text>
        </Pressable>
    </Animated.View>
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

export default StackColorHeader;