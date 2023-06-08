import React from "react";
import { Text } from "react-native";
import ColorContainer from "src/components/color/color-container";
import useSetColor from "src/hooks/use-set-color";

const NewReminder = ()=>{
    useSetColor({mainColor:"#92F598"})

    return <ColorContainer>
        <Text>New Reminder</Text>
    </ColorContainer>
}

export default NewReminder;