import React from "react";
import ColorTextInput from "./common/color-text-input";

const TitleInput = (props)=>{
    return <ColorTextInput {...props} placeholder={"Title"} style={{fontSize:16}}/>
}

export default TitleInput;