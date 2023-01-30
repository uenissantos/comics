import { createContext } from "react";
import React from "react";


export const MyContext= createContext()




export const  ContextSearch= ({children}) => {
return (
<MyContext.Provider value={data}>
    {children}
</MyContext.Provider>

)
};