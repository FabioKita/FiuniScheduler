import React from "react";
import ColorTextInput from "./common/color-text-input";

const DescripitionInput = ({placeholder = "Description", ...props})=>{
    return <ColorTextInput 
        {...props} 
        placeholder={placeholder}
        numberOfLines={5}
        style={{
            textAlignVertical:"top",
            fontSize:20,
            minHeight:100,
            maxHeight:140
        }}
        multiline
    />
}

export default DescripitionInput;