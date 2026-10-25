import { Children, createContext } from 'react';

export const UserStore = createContext();

export const contextProvider = ({ children }) => {
  return <UserStore.Provider>{children}</UserStore.Provider>;
};
