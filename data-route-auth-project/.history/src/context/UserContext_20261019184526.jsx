import { createContext } from "react";

export const UserStore = createContext();

export const contextProvider = ()=>{
    return <UserStore.Provider>
        
    </UserStore.Provider>
}