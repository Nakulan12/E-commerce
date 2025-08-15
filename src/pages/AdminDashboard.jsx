"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  Plus,
  Edit,
  Trash2,
  LogOut,
  Search,
  Filter,
  BarChart3,
  FolderOpen,
  TrendingUp,
  Settings,
  Download,
  Package,
  AlertTriangle,
  DollarSign,
} from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Label } from "../components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { useProjects } from "../contexts/ProjectContext"
import { useProducts } from "../contexts/ProductContext"
import { useAdmin } from "../contexts/AdminContext"
import { formatDate, formatCurrency } from "../lib/utils"

const AdminDashboard = () => {
  const navigate = useNavigate()
  const { projects, addProject, updateProject, deleteProject, getProjectStats, getCategories } = useProjects()
  const {
    products,
    addProduct,
    updateProduct,
    deleteProduct,
    getProductStats,
    getCategories: getProductCategories,
  } = useProducts()
  const { logout, adminUser } = useAdmin()

  const [activeTab, setActiveTab] = useState("overview")
  const [showProjectModal, setShowProjectModal] = useState(false)
  const [showProductModal, setShowProductModal] = useState(false)
  const [editingProject, setEditingProject] = useState(null)
  const [editingProduct, setEditingProduct] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("All")

  const projectStats = getProjectStats()
  const productStats = getProductStats()
  const categories = getCategories().filter((cat) => cat !== "All")
  const productCategories = getProductCategories().filter((cat) => cat !== "All")

  const [projectForm, setProjectForm] = useState({
    title: "",
    description: "",
    category: "",
    status: "Planning",
    client: "",
    duration: "",
    budget: "",
    image: "/placeholder-akwnn.png",
    technologies: "",
    features: "",
  })

  const [productForm, setProductForm] = useState({
    name: "",
    description: "",
    price: "",
    originalPrice: "",
    category: "",
    brand: "",
    image: "/led-bulb.png",
    features: "",
    stockQuantity: "",
    inStock: true,
  })

  const handleLogout = () => {
    logout()
    navigate("/admin/login")
  }

  const resetProjectForm = () => {
    setProjectForm({
      title: "",
      description: "",
      category: "",
      status: "Planning",
      client: "",
      duration: "",
      budget: "",
      image: "/placeholder-akwnn.png",
      technologies: "",
      features: "",
    })
    setEditingProject(null)
  }

  const resetProductForm = () => {
    setProductForm({
      name: "",
      description: "",
      price: "",
      originalPrice: "",
      category: "",
      brand: "",
      image: "/led-bulb.png",
      features: "",
      stockQuantity: "",
      inStock: true,
    })
    setEditingProduct(null)
  }

  const handleProjectSubmit = (e) => {
    e.preventDefault()

    const projectData = {
      ...projectForm,
      technologies: projectForm.technologies
        .split(",")
        .map((t) => t.trim())
        .filter((t) => t),
      features: projectForm.features
        .split("\n")
        .map((f) => f.trim())
        .filter((f) => f),
    }

    if (editingProject) {
      updateProject(editingProject.id, projectData)
    } else {
      addProject(projectData)
    }

    setShowProjectModal(false)
    resetProjectForm()
  }

  const handleProductSubmit = (e) => {
    e.preventDefault()

    const productData = {
      ...productForm,
      price: Number.parseFloat(productForm.price),
      originalPrice: Number.parseFloat(productForm.originalPrice) || Number.parseFloat(productForm.price),
      stockQuantity: Number.parseInt(productForm.stockQuantity) || 0,
      rating: 4.5,
      reviews: Math.floor(Math.random() * 200) + 50,
      features: productForm.features
        .split(",")
        .map((f) => f.trim())
        .filter((f) => f),
    }

    if (editingProduct) {
      updateProduct(editingProduct.id, productData)
    } else {
      addProduct(productData)
    }

    setShowProductModal(false)
    resetProductForm()
  }

  const handleEditProject = (project) => {
    setEditingProject(project)
    setProjectForm({
      title: project.title,
      description: project.description,
      category: project.category,
      status: project.status,
      client: project.client,
      duration: project.duration,
      budget: project.budget,
      image: project.image,
      technologies: project.technologies.join(", "),
      features: project.features.join("\n"),
    })
    setShowProjectModal(true)
  }

  const handleEditProduct = (product) => {
    setEditingProduct(product)
    setProductForm({
      name: product.name,
      description: product.description,
      price: product.price.toString(),
      originalPrice: product.originalPrice.toString(),
      category: product.category,
      brand: product.brand,
      image: product.image,
      features: product.features.join(", "),
      stockQuantity: product.stockQuantity.toString(),
      inStock: product.inStock,
    })
    setShowProductModal(true)
  }

  const handleDeleteProject = (projectId) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      deleteProject(projectId)
    }
  }

  const handleDeleteProduct = (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      deleteProduct(productId)
    }
  }

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === "All" || project.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesSearch
  })

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800"
      case "In Progress":
        return "bg-blue-100 text-blue-800"
      case "Planning":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const ProjectModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">{editingProject ? "Edit Project" : "Add New Project"}</h2>
        </div>

        <form onSubmit={handleProjectSubmit} className="p-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="title">Project Title *</Label>
              <Input
                id="title"
                required
                value={projectForm.title}
                onChange={(e) => setProjectForm((prev) => ({ ...prev, title: e.target.value }))}
              />
            </div>
            <div>
              <Label htmlFor="category">Category *</Label>
              <select
                id="category"
                required
                value={projectForm.category}
                onChange={(e) => setProjectForm((prev) => ({ ...prev, category: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Select Category</option>
                <option value="Infrastructure">Infrastructure</option>
                <option value="Industrial">Industrial</option>
                <option value="Renewable Energy">Renewable Energy</option>
                <option value="Commercial">Commercial</option>
                <option value="Residential">Residential</option>
              </select>
            </div>
          </div>

          <div>
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              required
              value={projectForm.description}
              onChange={(e) => setProjectForm((prev) => ({ ...prev, description: e.target.value }))}
              rows={3}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="status">Status</Label>
              <select
                id="status"
                value={projectForm.status}
                onChange={(e) => setProjectForm((prev) => ({ ...prev, status: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="Planning">Planning</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div>
              <Label htmlFor="duration">Duration</Label>
              <Input
                id="duration"
                value={projectForm.duration}
                onChange={(e) => setProjectForm((prev) => ({ ...prev, duration: e.target.value }))}
                placeholder="e.g., 12 months"
              />
            </div>
            <div>
              <Label htmlFor="budget">Budget</Label>
              <Input
                id="budget"
                value={projectForm.budget}
                onChange={(e) => setProjectForm((prev) => ({ ...prev, budget: e.target.value }))}
                placeholder="e.g., ₹1.5 Crores"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="client">Client</Label>
            <Input
              id="client"
              value={projectForm.client}
              onChange={(e) => setProjectForm((prev) => ({ ...prev, client: e.target.value }))}
            />
          </div>

          <div>
            <Label htmlFor="technologies">Technologies (comma-separated)</Label>
            <Input
              id="technologies"
              value={projectForm.technologies}
              onChange={(e) => setProjectForm((prev) => ({ ...prev, technologies: e.target.value }))}
              placeholder="React, Node.js, MongoDB"
            />
          </div>

          <div>
            <Label htmlFor="features">Key Features (one per line)</Label>
            <Textarea
              id="features"
              value={projectForm.features}
              onChange={(e) => setProjectForm((prev) => ({ ...prev, features: e.target.value }))}
              rows={4}
              placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
            />
          </div>

          <div className="flex justify-end space-x-3 pt-4 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setShowProjectModal(false)
                resetProjectForm()
              }}
            >
              Cancel
            </Button>
            <Button type="submit">{editingProject ? "Update Project" : "Add Project"}</Button>
          </div>
        </form>
      </div>
    </div>
  )

  const ProductModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">{editingProduct ? "Edit Product" : "Add New Product"}</h2>
        </div>

        <form onSubmit={handleProductSubmit} className="p-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Product Name *</Label>
              <Input
                id="name"
                required
                value={productForm.name}
                onChange={(e) => setProductForm((prev) => ({ ...prev, name: e.target.value }))}
              />
            </div>
            <div>
              <Label htmlFor="brand">Brand *</Label>
              <Input
                id="brand"
                required
                value={productForm.brand}
                onChange={(e) => setProductForm((prev) => ({ ...prev, brand: e.target.value }))}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              required
              value={productForm.description}
              onChange={(e) => setProductForm((prev) => ({ ...prev, description: e.target.value }))}
              rows={3}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="price">Price (₹) *</Label>
              <Input
                id="price"
                type="number"
                required
                value={productForm.price}
                onChange={(e) => setProductForm((prev) => ({ ...prev, price: e.target.value }))}
              />
            </div>
            <div>
              <Label htmlFor="originalPrice">Original Price (₹)</Label>
              <Input
                id="originalPrice"
                type="number"
                value={productForm.originalPrice}
                onChange={(e) => setProductForm((prev) => ({ ...prev, originalPrice: e.target.value }))}
              />
            </div>
            <div>
              <Label htmlFor="stockQuantity">Stock Quantity *</Label>
              <Input
                id="stockQuantity"
                type="number"
                required
                value={productForm.stockQuantity}
                onChange={(e) => setProductForm((prev) => ({ ...prev, stockQuantity: e.target.value }))}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="category">Category *</Label>
            <select
              id="category"
              required
              value={productForm.category}
              onChange={(e) => setProductForm((prev) => ({ ...prev, category: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Select Category</option>
              <option value="Lighting">Lighting</option>
              <option value="Electrical Components">Electrical Components</option>
              <option value="Fans">Fans</option>
              <option value="Switches & Sockets">Switches & Sockets</option>
              <option value="Wires & Cables">Wires & Cables</option>
              <option value="Protection Devices">Protection Devices</option>
              <option value="Automation">Automation</option>
            </select>
          </div>

          <div>
            <Label htmlFor="features">Features (comma-separated)</Label>
            <Input
              id="features"
              value={productForm.features}
              onChange={(e) => setProductForm((prev) => ({ ...prev, features: e.target.value }))}
              placeholder="Feature 1, Feature 2, Feature 3"
            />
          </div>

          <div>
            <Label htmlFor="image">Image Path</Label>
            <Input
              id="image"
              value={productForm.image}
              onChange={(e) => setProductForm((prev) => ({ ...prev, image: e.target.value }))}
              placeholder="/led-bulb.png"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="inStock"
              checked={productForm.inStock}
              onChange={(e) => setProductForm((prev) => ({ ...prev, inStock: e.target.checked }))}
              className="rounded"
            />
            <Label htmlFor="inStock">In Stock</Label>
          </div>

          <div className="flex justify-end space-x-3 pt-4 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setShowProductModal(false)
                resetProductForm()
              }}
            >
              Cancel
            </Button>
            <Button type="submit">{editingProduct ? "Update Product" : "Add Product"}</Button>
          </div>
        </form>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-semibold text-gray-900">Admin Dashboard</h1>
              <Badge variant="outline">Engenix</Badge>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">{adminUser?.name?.charAt(0) || "A"}</span>
                </div>
                <span className="text-sm text-gray-700">{adminUser?.name}</span>
              </div>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {[
              { id: "overview", label: "Overview", icon: BarChart3 },
              { id: "projects", label: "Projects", icon: FolderOpen },
              { id: "products", label: "Products", icon: Package },
              { id: "settings", label: "Settings", icon: Settings },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === tab.id ? "bg-primary-100 text-primary-700" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Projects</p>
                      <p className="text-2xl font-bold text-gray-900">{projectStats.total}</p>
                    </div>
                    <FolderOpen className="h-8 w-8 text-primary-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Products</p>
                      <p className="text-2xl font-bold text-gray-900">{productStats.total}</p>
                    </div>
                    <Package className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Low Stock Items</p>
                      <p className="text-2xl font-bold text-orange-600">{productStats.lowStock}</p>
                    </div>
                    <AlertTriangle className="h-8 w-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Inventory Value</p>
                      <p className="text-2xl font-bold text-green-600">{formatCurrency(productStats.totalValue)}</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Projects</CardTitle>
                  <CardDescription>Latest project updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {projects.slice(0, 5).map((project) => (
                      <div key={project.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div>
                            <h4 className="font-medium text-gray-900">{project.title}</h4>
                            <p className="text-sm text-gray-500">{project.client}</p>
                          </div>
                        </div>
                        <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Low Stock Products</CardTitle>
                  <CardDescription>Products that need restocking</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {products
                      .filter((p) => p.stockQuantity <= 10)
                      .slice(0, 5)
                      .map((product) => (
                        <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <img
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              className="w-12 h-12 rounded-lg object-cover"
                            />
                            <div>
                              <h4 className="font-medium text-gray-900">{product.name}</h4>
                              <p className="text-sm text-gray-500">{product.brand}</p>
                            </div>
                          </div>
                          <Badge variant="destructive">Stock: {product.stockQuantity}</Badge>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Projects Tab */}
        {activeTab === "projects" && (
          <div className="space-y-6">
            {/* Projects Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Projects Management</h2>
                <p className="text-gray-600">Manage your engineering projects</p>
              </div>
              <Button onClick={() => setShowProjectModal(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add Project
              </Button>
            </div>

            {/* Filters */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search projects..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Filter className="h-4 w-4 text-gray-500" />
                    <select
                      value={filterStatus}
                      onChange={(e) => setFilterStatus(e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="All">All Status</option>
                      <option value="Planning">Planning</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Projects Table */}
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Project
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Client
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Duration
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Budget
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredProjects.map((project) => (
                        <tr key={project.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <img
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                className="w-10 h-10 rounded-lg object-cover mr-4"
                              />
                              <div>
                                <div className="text-sm font-medium text-gray-900">{project.title}</div>
                                <div className="text-sm text-gray-500">{project.category}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{project.client}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{project.duration}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{project.budget}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="flex items-center justify-end space-x-2">
                              <Button size="sm" variant="outline" onClick={() => handleEditProject(project)}>
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleDeleteProject(project.id)}
                                className="text-red-600 hover:text-red-700"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Products Tab */}
        {activeTab === "products" && (
          <div className="space-y-6">
            {/* Products Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Products Management</h2>
                <p className="text-gray-600">Manage your product inventory</p>
              </div>
              <Button onClick={() => setShowProductModal(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add Product
              </Button>
            </div>

            {/* Product Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Products</p>
                      <p className="text-2xl font-bold text-gray-900">{productStats.total}</p>
                    </div>
                    <Package className="h-8 w-8 text-primary-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">In Stock</p>
                      <p className="text-2xl font-bold text-green-600">{productStats.inStock}</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Out of Stock</p>
                      <p className="text-2xl font-bold text-red-600">{productStats.outOfStock}</p>
                    </div>
                    <AlertTriangle className="h-8 w-8 text-red-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Value</p>
                      <p className="text-2xl font-bold text-primary-600">{formatCurrency(productStats.totalValue)}</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-primary-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Search */}
            <Card>
              <CardContent className="p-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Products Table */}
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Product
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Category
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Price
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Stock
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredProducts.map((product) => (
                        <tr key={product.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <img
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                className="w-10 h-10 rounded-lg object-cover mr-4"
                              />
                              <div>
                                <div className="text-sm font-medium text-gray-900">{product.name}</div>
                                <div className="text-sm text-gray-500">{product.brand}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.category}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {formatCurrency(product.price)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.stockQuantity}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Badge
                              className={
                                product.inStock && product.stockQuantity > 0
                                  ? "bg-green-100 text-green-800"
                                  : "bg-red-100 text-red-800"
                              }
                            >
                              {product.inStock && product.stockQuantity > 0 ? "In Stock" : "Out of Stock"}
                            </Badge>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="flex items-center justify-end space-x-2">
                              <Button size="sm" variant="outline" onClick={() => handleEditProduct(product)}>
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleDeleteProduct(product.id)}
                                className="text-red-600 hover:text-red-700"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === "settings" && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Admin Settings</CardTitle>
                <CardDescription>Manage your admin account and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Account Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label>Name</Label>
                      <Input value={adminUser?.name || ""} disabled />
                    </div>
                    <div>
                      <Label>Email</Label>
                      <Input value={adminUser?.email || ""} disabled />
                    </div>
                    <div>
                      <Label>Role</Label>
                      <Input value={adminUser?.role || ""} disabled />
                    </div>
                    <div>
                      <Label>Last Login</Label>
                      <Input value={adminUser?.loginTime ? formatDate(adminUser.loginTime) : ""} disabled />
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">System Statistics</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label>Total Projects</Label>
                      <Input value={projectStats.total} disabled />
                    </div>
                    <div>
                      <Label>Total Products</Label>
                      <Input value={productStats.total} disabled />
                    </div>
                    <div>
                      <Label>Project Completion Rate</Label>
                      <Input value={`${projectStats.completionRate}%`} disabled />
                    </div>
                    <div>
                      <Label>Inventory Value</Label>
                      <Input value={formatCurrency(productStats.totalValue)} disabled />
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Actions</h3>
                  <div className="flex space-x-4">
                    <Button variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Export Data
                    </Button>
                    <Button variant="outline">
                      <Settings className="h-4 w-4 mr-2" />
                      System Settings
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Modals */}
      {showProjectModal && <ProjectModal />}
      {showProductModal && <ProductModal />}
    </div>
  )
}

export default AdminDashboard
