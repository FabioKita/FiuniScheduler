import React, { useEffect } from "react";
import { useColorContext } from "src/contexts/color-context";
import { useIsFocused } from "@react-navigation/native";
import useOnFocus from "./on-focus";

const useSetColor = ({
    mainColor = "#ffffff",
    darkColor,
    lightColor,
    duration = 250
})=>{
    const { setColor } = useColorContext();

    useOnFocus(()=>{
        setColor({
            mainColorString:mainColor,
            darkColorString:darkColor,
            lightColorString:lightColor,
            duration
        });
    },[])
}

export default useSetColor;