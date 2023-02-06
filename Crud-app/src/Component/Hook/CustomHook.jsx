import React, { useState } from 'react';

const CustomHook = (intVal) => {
    const[inps,Setinps]= useState(intVal)
   const handleChange=(e)=>{
    // console.log("handle called",inps);
    const value = e.target.value
    Setinps((...inps)=>({...inps,[e.target.name]:value}))
   }

    return {
        handleChange,
        inps,
    }
       
};

export default CustomHook;