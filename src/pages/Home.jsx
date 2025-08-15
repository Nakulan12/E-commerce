import { Link } from "react-router-dom"
import { ArrowRight, Zap, Shield, Award, Users, CheckCircle, Star } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"

const Home = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-primary-600" />,
      title: "Expert Solutions",
      description:
        "Professional electrical engineering solutions with cutting-edge technology and innovative approaches.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      title: "Safety First",
      description:
        "Comprehensive safety protocols and quality assurance in all our electrical installations and services.",
    },
    {
      icon: <Award className="h-8 w-8 text-primary-600" />,
      title: "Certified Excellence",
      description: "ISO certified processes and industry-leading standards ensuring superior quality in every project.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
      title: "Expert Team",
      description: "Highly skilled electrical engineers and technicians with years of experience in complex projects.",
    },
  ]

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "TechCorp Industries",
      rating: 5,
      text: "Engenix delivered exceptional electrical solutions for our manufacturing facility. Their expertise in industrial automation is outstanding.",
    },
    {
      name: "Priya Sharma",
      company: "Green Energy Ltd",
      rating: 5,
      text: "Professional team with excellent project management. They completed our renewable energy project ahead of schedule.",
    },
    {
      name: "Amit Patel",
      company: "Smart City Project",
      rating: 5,
      text: "Innovative solutions and reliable service. Engenix is our go-to partner for all electrical engineering needs.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden min-h-[700px]">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="px-6 py-3 bg-white/20 text-white border border-white/30 rounded-full text-sm font-medium backdrop-blur-sm">
                    Professional Electrical Solutions
                  </span>
                </div>
                <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
                  Powering Your
                  <br />
                  <span className="text-yellow-400">Future</span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                  Leading electrical engineering solutions provider specializing in smart infrastructure, industrial
                  automation, and renewable energy systems.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/services">
                  <Button
                    size="lg"
                    className="bg-white text-blue-900 hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    Our Services
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-blue-900 bg-transparent px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    Get Quote
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16 max-w-5xl mx-auto">
                <div className="text-center">
                  <div className="text-5xl lg:text-6xl font-bold text-yellow-400 mb-3">500+</div>
                  <div className="text-base text-gray-300 font-medium">
                    Projects
                    <br />
                    Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-5xl lg:text-6xl font-bold text-yellow-400 mb-3">50+</div>
                  <div className="text-base text-gray-300 font-medium">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl lg:text-6xl font-bold text-yellow-400 mb-3">10+</div>
                  <div className="text-base text-gray-300 font-medium">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl lg:text-6xl font-bold text-yellow-400 mb-3">24/7</div>
                  <div className="text-base text-gray-300 font-medium">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Why Choose Us</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Excellence in Electrical Engineering</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with innovative solutions to deliver exceptional results for every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-blue-50 rounded-full w-fit">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Our Services</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Comprehensive Electrical Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From residential installations to large-scale industrial projects, we provide complete electrical
              solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Home Solutions",
                description: "Modern home automation and smart electrical systems for enhanced comfort and efficiency.",
                image: "/hero-smart-home.jpg",
                features: ["Home Automation", "Smart Lighting", "Security Systems", "Energy Management"],
              },
              {
                title: "Industrial Automation",
                description: "Advanced PLC and SCADA systems for manufacturing and industrial applications.",
                image: "/industrial-automation-factory.png",
                features: ["PLC Programming", "SCADA Systems", "Motor Control", "Process Automation"],
              },
              {
                title: "Emergency Services",
                description: "24/7 emergency electrical services for urgent repairs and maintenance needs.",
                image: "/hero-emergency-service.jpg",
                features: ["24/7 Availability", "Rapid Response", "Expert Technicians", "Safety Priority"],
              },
            ].map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow border-0 shadow-md">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Testimonials</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardDescription className="text-gray-700">"{testimonial.text}"</CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Power Your Next Project?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Get in touch with our expert team for a free consultation and discover how we can help you achieve your
            electrical engineering goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
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
