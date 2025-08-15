"use client"

import { useState } from "react"
import { ShoppingCart, Star, Filter, Search } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { useCart } from "../contexts/CartContext"
import { useProducts } from "../contexts/ProductContext"
import { formatCurrency } from "../lib/utils"

const Products = () => {
  const { addToCart } = useCart()
  const { products, getCategories } = useProducts()
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const categories = getCategories()

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleAddToCart = (product) => {
    if (product.inStock && product.stockQuantity > 0) {
      addToCart(product)
      alert(`${product.name} added to cart!`)
    } else {
      alert("Sorry, this product is currently out of stock.")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Our Products</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Electrical Products</h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-200">
              Browse our comprehensive collection of high-quality electrical products from trusted brands for all your
              electrical needs.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <Filter className="h-5 w-5 text-gray-600 mr-2" />
                <span className="text-gray-700 font-medium">Filter:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-primary-600" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <p className="text-gray-600">
                  Showing {filteredProducts.length} of {products.length} products
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <Card
                    key={product.id}
                    className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="relative">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      {product.originalPrice > product.price && (
                        <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-lg text-sm font-medium">
                          {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                        </div>
                      )}
                      {(!product.inStock || product.stockQuantity === 0) && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <Badge variant="destructive" className="text-white">
                            Out of Stock
                          </Badge>
                        </div>
                      )}
                    </div>

                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{product.brand}</Badge>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                          <span className="text-sm text-gray-400 ml-1">({product.reviews})</span>
                        </div>
                      </div>
                      <CardTitle className="text-lg leading-tight">{product.name}</CardTitle>
                      <CardDescription className="text-sm line-clamp-2">{product.description}</CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {product.features.slice(0, 2).map((feature, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                          {product.features.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{product.features.length - 2} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="text-xs text-gray-500">
                          Stock: {product.stockQuantity > 0 ? `${product.stockQuantity} available` : "Out of stock"}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xl font-bold text-primary-600">{formatCurrency(product.price)}</div>
                          {product.originalPrice > product.price && (
                            <div className="text-sm text-gray-500 line-through">
                              {formatCurrency(product.originalPrice)}
                            </div>
                          )}
                        </div>
                        <Button
                          onClick={() => handleAddToCart(product)}
                          className="bg-primary-600 hover:bg-primary-700"
                          size="sm"
                          disabled={!product.inStock || product.stockQuantity === 0}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          {product.inStock && product.stockQuantity > 0 ? "Add to Cart" : "Out of Stock"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Products?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with leading brands to bring you the highest quality electrical products at competitive prices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Genuine Products",
                description: "All products are sourced directly from authorized dealers and manufacturers.",
                icon: "🏆",
              },
              {
                title: "Best Prices",
                description: "Competitive pricing with regular discounts and special offers for bulk orders.",
                icon: "💰",
              },
              {
                title: "Fast Delivery",
                description: "Quick and reliable delivery across India with real-time tracking information.",
                icon: "🚚",
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
