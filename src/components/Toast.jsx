"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

const Toast = ({ message, type = "info", onClose }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onClose, 300)
    }, 3000)

    return () => clearTimeout(timer)
  }, [onClose])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(onClose, 300)
  }

  const bgColor =
    {
      success: "bg-green-500",
      error: "bg-red-500",
      warning: "bg-yellow-500",
      info: "bg-blue-500",
    }[type] || "bg-blue-500"

  return (
    <div
      className={`fixed top-4 right-4 z-50 px-4 py-3 rounded-lg text-white shadow-lg transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
      } ${bgColor}`}
    >
      <div className="flex items-center justify-between">
        <span>{message}</span>
        <button onClick={handleClose} className="ml-4 text-white hover:text-gray-200">
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

export default Toast
