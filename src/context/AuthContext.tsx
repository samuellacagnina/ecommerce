import { createContext, useState, ReactNode, PropsWithChildren, useContext } from "react"

interface AuthContextProps {
  userName: string
  setUserName: (name: string) => void
  password: string
  setPassword: (password: string) => void
}

const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
)

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  return(
    <AuthContext.Provider value={{userName, setUserName, password, setPassword}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
