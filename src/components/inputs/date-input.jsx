import React, { useState } from "react";
import SolidButton from "./solid-button";

const DateInput = ({
    value, 
    setValue = ()=>{}
}) => {
    const [open, setOpen] = useState(false);

    return <>
        <SolidButton onPress={()=>setOpen(true)}>Show Date</SolidButton>
    </>
}

export default DateInput