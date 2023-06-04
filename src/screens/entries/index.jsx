import React from "react";
import EntryNavigator from "src/navigators/entry-navigator";
import { BackHandler } from "react-native";
import useOnFocus from "src/hooks/on-focus";

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

    return <EntryNavigator/>
}

export default Entries;