"use client"

import { createContext, useContext, useState } from "react"

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = (email, password) => {
    // Simple authentication logic
    if (email && password) {
      const userData = {
        id: 1,
        name: "Customer",
        email: email,
      }
      setUser(userData)
      setIsAuthenticated(true)
      localStorage.setItem("engenix-user", JSON.stringify(userData))
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem("engenix-user")
  }

  const register = (userData) => {
    // Simple registration logic
    setUser(userData)
    setIsAuthenticated(true)
    localStorage.setItem("engenix-user", JSON.stringify(userData))
    return true
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
