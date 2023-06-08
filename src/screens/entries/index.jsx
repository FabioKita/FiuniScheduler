import React from "react";

import ColorContainer from "src/components/color/color-container";
import useSetColor from "src/hooks/use-set-color";
import EntryList from "./list";



const Entries = ()=>{
    useSetColor({mainColor:"#E9887F"})

    return <ColorContainer>
        <EntryList/>
    </ColorContainer>
}

export default Entries;