"use client"

import { createContext, useContext, useState, useEffect } from "react"

const ProductContext = createContext()

export const useProducts = () => {
  const context = useContext(ProductContext)
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider")
  }
  return context
}

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  // Initialize with default products
  useEffect(() => {
    const defaultProducts = [
      {
        id: 1,
        name: "Power Transformer 1000 KVA",
        price: 450000,
        originalPrice: 520000,
        category: "Transformers",
        brand: "ABB",
        rating: 4.8,
        reviews: 45,
        image: "/electrical-engineering-power-systems.png",
        description: "High-efficiency power transformer for industrial applications with advanced cooling system.",
        features: ["1000 KVA Capacity", "Oil Cooled", "High Efficiency", "Low Maintenance"],
        inStock: true,
        stockQuantity: 5,
      },
      {
        id: 2,
        name: "DG Set 500 KVA Cummins",
        price: 850000,
        originalPrice: 950000,
        category: "DG Sets",
        brand: "Cummins",
        rating: 4.9,
        reviews: 32,
        image: "/industrial-automation-factory.png",
        description: "Reliable diesel generator set with automatic start and advanced control panel.",
        features: ["500 KVA Output", "Auto Start", "Digital Control", "Fuel Efficient"],
        inStock: true,
        stockQuantity: 3,
      },
      {
        id: 3,
        name: "Air Circuit Breaker 1600A",
        price: 125000,
        originalPrice: 145000,
        category: "Circuit Breakers",
        brand: "Schneider",
        rating: 4.7,
        reviews: 67,
        image: "/electrical-installation.png",
        description: "High-performance air circuit breaker with electronic trip unit and communication interface.",
        features: ["1600A Rating", "Electronic Trip", "Communication Ready", "Compact Design"],
        inStock: true,
        stockQuantity: 8,
      },
    ]

    const savedProducts = localStorage.getItem("products")
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts))
    } else {
      setProducts(defaultProducts)
      localStorage.setItem("products", JSON.stringify(defaultProducts))
    }
  }, [])

  // Save to localStorage whenever products change
  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem("products", JSON.stringify(products))
    }
  }, [products])

  const addProduct = (product) => {
    const newProduct = {
      ...product,
      id: Date.now(),
      rating: 4.5,
      reviews: 0,
      inStock: true,
    }
    setProducts((prev) => [...prev, newProduct])
  }

  const updateProduct = (id, updatedProduct) => {
    setProducts((prev) => prev.map((product) => (product.id === id ? { ...product, ...updatedProduct } : product)))
  }

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id))
  }

  const getCategories = () => {
    const categories = ["All", ...new Set(products.map((product) => product.category))]
    return categories
  }

  const value = {
    products,
    addProduct,
    updateProduct,
    deleteProduct,
    getCategories,
  }

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}
