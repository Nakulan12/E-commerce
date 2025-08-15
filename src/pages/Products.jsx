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

  // Enhanced product data based on Raghav Electric profile
  const enhancedProducts = [
    // Electrical Supplies
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
    {
      id: 4,
      name: "MCCB 250A Siemens",
      price: 15500,
      originalPrice: 18000,
      category: "Circuit Breakers",
      brand: "Siemens",
      rating: 4.6,
      reviews: 89,
      image: "/electrical-installation.png",
      description: "Molded case circuit breaker with thermal magnetic protection and high breaking capacity.",
      features: ["250A Rating", "Thermal Magnetic", "High Breaking Capacity", "Compact Size"],
      inStock: true,
      stockQuantity: 25,
    },
    {
      id: 5,
      name: "Contactor 95A ABB",
      price: 3200,
      originalPrice: 3800,
      category: "Contactors & Relays",
      brand: "ABB",
      rating: 4.5,
      reviews: 156,
      image: "/electrical-installation.png",
      description: "High-performance contactor for motor control applications with auxiliary contacts.",
      features: ["95A Rating", "AC3 Duty", "Auxiliary Contacts", "Long Life"],
      inStock: true,
      stockQuantity: 50,
    },
    {
      id: 6,
      name: "HT Cable 11KV XLPE",
      price: 850,
      originalPrice: 950,
      category: "Cables",
      brand: "Polycab",
      rating: 4.4,
      reviews: 78,
      image: "/copper-wire.png",
      description: "High tension XLPE insulated cable for power transmission applications per meter.",
      features: ["11KV Rating", "XLPE Insulation", "Aluminum Conductor", "Weather Resistant"],
      inStock: true,
      stockQuantity: 1000,
    },
    {
      id: 7,
      name: "LT Control Cable 4 Core",
      price: 125,
      originalPrice: 145,
      category: "Cables",
      brand: "Havells",
      rating: 4.3,
      reviews: 234,
      image: "/copper-wire.png",
      description: "Multi-core control cable for instrumentation and control applications per meter.",
      features: ["4 Core", "PVC Insulated", "Flexible", "Control Applications"],
      inStock: true,
      stockQuantity: 2000,
    },
    {
      id: 8,
      name: "HT Cable Termination Kit 11KV",
      price: 4500,
      originalPrice: 5200,
      category: "Cable Termination",
      brand: "3M",
      rating: 4.7,
      reviews: 43,
      image: "/electrical-installation.png",
      description: "Complete HT cable termination kit with all accessories for 11KV applications.",
      features: ["11KV Rating", "Complete Kit", "Weather Proof", "Easy Installation"],
      inStock: true,
      stockQuantity: 15,
    },
    {
      id: 9,
      name: "Cable Tray Perforated 300mm",
      price: 450,
      originalPrice: 520,
      category: "Cable Trays",
      brand: "Legrand",
      rating: 4.2,
      reviews: 67,
      image: "/electrical-installation.png",
      description: "Galvanized steel perforated cable tray for cable management systems per meter.",
      features: ["300mm Width", "Perforated", "Galvanized Steel", "Modular System"],
      inStock: true,
      stockQuantity: 200,
    },
    {
      id: 10,
      name: "Lightning Arrestor 11KV",
      price: 8500,
      originalPrice: 9500,
      category: "Lightning Protection",
      brand: "ABB",
      rating: 4.8,
      reviews: 34,
      image: "/electrical-installation.png",
      description: "Polymer housed lightning arrestor for 11KV system protection.",
      features: ["11KV Rating", "Polymer Housing", "High Performance", "Weather Resistant"],
      inStock: true,
      stockQuantity: 12,
    },
    // Automation Supplies
    {
      id: 11,
      name: "VFD 30HP Schneider",
      price: 45000,
      originalPrice: 52000,
      category: "Drives",
      brand: "Schneider",
      rating: 4.9,
      reviews: 56,
      image: "/industrial-automation-factory.png",
      description: "Variable frequency drive for motor speed control with advanced features.",
      features: ["30HP Rating", "Vector Control", "Built-in PLC", "Communication Ready"],
      inStock: true,
      stockQuantity: 8,
    },
    {
      id: 12,
      name: "PLC Siemens S7-1200",
      price: 25000,
      originalPrice: 28000,
      category: "PLC",
      brand: "Siemens",
      rating: 4.8,
      reviews: 89,
      image: "/smart-city-infrastructure.png",
      description: "Compact PLC with integrated I/O and communication interfaces for automation.",
      features: ["Compact Design", "Integrated I/O", "Ethernet Port", "Programming Software"],
      inStock: true,
      stockQuantity: 15,
    },
    {
      id: 13,
      name: "UPS 10KVA Online",
      price: 85000,
      originalPrice: 95000,
      category: "UPS",
      brand: "APC",
      rating: 4.7,
      reviews: 67,
      image: "/electrical-installation.png",
      description: "Online UPS system with pure sine wave output and battery backup.",
      features: ["10KVA Capacity", "Online Type", "Pure Sine Wave", "LCD Display"],
      inStock: true,
      stockQuantity: 6,
    },
    {
      id: 14,
      name: "SMPS 24V 10A",
      price: 3500,
      originalPrice: 4000,
      category: "Power Supply",
      brand: "Mean Well",
      rating: 4.6,
      reviews: 123,
      image: "/electrical-installation.png",
      description: "Switched mode power supply for industrial automation and control systems.",
      features: ["24V Output", "10A Current", "High Efficiency", "Compact Size"],
      inStock: true,
      stockQuantity: 30,
    },
    {
      id: 15,
      name: "Safety Light Curtain",
      price: 15000,
      originalPrice: 17500,
      category: "Safety Equipment",
      brand: "Sick",
      rating: 4.8,
      reviews: 45,
      image: "/electrical-installation.png",
      description: "Type 4 safety light curtain for machine safety applications.",
      features: ["Type 4 Safety", "600mm Height", "Muting Function", "IP65 Rating"],
      inStock: true,
      stockQuantity: 10,
    },
  ]

  const categories = [
    "All",
    "Transformers",
    "DG Sets",
    "Circuit Breakers",
    "Contactors & Relays",
    "Cables",
    "Cable Termination",
    "Cable Trays",
    "Lightning Protection",
    "Drives",
    "PLC",
    "UPS",
    "Power Supply",
    "Safety Equipment",
  ]

  const filteredProducts = enhancedProducts.filter((product) => {
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
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Our Products</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Industrial Electrical Products</h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-200">
              Comprehensive range of electrical supplies and automation products for cement plants, steel industries,
              oil & gas facilities, and industrial automation systems.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <Card className="text-center p-4">
                <h3 className="font-semibold text-blue-600">Electrical Supplies</h3>
                <p className="text-sm text-gray-600">Transformers, DG Sets, Circuit Breakers, Cables</p>
              </Card>
              <Card className="text-center p-4">
                <h3 className="font-semibold text-blue-600">Automation Supplies</h3>
                <p className="text-sm text-gray-600">Drives, PLC, UPS, Power Supply</p>
              </Card>
              <Card className="text-center p-4">
                <h3 className="font-semibold text-blue-600">Safety Equipment</h3>
                <p className="text-sm text-gray-600">Safety Switches, Sensors, Light Curtains</p>
              </Card>
              <Card className="text-center p-4">
                <h3 className="font-semibold text-blue-600">Instrumentation</h3>
                <p className="text-sm text-gray-600">RFID, Encoders, Communication Devices</p>
              </Card>
            </div>
          </div>

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
                {categories.slice(0, 6).map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-blue-600" : ""}
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
                  Showing {filteredProducts.length} of {enhancedProducts.length} products
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
                          <div className="text-xl font-bold text-blue-600">{formatCurrency(product.price)}</div>
                          {product.originalPrice > product.price && (
                            <div className="text-sm text-gray-500 line-through">
                              {formatCurrency(product.originalPrice)}
                            </div>
                          )}
                        </div>
                        <Button
                          onClick={() => handleAddToCart(product)}
                          className="bg-blue-600 hover:bg-blue-700"
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
              We supply all types of industrial electrical components and consumables from trusted manufacturers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Industrial Grade Quality",
                description:
                  "All products meet industrial standards for cement plants, steel industries, and heavy machinery.",
                icon: "🏭",
              },
              {
                title: "Comprehensive Range",
                description: "From HT/LT cables to automation supplies, we have everything for your industrial needs.",
                icon: "⚡",
              },
              {
                title: "Technical Support",
                description: "Expert technical support and consultation for product selection and application.",
                icon: "🔧",
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
