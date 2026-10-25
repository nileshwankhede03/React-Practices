import { Children, createContext } from 'react';

export const UserStore = createContext();

{
  children;
}
export const contextProvider = () => {
  return <UserStore.Provider>{children}</UserStore.Provider>;
};
