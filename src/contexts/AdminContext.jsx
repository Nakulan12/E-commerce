"use client"

import { createContext, useContext, useState } from "react"

const AdminContext = createContext()

export const useAdmin = () => {
  const context = useContext(AdminContext)
  if (!context) {
    throw new Error("useAdmin must be used within an AdminProvider")
  }
  return context
}

export const AdminProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [adminUser, setAdminUser] = useState(null)

  const login = (credentials) => {
    // Simple authentication - in production, this would be handled by a backend
    if (credentials.username === "admin" && credentials.password === "engenix2024") {
      const user = {
        id: 1,
        name: "Admin User",
        email: "admin@engenix.com",
        role: "Administrator",
        loginTime: new Date().toISOString(),
      }
      setIsAuthenticated(true)
      setAdminUser(user)
      localStorage.setItem("engenix-admin", JSON.stringify(user))
      return { success: true, user }
    }
    return { success: false, message: "Invalid credentials" }
  }

  const logout = () => {
    setIsAuthenticated(false)
    setAdminUser(null)
    localStorage.removeItem("engenix-admin")
  }

  const checkAuth = () => {
    const savedAdmin = localStorage.getItem("engenix-admin")
    if (savedAdmin) {
      const user = JSON.parse(savedAdmin)
      setIsAuthenticated(true)
      setAdminUser(user)
      return true
    }
    return false
  }

  return (
    <AdminContext.Provider
      value={{
        isAuthenticated,
        adminUser,
        login,
        logout,
        checkAuth,
      }}
    >
      {children}
    </AdminContext.Provider>
  )
}