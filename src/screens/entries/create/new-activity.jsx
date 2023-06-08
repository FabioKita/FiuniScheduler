import React from "react";
import { Text } from "react-native";
import ColorContainer from "src/components/color/color-container";
import useSetColor from "src/hooks/use-set-color";

const NewActivity = ()=>{
    useSetColor({mainColor:"#B9B5FC"})

    return <ColorContainer>
        <Text>New Activity</Text>
    </ColorContainer>
}

export default NewActivity;