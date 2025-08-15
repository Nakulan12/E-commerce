"use client"

import { CheckCircle, ArrowRight, Zap, Settings, Shield, Clock } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Electrical Installation",
      description: "Complete electrical installation services for residential, commercial, and industrial properties.",
      image: "/services/installation-service.jpg",
      icon: <Zap className="h-8 w-8 text-primary-600" />,
      features: [
        "Residential wiring and rewiring",
        "Commercial electrical systems",
        "Industrial power distribution",
        "Panel upgrades and installations",
        "Lighting system design",
        "Emergency power systems",
      ],
      pricing: "Starting from ₹5,000",
    },
    {
      id: 2,
      title: "Smart Home Automation",
      description:
        "Transform your home with intelligent automation systems for comfort, security, and energy efficiency.",
      image: "/services/smart-home-service.jpg",
      icon: <Settings className="h-8 w-8 text-primary-600" />,
      features: [
        "Smart lighting control",
        "Automated climate control",
        "Security system integration",
        "Voice control setup",
        "Mobile app configuration",
        "Energy monitoring systems",
      ],
      pricing: "Starting from ₹25,000",
    },
    {
      id: 3,
      title: "Maintenance & Repair",
      description:
        "Professional maintenance and repair services to keep your electrical systems running safely and efficiently.",
      image: "/services/maintenance-service.jpg",
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      features: [
        "Preventive maintenance programs",
        "Emergency repair services",
        "Electrical safety inspections",
        "Equipment troubleshooting",
        "Power quality analysis",
        "Compliance testing",
      ],
      pricing: "Starting from ₹2,000",
    },
    {
      id: 4,
      title: "Industrial Automation",
      description:
        "Advanced automation solutions for manufacturing and industrial processes using PLC and SCADA systems.",
      image: "/industrial-automation-factory.png",
      icon: <Settings className="h-8 w-8 text-primary-600" />,
      features: [
        "PLC programming and installation",
        "SCADA system development",
        "HMI design and implementation",
        "Motor control systems",
        "Process automation",
        "Industrial IoT integration",
      ],
      pricing: "Custom Quote",
    },
    {
      id: 5,
      title: "Emergency Services",
      description: "24/7 emergency electrical services for urgent repairs and power restoration needs.",
      image: "/emergency-electrical.png",
      icon: <Clock className="h-8 w-8 text-primary-600" />,
      features: [
        "24/7 emergency response",
        "Power outage restoration",
        "Electrical fault diagnosis",
        "Safety hazard resolution",
        "Temporary power solutions",
        "Emergency lighting systems",
      ],
      pricing: "₹1,500/hour",
    },
    {
      id: 6,
      title: "Renewable Energy Solutions",
      description: "Sustainable energy solutions including solar panel installations and energy storage systems.",
      image: "/renewable-energy-grid.png",
      icon: <Zap className="h-8 w-8 text-primary-600" />,
      features: [
        "Solar panel installation",
        "Battery storage systems",
        "Grid-tie inverters",
        "Energy monitoring",
        "Net metering setup",
        "Maintenance programs",
      ],
      pricing: "Starting from ₹75,000",
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
      title: "Planning",
      description: "Detailed planning and design phase with technical specifications and timeline.",
    },
    {
      step: "03",
      title: "Implementation",
      description: "Professional installation and implementation by our certified technicians.",
    },
    {
      step: "04",
      title: "Testing",
      description: "Comprehensive testing and quality assurance to ensure optimal performance.",
    },
    {
      step: "05",
      title: "Support",
      description: "Ongoing support and maintenance to keep your systems running smoothly.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Our Services</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Professional Electrical Services</h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-200">
              Comprehensive electrical solutions for residential, commercial, and industrial needs with expert
              craftsmanship and reliable service.
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
              From basic installations to complex automation systems, we provide complete electrical solutions tailored
              to your needs.
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
                    <span className="text-lg font-semibold text-primary-600">{service.pricing}</span>
                    <Link to="/contact">
                      <Button size="sm">
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
              We follow a systematic approach to ensure every project is completed to the highest standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                    {process.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-300 -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Engenix?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with exceptional service to deliver results that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8 text-primary-600" />,
                title: "Licensed & Insured",
                description:
                  "Fully licensed electricians with comprehensive insurance coverage for your peace of mind.",
              },
              {
                icon: <Clock className="h-8 w-8 text-primary-600" />,
                title: "24/7 Emergency Service",
                description: "Round-the-clock emergency services to handle urgent electrical issues promptly.",
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-primary-600" />,
                title: "Quality Guarantee",
                description: "We stand behind our work with comprehensive warranties and quality guarantees.",
              },
              {
                icon: <Zap className="h-8 w-8 text-primary-600" />,
                title: "Latest Technology",
                description: "Using cutting-edge tools and techniques for efficient and reliable electrical solutions.",
              },
            ].map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">{benefit.icon}</div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let our experts help you with your electrical needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/products">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary-600 bg-transparent"
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
