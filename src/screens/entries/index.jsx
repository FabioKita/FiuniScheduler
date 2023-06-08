import React from "react";
import EntryNavigator from "src/navigators/entry-navigator";

import ColorContainer from "src/components/color-container";
import useSetColor from "src/hooks/use-set-color";
import FocusFade from "src/components/wrappers/focus-fade";

const Entries = ()=>{
    useSetColor({mainColor:"#E9887F"})

    return <ColorContainer>
        <FocusFade>
            <EntryNavigator/>
        </FocusFade>
    </ColorContainer>
}

export default Entries;