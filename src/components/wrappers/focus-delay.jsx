import React, { useState } from "react";
import useOnFocus from "src/hooks/on-focus";

const FocusDelay = ({
    children,
    placeholderComponent = <></>,
    delay = 100
})=>{
    const [ready, setReady] = useState(false);

    useOnFocus(()=>{
        console.log("Focused");
        setTimeout(()=>setReady(true),delay);

        return ()=>{
            console.log("UnFocused");
            setTimeout(()=>setReady(false),delay);
        }
    },[]);

    if(!ready) return placeholderComponent;
    return children;
}

export default FocusDelay;