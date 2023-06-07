import React, { useEffect, useState } from "react";

const DelayRenderWrapper = ({
    children
})=>{
    const [show, setShow] = useState(false);

    useEffect(()=>{
        setShow(true);
    },[]);

    if(!show){
        return <></>
    }else{
        return children;
    }
}

export default DelayRenderWrapper;