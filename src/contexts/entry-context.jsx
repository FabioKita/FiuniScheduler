import React, { createContext, useContext, useState } from "react";
import Entry from "src/models/entry";

const EntryContext = createContext();

export const useEntryContext = ()=>{
    return useContext(EntryContext);
}

const TEST_ENTRY = new Entry({title:"Lorem Ipsum", description:"Lorem Ipsum Dolor Sit Amet."})

export const EntryProvider = ({
    children
})=>{
    const [nextId, setNextId] = useState(0);
    const [entries, setEntries] = useState([
        new Entry({...TEST_ENTRY, id:0}),
        new Entry({...TEST_ENTRY, id:1}),
        new Entry({...TEST_ENTRY, id:2})
    ]);

    const addEntry = (data)=>{
        let entry = new Entry({...data, id: nextId});
        setNextId(nid=>nid+1);
        setEntries([...entries, entry]);
    }

    const removeEntry = (id)=>{
        setEntries(entries.filter(entry=>entry.id != id));
    }

    const getEntry = (id)=>{
        return entries.find(entry =>entry.id == id);
    }

    const setEntry = (id, data)=>{
        setEntries(entries.map(entry=>{
            if(entry.id != id) return entry;
            else return new Entry({...entry, ...data, id});
        }))
    }

    return <EntryContext.Provider value={{
        entries,
        addEntry,
        removeEntry,
        getEntry,
        setEntry
    }}>
        {children}
    </EntryContext.Provider>
}