import React from "react";
import { Text } from "react-native";
import ColorContainer from "src/components/color/color-container";
import useSetColor from "src/hooks/use-set-color";

const NewTask = ()=>{
    useSetColor({mainColor:"#E9887F"})

    return <ColorContainer>
        <Text>New Task</Text>
    </ColorContainer>
}

export default NewTask;