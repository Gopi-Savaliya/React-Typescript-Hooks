import { createContext } from "react";
import { theme } from './theme';

type themeContextProvideProps = {
    children: React.ReactNode
}

export const ThemeContext = createContext(theme);

export const ThemeContextProvider = ({ children }: themeContextProvideProps) => {
  return (
    <ThemeContext.Provider value={theme}>{ children }</ThemeContext.Provider>
  )
}