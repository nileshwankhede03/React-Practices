import { Children, createContext } from "react";

export const UserStore = createContext();

export const contextProvider = ()=>{
    return <UserStore.Provider>
        {Children}
    </UserStore.Provider>
}