import React from "react";
import ColorTextInput from "./common/color-text-input";

const DescripitionInput = (props)=>{
    return <ColorTextInput 
        {...props} 
        placeholder={"Write a description..."}
        numberOfLines={5}
        style={{
            textAlignVertical:"top",
            fontSize:16,
            minHeight:100,
            maxHeight:140
        }}
        multiline
    />
}

export default DescripitionInput;