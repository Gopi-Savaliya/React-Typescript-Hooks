import { createContext, useState } from "react";

export type AuthUser = {
    Name: string
    Email: string
}

type UserContextType = {
    user: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

type UserContextProvideProps = {
    children: React.ReactNode
}

export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({ children }: UserContextProvideProps) => {
    const [user, setUser] = useState<AuthUser | null>(null);
    return (
      <UserContext.Provider value={{ user, setUser }}>{ children }</UserContext.Provider>
    )
  }
