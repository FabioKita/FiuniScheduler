import React from "react";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import { useColorContext } from "src/contexts/color-context";

import { DrawerItem } from "@react-navigation/drawer";

const ColorDrawer = ({
    state,
    navigation,
    descriptors,
}) => {
    const { colorStyle } = useColorContext();

    return <Animated.View style={[styles.Container, colorStyle]}>
        {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
                options.tabBarLabel !== undefined
                    ? options.tabBarLabel
                    : options.title !== undefined
                        ? options.title
                        : route.name;
            const focused = index === state.index;

            const onPress = () => {
                const event = navigation.emit({
                    type: 'drawerItemPress',
                    target: route.key,
                    canPreventDefault: true,
                });

                if (!event.defaultPrevented) {
                    focused ? navigation.closeDrawer() : navigation.navigate({ name: route.name, merge: true })
                }
            };

            return <DrawerItem 
                key={route.key} 
                label={label} 
                activeTintColor={"#000000"} 
                focused={focused} 
                onPress={onPress}
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

export default ColorDrawer;