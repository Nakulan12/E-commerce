"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import {
  ArrowRight,
  CheckCircle,
  Zap,
  Award,
  Users,
  Target,
  Calendar,
  Building,
  Factory,
  Wrench,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const carouselImages = [
    {
      src: "/electrical-engineering-power-systems.png",
      title: "Power Systems Engineering",
      description: "Advanced electrical power system design and implementation",
    },
    {
      src: "/industrial-automation-factory.png",
      title: "Industrial Automation",
      description: "Smart factory automation and control systems",
    },
    {
      src: "/electrical-installation.png",
      title: "Electrical Installation",
      description: "Professional electrical installation services",
    },
    {
      src: "/smart-city-infrastructure.png",
      title: "Smart Infrastructure",
      description: "Modern smart city electrical infrastructure solutions",
    },
    {
      src: "/renewable-energy-grid.png",
      title: "Renewable Energy",
      description: "Sustainable energy solutions and grid integration",
    },
  ]

  const milestones = [
    {
      year: "1977",
      title: "Started with Collaboration",
      description:
        "We started as partnership company as service & traders with the name of Bharath Electricals till 2002",
    },
    {
      year: "2002",
      title: "Evolved as an Individual",
      description: "After completion of 25yrs of partnership new company started as Raghav Electricals",
    },
    {
      year: "2021",
      title: "Revamp for Future",
      description: "Company emerged as Engenix to elevate our level upto global market level",
    },
  ]

  const capabilities = [
    "Feasibility Study",
    "Basebuild Design",
    "Hookup Design",
    "Tendering",
    "Project Management",
    "Strategic Procurement Advice",
    "EPCM",
    "General Planner",
    "Energy Saving Solution",
    "Project Controlling",
    "Testing, Commissioning, Startup",
  ]

  const industries = [
    { name: "Bulk Material Handling", icon: <Factory className="h-8 w-8" /> },
    { name: "Cement Industries", icon: <Building className="h-8 w-8" /> },
    { name: "Steel Industries", icon: <Wrench className="h-8 w-8" /> },
    { name: "Oil and Gas Industries", icon: <Zap className="h-8 w-8" /> },
    { name: "Renewable Energy", icon: <Target className="h-8 w-8" /> },
    { name: "Power Plant", icon: <Award className="h-8 w-8" /> },
    { name: "Port Handling", icon: <Users className="h-8 w-8" /> },
  ]

  const services = [
    {
      title: "Electrical Installation",
      description: "Complete electrical installation services for residential, commercial, and industrial projects.",
      icon: <Zap className="h-12 w-12 text-blue-600" />,
      image: "/services/installation-service.jpg",
    },
    {
      title: "Maintenance & Repair",
      description: "24/7 electrical maintenance and emergency repair services to keep your systems running.",
      icon: <Wrench className="h-12 w-12 text-blue-600" />,
      image: "/services/maintenance-service.jpg",
    },
    {
      title: "Smart Home Solutions",
      description: "Modern smart home automation and IoT integration for enhanced living experiences.",
      icon: <Target className="h-12 w-12 text-blue-600" />,
      image: "/services/smart-home-service.jpg",
    },
  ]

  // Auto-play carousel
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, carouselImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Image Carousel Section */}
      <section className="relative h-[60vh] overflow-hidden bg-gray-900">
        <div className="relative w-full h-full">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 transform translate-x-0"
                  : index < currentSlide
                    ? "opacity-0 transform -translate-x-full"
                    : "opacity-0 transform translate-x-full"
              }`}
            >
              <img src={image.src || "/placeholder.svg"} alt={image.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white max-w-4xl px-4">
                  <h2 className="text-3xl lg:text-5xl font-bold mb-4">{image.title}</h2>
                  <p className="text-lg lg:text-xl text-gray-200">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Auto-play control */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute bottom-20 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-300"
        >
          {isAutoPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-125" : "bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Hero Section - Immediately after carousel with no gap */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 px-4 py-2 text-sm">
              Professional Electrical Solutions
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              Powering Your <span className="text-yellow-400">Future</span>
            </h1>
            <p className="text-lg lg:text-xl mb-12 text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Leading electrical engineering solutions provider specializing in smart infrastructure, industrial
              automation, and renewable energy systems with 50+ years of excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/services">
                <Button
                  size="lg"
                  className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold bg-transparent hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-5xl mx-auto">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "45+", label: "Years Experience" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-2 hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-blue-200 font-medium text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Services</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive electrical solutions tailored to meet your specific needs and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <CardTitle className="text-xl ml-3">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">50 Years of Excellence</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Corporate Profile</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Engenix is established in 2002 with the vision to provide the Best Electrical & Automation engineering
              Design solution for Cement Plant, Steel Plant, Oil & Gas Plant, Conveying system, Bulk Material Handling
              Equipment, Ship Unloader & Wagon Tippler, E-House and industrial plants.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Target className="h-12 w-12 text-blue-600 mb-4" />,
                title: "Our Concept",
                items: [
                  "End to End solution for large projects",
                  "Single Point responsibility",
                  "Encompasses all major functions",
                ],
              },
              {
                icon: <Zap className="h-12 w-12 text-blue-600 mb-4" />,
                title: "Software Expertise",
                items: ["E PLAN", "AutoCAD", "Electrical Design Solutions"],
              },
              {
                icon: <Award className="h-12 w-12 text-blue-600 mb-4" />,
                title: "Core Functions",
                items: ["Design", "Engineering", "Supply"],
              },
            ].map((card, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  {card.icon}
                  <CardTitle className="text-2xl">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {card.items.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A journey of continuous growth and evolution in electrical engineering excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 relative transform hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <Calendar className="h-8 w-8 text-blue-600 mr-3" />
                    <Badge className="text-lg px-4 py-2 bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
                      {milestone.year}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{milestone.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">{milestone.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Philosophy</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="hover:shadow-xl transition-all duration-300 p-8 transform hover:-translate-y-2">
              <CardHeader>
                <Target className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-3xl mb-4">Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-gray-700 leading-relaxed">
                  To be the technology partner of choice for forward looking customers by collaboratively transforming
                  technology into business advantage.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 p-8 transform hover:-translate-y-2">
              <CardHeader>
                <Zap className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-3xl mb-4">Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-gray-700 leading-relaxed">
                  To provide innovative, reliable, and sustainable electrical solutions that empower our clients to
                  achieve their goals while contributing to a more connected and energy-efficient world.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive engineering solutions from concept to commissioning.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 text-center p-6 transform hover:-translate-y-1 hover:bg-blue-50"
              >
                <CardContent>
                  <CheckCircle className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <p className="font-semibold text-gray-800">{capability}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Serving diverse industries with specialized electrical engineering solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 text-center p-6 transform hover:-translate-y-2 hover:bg-blue-50"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit text-blue-600 hover:bg-blue-200 transition-colors duration-300">
                    {industry.icon}
                  </div>
                  <CardTitle className="text-lg">{industry.name}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Power Your Future?</h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Contact us today to discuss your electrical engineering needs and discover how we can help transform
                your vision into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent px-8 py-4 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    View Our Work
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center text-white">
                  <Phone className="h-5 w-5 mr-3" />
                  <span>+91 9876543210</span>
                </div>
                <div className="flex items-center text-white">
                  <Mail className="h-5 w-5 mr-3" />
                  <span>info@engenix.com</span>
                </div>
                <div className="flex items-center text-white">
                  <MapPin className="h-5 w-5 mr-3" />
                  <span>Bangalore, Karnataka, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
