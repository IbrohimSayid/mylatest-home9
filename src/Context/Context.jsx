import { createContext } from "react";

const darkMode = createContext();

export function Provider({ children }) {
    return <darkMode.Provider value={null}>{children}</darkMode.Provider>;
}