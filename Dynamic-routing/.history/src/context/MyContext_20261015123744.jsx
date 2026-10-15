import { createContext } from 'react';

export const MyStore = createContext();

export const contextProvider = () => {

    return <MyStore.Provider
};
