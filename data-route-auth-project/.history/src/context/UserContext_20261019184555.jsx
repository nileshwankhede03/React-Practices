import { Children, createContext, useState } from 'react';

export const UserStore = createContext();

export const contextProvider = ({ children }) => {
    useState
  return <UserStore.Provider>{children}</UserStore.Provider>;
};
