import React, {createContext, useContext} from "react";

const colorContext = createContext();

export const useColorContext = ()=>{
    return useContext(colorContext);
}

export const ColorProvider = ({
    children
})=>{
    return <colorContext.Provider >
        {children}
    </colorContext.Provider>
}