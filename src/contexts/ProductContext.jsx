
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

  useEffect(() => {
    const savedProducts = localStorage.getItem("engenix-products")
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts))
    } else {
      const defaultProducts = [
        {
          id: 1,
          name: "Philips Smart LED Bulb 9W",
          price: 899,
          originalPrice: 1299,
          category: "Lighting",
          brand: "Philips",
          rating: 4.5,
          reviews: 128,
          image: "/led-bulb.png",
          description: "Energy-efficient smart LED bulb with WiFi connectivity and 16 million color options.",
          features: ["WiFi Enabled", "Voice Control", "16 Million Colors", "Energy Efficient"],
          inStock: true,
          stockQuantity: 50,
        },
        {
          id: 2,
          name: "Schneider Electric MCB 32A",
          price: 245,
          originalPrice: 320,
          category: "Electrical Components",
          brand: "Schneider",
          rating: 4.8,
          reviews: 89,
          image: "/electrical-installation.png",
          description: "High-quality miniature circuit breaker for residential and commercial applications.",
          features: ["32A Rating", "C-Curve", "DIN Rail Mount", "ISI Certified"],
          inStock: true,
          stockQuantity: 75,
        },
        {
          id: 3,
          name: "Havells Ceiling Fan 1200mm",
          price: 3299,
          originalPrice: 4199,
          category: "Fans",
          brand: "Havells",
          rating: 4.3,
          reviews: 256,
          image: "/simple-ceiling-fan.png",
          description: "Premium ceiling fan with decorative design and high air delivery.",
          features: ["1200mm Sweep", "High Speed", "Decorative Design", "2 Year Warranty"],
          inStock: true,
          stockQuantity: 30,
        },
        {
          id: 4,
          name: "Legrand Modular Switch 16A",
          price: 125,
          originalPrice: 180,
          category: "Switches & Sockets",
          brand: "Legrand",
          rating: 4.6,
          reviews: 94,
          image: "/electrical-installation.png",
          description: "Premium modular switch with elegant design and superior quality.",
          features: ["16A Rating", "Modular Design", "Easy Installation", "Premium Finish"],
          inStock: true,
          stockQuantity: 100,
        },
        {
          id: 5,
          name: "Polycab Copper Wire 2.5 sq mm",
          price: 1850,
          originalPrice: 2100,
          category: "Wires & Cables",
          brand: "Polycab",
          rating: 4.7,
          reviews: 167,
          image: "/copper-wire.png",
          description: "High-grade copper wire for electrical installations with superior conductivity.",
          features: ["2.5 sq mm", "90m Length", "ISI Certified", "Fire Retardant"],
          inStock: true,
          stockQuantity: 25,
        },
      ]
      setProducts(defaultProducts)
      localStorage.setItem("engenix-products", JSON.stringify(defaultProducts))
    }
  }, [])

  const saveProducts = (updatedProducts) => {
    setProducts(updatedProducts)
    localStorage.setItem("engenix-products", JSON.stringify(updatedProducts))
  }

  const addProduct = (product) => {
    const newProduct = {
      ...product,
      id: Date.now(),
      features: Array.isArray(product.features) ? product.features : product.features.split(",").map((f) => f.trim()),
      inStock: true,
      stockQuantity: product.stockQuantity || 0,
    }
    const updatedProducts = [...products, newProduct]
    saveProducts(updatedProducts)
  }

  const updateProduct = (id, updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === id
        ? {
            ...product,
            ...updatedProduct,
            features: Array.isArray(updatedProduct.features)
              ? updatedProduct.features
              : updatedProduct.features.split(",").map((f) => f.trim()),
          }
        : product,
    )
    saveProducts(updatedProducts)
  }

  const deleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id)
    saveProducts(updatedProducts)
  }

  const getProductStats = () => {
    const total = products.length
    const inStock = products.filter((p) => p.inStock && p.stockQuantity > 0).length
    const outOfStock = products.filter((p) => !p.inStock || p.stockQuantity === 0).length
    const lowStock = products.filter((p) => p.inStock && p.stockQuantity > 0 && p.stockQuantity <= 10).length
    const totalValue = products.reduce((sum, p) => sum + p.price * p.stockQuantity, 0)

    return {
      total,
      inStock,
      outOfStock,
      lowStock,
      totalValue,
    }
  }

  const getCategories = () => {
    const categories = ["All", ...new Set(products.map((p) => p.category))]
    return categories
  }

  const getBrands = () => {
    const brands = ["All", ...new Set(products.map((p) => p.brand))]
    return brands
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        updateProduct,
        deleteProduct,
        getProductStats,
        getCategories,
        getBrands,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
