import { Children, createContext } from 'react';

export const UserStore = createContext();

export const contextProvider = ({ children }) => {
    usetstate
  return <UserStore.Provider>{children}</UserStore.Provider>;
};
