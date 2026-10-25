import { createContext, useState } from 'react';

export const UserStore = createContext();

export const contextProvider = ({ children }) => {
  const [first, setfirst] = useState(second)
  return <UserStore.Provider>{children}</UserStore.Provider>;
};
