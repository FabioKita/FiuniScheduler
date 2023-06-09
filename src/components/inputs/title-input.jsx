import React from "react";
import ColorTextInput from "./common/color-text-input";

const TitleInput = ({placeholder = "Title", ...props})=>{
    return <ColorTextInput {...props} placeholder={placeholder} style={{fontSize:20}}/>
}

export default TitleInput;