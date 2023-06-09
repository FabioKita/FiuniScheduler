import React from "react";
import ColorContainer from "src/components/color/color-container";
import useSetColor from "src/hooks/use-set-color";

const ViewTask = ()=>{
    useSetColor({ mainColor: "#E9887F" });

    return <ColorContainer>

    </ColorContainer>
}

export default ViewTask;