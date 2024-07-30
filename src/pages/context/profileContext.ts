import { createContext } from "react"


export const profileStateContext = createContext("")
export const profileDispatchContext = createContext((newProfileState: string) => {return})