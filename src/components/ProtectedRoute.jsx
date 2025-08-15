"use client"

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAdmin } from "../contexts/AdminContext"

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, checkAuth } = useAdmin()
  const navigate = useNavigate()

  useEffect(() => {
    const isAuth = checkAuth()
    if (!isAuth) {
      navigate("/admin/login")
    }
  }, [checkAuth, navigate])

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Checking authentication...</p>
        </div>
      </div>
    )
  }

  return children
}

export default ProtectedRoute
