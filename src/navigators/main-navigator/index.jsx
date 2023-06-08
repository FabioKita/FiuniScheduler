import React, { useMemo, useState } from "react";
import DrawerNavigator from "./drawer-navigator";

//Root
import Home from "src/screens/home";
import Entries from "src/screens/entries";
import Configurations from "src/screens/configurations";

//New Task
import NewTask from "src/screens/new-entry/new-task";
import NewReminder from "src/screens/new-entry/new-reminder";
import NewActivity from "src/screens/new-entry/new-activity";

const MainNavigator = ()=>{
    const screens = useMemo(()=>[
        {name:"Home", component:Home},
        {name:"Entries", component:Entries},
        {name:"Configurations", component:Configurations, options:{
            headerType:"back"
        }},
        {name:"New Task", component:NewTask, options:{
            showInDrawer:false,
            headerType:"back"
        }},
        {name:"New Reminder", component:NewReminder, options:{
            showInDrawer:false,
            headerType:"back"
        }},
        {name:"New Activity", component:NewActivity, options:{
            showInDrawer:false,
            headerType:"back"
        }},
    ], []);

    const [focused, setFocused] = useState(0);

    const setFocusedIndex = (index)=>{
        setFocused(index);
    }

    const screenData = {
        screens,
        focusedIndex:focused,
        focusedScreen:screens[focused],
        setFocusedIndex
    };

    return <DrawerNavigator screenData={screenData}/>
}

export default MainNavigator;