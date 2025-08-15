"use client"

import { CheckCircle, ArrowRight, Zap, Settings, Shield, Wrench, Building } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Design Engineering",
      description: "Comprehensive electrical design solutions from concept to implementation.",
      image: "/electrical-engineering-power-systems.png",
      icon: <Zap className="h-8 w-8 text-primary-600" />,
      features: [
        "Design Drafting",
        "Single Line Diagram Preparation",
        "General Arrangement",
        "Schematic Diagrams",
        "Bill Of Materials Preparation",
        "Busbar / BBT Design",
        "Key Single Line Diagrams",
      ],
      pricing: "Custom Quote",
    },
    {
      id: 2,
      title: "Cable Engineering",
      description: "Complete cable engineering solutions for industrial and commercial applications.",
      image: "/copper-wire.png",
      icon: <Settings className="h-8 w-8 text-primary-600" />,
      features: [
        "Cable Sizing",
        "Cable Glands & Lugs",
        "Cable Schedules",
        "Interconnection Details",
        "Loop Wiring Diagram",
        "Cable Termination Schedules",
        "Cable Tray Routing & Sizing",
      ],
      pricing: "Starting from ₹15,000",
    },
    {
      id: 3,
      title: "Equipment Engineering",
      description: "Specialized equipment engineering for electrical and instrumentation systems.",
      image: "/industrial-automation-factory.png",
      icon: <Wrench className="h-8 w-8 text-primary-600" />,
      features: [
        "ECR Equipment Layout",
        "Electrical Equipment Engineering",
        "Instrumentation Engineering",
        "Layout Engineering",
        "Cable Gallery Design",
        "Tray Routing & BOQ",
      ],
      pricing: "Custom Quote",
    },
    {
      id: 4,
      title: "Earthing & Lightning",
      description: "Professional earthing and lightning protection system design and installation.",
      image: "/electrical-installation.png",
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      features: [
        "Earthing Design & Sizing",
        "BOM Preparation",
        "Layouts and Typical Installations",
        "Lightning Protection Systems",
        "Safety Compliance",
        "Testing & Commissioning",
      ],
      pricing: "Starting from ₹25,000",
    },
    {
      id: 5,
      title: "PLC and Panel Engineering",
      description: "Advanced PLC/DCS panel engineering and automation solutions.",
      image: "/smart-city-infrastructure.png",
      icon: <Settings className="h-8 w-8 text-primary-600" />,
      features: [
        "PLC/DCS Panel GA & IGA Drawings",
        "System Architecture",
        "IO Allocation",
        "Power & Control Schematic Diagrams",
        "Wiring Table & Interconnection Details",
        "MCT Engineering",
      ],
      pricing: "Custom Quote",
    },
    {
      id: 6,
      title: "E-House Services",
      description: "Complete E-House solutions from sizing to supply and installation.",
      image: "/modern-engineering-construction.png",
      icon: <Building className="h-8 w-8 text-primary-600" />,
      features: [
        "E-House Sizing",
        "E-House Supplying",
        "Panel Location Layout",
        "Electrical Integration",
        "Testing & Commissioning",
        "Maintenance Support",
      ],
      pricing: "Custom Quote",
    },
    {
      id: 7,
      title: "Lighting Engineering",
      description: "Professional lighting design and engineering solutions.",
      image: "/led-bulb.png",
      icon: <Zap className="h-8 w-8 text-primary-600" />,
      features: [
        "Lighting Load Calculations",
        "Distribution Layouts",
        "Typical Connections",
        "Dialux Calculations",
        "Energy Efficient Solutions",
        "Maintenance Programs",
      ],
      pricing: "Starting from ₹10,000",
    },
    {
      id: 8,
      title: "Winding Services",
      description: "Comprehensive motor and transformer winding services.",
      image: "/electrical-repair.png",
      icon: <Wrench className="h-8 w-8 text-primary-600" />,
      features: [
        "All Types of Motor Winding",
        "Control Trafo Winding",
        "DC Motor Winding",
        "Motor Connection Winding",
        "Motor Lathe Works",
        "Annual Maintenance (AMC)",
      ],
      pricing: "Starting from ₹5,000",
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "Initial consultation to understand your requirements and assess the project scope.",
    },
    {
      step: "02",
      title: "Design",
      description: "Detailed engineering design and technical specifications development.",
    },
    {
      step: "03",
      title: "Engineering",
      description: "Complete engineering solutions with drawings and documentation.",
    },
    {
      step: "04",
      title: "Supply",
      description: "Procurement and supply of all required materials and equipment.",
    },
    {
      step: "05",
      title: "Implementation",
      description: "Professional installation and commissioning by certified engineers.",
    },
    {
      step: "06",
      title: "Support",
      description: "Ongoing maintenance and technical support services.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Our Services</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Professional Electrical Engineering Services</h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-200">
              Comprehensive electrical engineering solutions from design to commissioning with 45+ years of expertise in
              industrial automation and power systems.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Service Offerings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end electrical engineering solutions tailored for cement plants, steel plants, oil & gas
              facilities, and industrial automation systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    {service.icon}
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-blue-600">{service.pricing}</span>
                    <Link to="/contact">
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Get Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Single point responsibility with end-to-end solutions encompassing all major project functions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                    {process.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-300 -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Expertise */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Software Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced software tools for precise electrical design and engineering solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Design Tools</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900">E PLAN</h4>
                    <p className="text-gray-600">Advanced electrical design and documentation</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900">AutoCAD</h4>
                    <p className="text-gray-600">Precision drafting and technical drawings</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Dialux</h4>
                    <p className="text-gray-600">Professional lighting calculations and design</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Capabilities</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Zap className="h-5 w-5 text-blue-600 mr-3" />
                  <span>3D Electrical Modeling</span>
                </li>
                <li className="flex items-center">
                  <Zap className="h-5 w-5 text-blue-600 mr-3" />
                  <span>Automated Documentation</span>
                </li>
                <li className="flex items-center">
                  <Zap className="h-5 w-5 text-blue-600 mr-3" />
                  <span>Standards Compliance</span>
                </li>
                <li className="flex items-center">
                  <Zap className="h-5 w-5 text-blue-600 mr-3" />
                  <span>Project Collaboration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let our experts help you with your electrical engineering
            needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/products">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Browse Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
