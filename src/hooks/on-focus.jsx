import { useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";

const useOnFocus = (focusCallback = ()=>{})=>{
    const focused = useIsFocused();

    useEffect(() => {
        if(focused) focusCallback();
    }, [focused]);
}

export default useOnFocus;