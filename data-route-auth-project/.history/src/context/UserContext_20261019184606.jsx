import { createContext, useState } from 'react';

export const UserStore = createContext();

export const contextProvider = ({ children }) => {
  use
  return <UserStore.Provider>{children}</UserStore.Provider>;
};
