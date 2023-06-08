import React from "react";
import EntryNavigator from "src/navigators/entry-navigator";

import ColorContainer from "src/components/color-container";
import useSetColor from "src/hooks/use-set-color";
import FocusFade from "src/components/wrappers/focus-fade";
import FocusDelay from "src/components/wrappers/focus-delay";

const Entries = ()=>{
    useSetColor({mainColor:"#E9887F"})

    return <ColorContainer>
        <FocusDelay >
            <FocusFade >
                <EntryNavigator/>
            </FocusFade>
        </FocusDelay>
    </ColorContainer>
}

export default Entries;