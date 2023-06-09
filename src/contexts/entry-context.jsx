import React, { createContext, useContext, useState } from "react";
import Entry from "src/models/entry";

const EntryContext = createContext();

export const useEntryContext = ()=>{
    return useContext(EntryContext);
}

export const EntryProvider = ({
    children
})=>{
    const [nextId, setNextId] = useState(0);
    const [entries, setEntries] = useState([

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