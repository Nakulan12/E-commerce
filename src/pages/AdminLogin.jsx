"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Eye, EyeOff, Shield, Zap } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { useAdmin } from "../contexts/AdminContext"

const AdminLogin = () => {
  const navigate = useNavigate()
  const { login, isAuthenticated, checkAuth } = useAdmin()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })
  const [error, setError] = useState("")

  useEffect(() => {
    if (checkAuth()) {
      navigate("/admin/dashboard")
    }
  }, [checkAuth, navigate])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    setError("")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const result = login(formData)

    if (result.success) {
      navigate("/admin/dashboard")
    } else {
      setError(result.message)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 to-primary-700 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="bg-white p-3 rounded-lg">
              <Zap className="h-8 w-8 text-primary-600" />
            </div>
            <span className="text-3xl font-bold text-white">Engenix</span>
          </div>
          <h2 className="text-3xl font-bold text-white">Admin Portal</h2>
          <p className="mt-2 text-gray-200">Sign in to access the admin dashboard</p>
        </div>

        <Card className="bg-white/95 backdrop-blur">
          <CardHeader>
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-primary-600" />
            </div>
            <CardTitle className="text-center text-2xl">Admin Login</CardTitle>
            <CardDescription className="text-center">Enter your admin credentials to continue</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  required
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter admin username"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative mt-1">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter admin password"
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">{error}</div>
              )}

              <Button type="submit" className="w-full bg-primary-600 hover:bg-primary-700">
                Sign In to Dashboard
              </Button>
            </form>

            <div className="mt-6 text-center">
              <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded-md text-sm">
                <p className="font-medium">Demo Credentials:</p>
                <p>
                  Username: <code className="bg-blue-100 px-1 rounded">admin</code>
                </p>
                <p>
                  Password: <code className="bg-blue-100 px-1 rounded">engenix2024</code>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default AdminLogin
