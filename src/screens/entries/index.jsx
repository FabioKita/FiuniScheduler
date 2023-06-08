import React from "react";
import EntryNavigator from "src/navigators/entry-navigator";
import { BackHandler } from "react-native";
import useOnFocus from "src/hooks/on-focus";
import ColorContainer from "src/components/color-container";
import DelayRenderer from "src/components/wrappers/delay-renderer";

const Entries = ({
    navigation
})=>{
    useOnFocus(()=>{
        const onBackPress = ()=>{
            navigation.popToTop();
            return true;
        }

        const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress);
        return () => subscription.remove();
    }, []);

    return <ColorContainer>
        <EntryNavigator/>
    </ColorContainer>
}

export default Entries;