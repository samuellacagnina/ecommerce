import React, { createContext, useState, ReactNode } from "react"

interface AuthContextProps {
  userName: string
  setUserName: (name: string) => void
  password: string
  setPassword: (password: string) => void
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
)

export const AuthProvider = ({ children }: any) => {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
}
