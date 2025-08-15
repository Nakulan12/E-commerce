"use client"

import { Award, Users, Target, Eye, Heart, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"

const About = () => {
  const values = [
    {
      icon: <Award className="h-8 w-8 text-primary-600" />,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering superior quality and innovative solutions.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices in all our interactions.",
    },
    {
      icon: <Target className="h-8 w-8 text-primary-600" />,
      title: "Innovation",
      description: "We embrace cutting-edge technology and innovative approaches to solve complex challenges.",
    },
    {
      icon: <Heart className="h-8 w-8 text-primary-600" />,
      title: "Customer Focus",
      description: "Our customers are at the heart of everything we do, and their success is our priority.",
    },
  ]

  const achievements = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "10+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">About Us</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Engenix</h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-200">
              Leading electrical solutions provider with a commitment to excellence, innovation, and customer
              satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded with a vision to revolutionize the electrical engineering industry, Engenix has grown from a
                  small startup to a leading provider of comprehensive electrical solutions. Our journey began with a
                  simple mission: to deliver exceptional electrical services that combine technical expertise with
                  innovative approaches.
                </p>
                <p>
                  Over the years, we have built a reputation for excellence by consistently delivering high-quality
                  projects across residential, commercial, and industrial sectors. Our team of certified professionals
                  brings decades of combined experience to every project, ensuring that our clients receive the best
                  possible solutions.
                </p>
                <p>
                  Today, Engenix stands as a trusted partner for businesses and homeowners alike, offering everything
                  from basic electrical installations to complex automation systems and renewable energy solutions.
                </p>
              </div>
            </div>
            <div className="relative">
              <img src="/electrical-team-at-work.png" alt="Engenix team at work" className="rounded-2xl shadow-xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="h-8 w-8 text-primary-600" />
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  To provide innovative, reliable, and sustainable electrical solutions that empower our clients to
                  achieve their goals while contributing to a more connected and energy-efficient world. We are
                  committed to excellence in every project, ensuring safety, quality, and customer satisfaction.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Eye className="h-8 w-8 text-primary-600" />
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  To be the leading electrical engineering company recognized for our innovation, expertise, and
                  commitment to sustainable solutions. We envision a future where our advanced electrical systems
                  contribute to smarter, more efficient, and environmentally responsible communities.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to excellence.
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

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">{achievement.number}</div>
                <div className="text-gray-600 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Why Choose Engenix?</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              We combine technical expertise with exceptional service to deliver results that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-12 w-12 text-yellow-400" />,
                title: "Expert Team",
                description:
                  "Certified professionals with extensive experience in electrical engineering and project management.",
              },
              {
                icon: <Award className="h-12 w-12 text-yellow-400" />,
                title: "Quality Assurance",
                description:
                  "Rigorous quality control processes and industry-leading standards ensure superior results.",
              },
              {
                icon: <Users className="h-12 w-12 text-yellow-400" />,
                title: "Customer Support",
                description: "Dedicated customer support team providing assistance throughout the project lifecycle.",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center text-white">
                <div className="mx-auto mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-200">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
