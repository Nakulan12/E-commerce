import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ProjectProvider } from "./contexts/ProjectContext"
import { ProductProvider } from "./contexts/ProductContext"
import { AdminProvider } from "./contexts/AdminContext"
import { AuthProvider } from "./contexts/AuthContext"
import { CartProvider } from "./contexts/CartContext"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import WhatsAppFloat from "./components/WhatsAppFloat"
import ProtectedRoute from "./components/ProtectedRoute"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Products from "./pages/Products"
import CustomerLogin from "./pages/CustomerLogin"
import Cart from "./pages/Cart"
import AdminLogin from "./pages/AdminLogin"
import AdminDashboard from "./pages/AdminDashboard"

function App() {
  return (
    <Router>
      <ProjectProvider>
        <ProductProvider>
          <AdminProvider>
            <AuthProvider>
              <CartProvider>
                <div className="min-h-screen bg-white">
                  <Routes>
                    {/* Admin Routes (without navbar/footer) */}
                    <Route path="/admin/login" element={<AdminLogin />} />
                    <Route
                      path="/admin/dashboard"
                      element={
                        <ProtectedRoute>
                          <AdminDashboard />
                        </ProtectedRoute>
                      }
                    />

                    {/* Public Routes (with navbar/footer) */}
                    <Route
                      path="/*"
                      element={
                        <>
                          <Navbar />
                          <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/products" element={<Products />} />
                            <Route path="/login" element={<CustomerLogin />} />
                            <Route path="/cart" element={<Cart />} />
                          </Routes>
                          <Footer />
                          <WhatsAppFloat />
                        </>
                      }
                    />
                  </Routes>
                </div>
              </CartProvider>
            </AuthProvider>
          </AdminProvider>
        </ProductProvider>
      </ProjectProvider>
    </Router>
  )
}

export default App
