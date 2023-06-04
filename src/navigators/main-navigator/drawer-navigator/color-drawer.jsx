import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import { useColorContext } from "src/contexts/color-context";

import { DrawerItem } from "@react-navigation/drawer";

const ColorDrawer = ({
    navigation,
    screens
}) => {
    const { colorStyle } = useColorContext();
    const [selected, setSelected] = useState(screens[0].name);

    return <Animated.View style={[styles.Container, colorStyle]}>
        {screens.map(screen=>{
            return <Tabs
                key={screen.name}
                label={screen.name}
                focused={screen.name == selected}
                onPress={()=>{
                    setSelected(screen.name);
                    navigation.navigate({ name: screen.name, merge: true })
                }}
            />
        })}
    </Animated.View>
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "stretch",
        paddingTop: 60
    }
})

const Tabs = ({label="", focused = false, onPress = ()=>{}})=>{
    return <DrawerItem
        label={label} 
        activeTintColor={"#000000"} 
        focused={focused} 
        onPress={onPress}
    />
}

export default ColorDrawer;