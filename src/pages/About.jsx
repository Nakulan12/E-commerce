"use client"

import { Button } from "@/components/ui/button"

import { Award, Users, Target, Eye, Heart, Zap, Building } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"

const About = () => {
  const values = [
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Excellence",
      description:
        "We strive for excellence in every project, delivering superior quality electrical engineering solutions with 45+ years of expertise.",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Collaboration",
      description:
        "We believe in collaborative partnerships, working closely with clients to transform technology into business advantage.",
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Innovation",
      description:
        "We embrace cutting-edge technology and innovative approaches using advanced software like E PLAN and AutoCAD.",
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: "Integrity",
      description:
        "We conduct business with honesty, transparency, and ethical practices in all our industrial dealings.",
    },
  ]

  const milestones = [
    {
      year: "1977",
      title: "Started with Collaboration",
      description:
        "We started as partnership company as service & traders with the name of Bharath Electricals till 2002",
      icon: <Building className="h-8 w-8 text-blue-600" />,
    },
    {
      year: "2002",
      title: "Evolved as an Individual",
      description: "After completion of 25yrs of partnership new company started as Raghav Electricals",
      icon: <Zap className="h-8 w-8 text-blue-600" />,
    },
    {
      year: "2021",
      title: "Revamp for Future",
      description: "Company emerged as Engenix to elevate our level upto global market level",
      icon: <Target className="h-8 w-8 text-blue-600" />,
    },
  ]

  const achievements = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "45+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
  ]

  const industries = [
    "Bulk Material Handling",
    "Cement Industries",
    "Steel Industries",
    "Oil and Gas Industries",
    "Renewable Energy",
    "Power Plant",
    "Port Handling",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">About Engenix</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">45+ Years of Excellence</h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-200">
              Leading electrical engineering solutions provider specializing in industrial automation, power systems,
              and comprehensive electrical design for major industries.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Corporate Profile</h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg leading-relaxed">
                  Engenix is established in 2002 with the vision to provide the Best Electrical & Automation engineering
                  Design solution for Cement Plant, Steel Plant, Oil & Gas Plant, Conveying system, Bulk Material
                  Handling Equipment, Ship Unloader & Wagon Tippler, E-House and industrial plants.
                </p>
                <p className="text-lg leading-relaxed">
                  We also supply All Types of Industrial Electrical Components & Consumables goods, serving as a
                  comprehensive solution provider for large-scale industrial projects with single point responsibility.
                </p>
                <p className="text-lg leading-relaxed">
                  Our expertise encompasses all major functions in projects including Design, Engineering, and Supply,
                  making us the technology partner of choice for forward-looking customers.
                </p>
              </div>
            </div>
            <div className="relative">
              <img src="/electrical-team-at-work.png" alt="Engenix team at work" className="rounded-2xl shadow-xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our History</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A journey of continuous evolution and growth in electrical engineering excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 relative">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg mr-3">{milestone.icon}</div>
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

      {/* Mission & Vision */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="hover:shadow-lg transition-shadow p-8">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Eye className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-3xl">Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-gray-700 leading-relaxed">
                  To be the technology partner of choice for forward looking customers by collaboratively transforming
                  technology into business advantage through innovative electrical engineering solutions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow p-8">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-3xl">Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-gray-700 leading-relaxed">
                  To provide End to End solution for large projects with single point responsibility, encompassing all
                  major functions including Design, Engineering, and Supply for industrial excellence.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to electrical engineering excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">{value.icon}</div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized electrical engineering solutions across diverse industrial sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow p-6">
                <CardContent>
                  <Zap className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <p className="font-semibold text-gray-800">{industry}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and customer satisfaction in electrical engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">{achievement.number}</div>
                <div className="text-gray-600 font-medium">{achievement.label}</div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Design Software</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Zap className="h-6 w-6 text-blue-600 mr-4" />
                    <div>
                      <h4 className="font-semibold text-gray-900">E PLAN</h4>
                      <p className="text-gray-600">Advanced electrical design and documentation</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Zap className="h-6 w-6 text-blue-600 mr-4" />
                    <div>
                      <h4 className="font-semibold text-gray-900">AutoCAD</h4>
                      <p className="text-gray-600">Precision drafting and technical drawings</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Our Concept</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Target className="h-6 w-6 text-blue-600 mr-4" />
                    <span>End to End solution for large projects</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-6 w-6 text-blue-600 mr-4" />
                    <span>Single Point responsibility</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-6 w-6 text-blue-600 mr-4" />
                    <span>Encompasses all major functions</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Partner With Us?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join our satisfied clients and experience the difference of working with a technology partner committed to
            transforming your vision into business advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              View Our Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
