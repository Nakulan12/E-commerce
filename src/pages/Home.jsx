"use client"

import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle, Zap, Award, Users, Target, Calendar, Building, Factory, Wrench } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"

const Home = () => {
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 px-4 py-2 text-sm">
              Professional Electrical Solutions
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              Powering Your <span className="text-yellow-400">Future</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-12 text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Leading electrical engineering solutions provider specializing in smart infrastructure, industrial
              automation, and renewable energy systems with 50+ years of excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/services">
                <Button
                  size="lg"
                  className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-xl"
                >
                  Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold bg-transparent"
                >
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 max-w-5xl mx-auto">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "45+", label: "Years Experience" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                <div className="text-blue-200 font-medium text-lg">{stat.label}</div>
              </div>
            ))}
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
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <Target className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-2xl">Our Concept</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>End to End solution for large projects</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Single Point responsibility</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Encompasses all major functions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <Zap className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-2xl">Software Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>E PLAN</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>AutoCAD</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Electrical Design Solutions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <Award className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-2xl">Core Functions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Design</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Engineering</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Supply</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our History</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A journey of continuous growth and evolution in electrical engineering excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 relative">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <Calendar className="h-8 w-8 text-blue-600 mr-3" />
                    <Badge className="text-lg px-4 py-2 bg-blue-600">{milestone.year}</Badge>
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
            <Card className="hover:shadow-xl transition-all duration-300 p-8">
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

            <Card className="hover:shadow-xl transition-all duration-300 p-8">
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
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Discover Our Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive engineering solutions from concept to commissioning.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 text-center p-6">
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
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Whom We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Serving diverse industries with specialized electrical engineering solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 text-center p-6">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit text-blue-600">{industry.icon}</div>
                  <CardTitle className="text-lg">{industry.name}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Power Your Future?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your electrical engineering needs and discover how we can help transform your
            vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent px-8 py-4"
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
