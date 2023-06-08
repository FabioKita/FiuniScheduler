import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import EntryList from "./list";
import NewTask from "./create/new-task";
import NewReminder from "./create/new-reminder";
import NewActivity from "./create/new-activity";


const Stack = createStackNavigator();

const Entries = () => {
    return <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: "transparent" },
            cardStyleInterpolator:forFade
        }}
    >
        <Stack.Screen name="EntryList" component={EntryList} />
        <Stack.Screen name="NewTask" component={NewTask} />
        <Stack.Screen name="NewReminder" component={NewReminder} />
        <Stack.Screen name="NewActivity" component={NewActivity} />
    </Stack.Navigator>
}

const forFade = ({ current }) => ({
    cardStyle: {
        opacity: current.progress,
    },
});

export default Entries;