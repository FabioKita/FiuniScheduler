import React from "react";
import { StyleSheet} from "react-native";
import Animated from "react-native-reanimated";
import { useColorContext } from "src/contexts/color-context";

import { DrawerItem } from "@react-navigation/drawer";
import { CommonActions, useRoute } from "@react-navigation/native";

const ColorDrawer = ({
    tabs = [],
    selectedTab,
    navigation
})=>{
    const { colorStyle } = useColorContext();

    const navigateTo = (to)=>{
        navigation.closeDrawer();
        navigation.navigate("Root", {screen:to})
    }

    return <Animated.View style={[styles.Container, colorStyle]}>
        {tabs.map(tab=>{
            return <DrawerItem 
                key={tab}
                activeTintColor="black"
                label={tab} 
                focused={selectedTab==tab} 
                onPress={()=>navigateTo(tab)}
            />
        })}
    </Animated.View>
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        display:"flex",
        justifyContent:"flex-start",
        alignItems:"stretch",
        paddingTop:60
    }
})

export default ColorDrawer;