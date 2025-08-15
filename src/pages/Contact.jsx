"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, Globe } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Label } from "../components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    alert("Thank you for your message! We'll get back to you within 24 hours.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
    })
  }

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: "Phone",
      details: ["+91 99948 24697"],
      description: "Call us for immediate assistance",
    },
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: "Email",
      details: ["raghav@raghavelectric.com"],
      description: "Send us an email anytime",
    },
    {
      icon: <Globe className="h-6 w-6 text-blue-600" />,
      title: "Website",
      details: ["www.raghavelectric.com"],
      description: "Visit our website",
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
      description: "We are here to help",
    },
  ]

  const addresses = [
    {
      title: "Head Office",
      address: "841/280-B Tenkasi Road",
      city: "Rajapalayam - 626117",
      state: "Tamil Nadu, India",
    },
    {
      title: "Branch Office",
      address: "840/280-A Tenkasi Road",
      city: "Rajapalayam - 626117",
      state: "Tamil Nadu, India",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Contact Us</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-200">
              Ready to start your electrical engineering project? Contact our expert team for comprehensive solutions in
              industrial automation, power systems, and electrical design.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-blue-50 rounded-full w-fit">{info.icon}</div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                  <CardDescription>{info.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-700 font-medium">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Addresses */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below for electrical engineering consultations, project inquiries, or technical
                    support. We'll respond within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 99948 24697"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select a subject</option>
                        <option value="design-engineering">Design Engineering</option>
                        <option value="cable-engineering">Cable Engineering</option>
                        <option value="plc-automation">PLC & Automation</option>
                        <option value="e-house-services">E-House Services</option>
                        <option value="winding-services">Winding Services</option>
                        <option value="product-inquiry">Product Inquiry</option>
                        <option value="technical-support">Technical Support</option>
                        <option value="project-consultation">Project Consultation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">Project Details / Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please describe your project requirements, industry type (Cement/Steel/Oil & Gas), project scope, timeline, and any specific technical requirements..."
                        rows={6}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Office Addresses */}
            <div className="space-y-6">
              {addresses.map((address, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-6 w-6 text-blue-600" />
                      <CardTitle className="text-lg">{address.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      <p className="text-gray-700 font-medium">{address.address}</p>
                      <p className="text-gray-600">{address.city}</p>
                      <p className="text-gray-600">{address.state}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Quick Contact */}
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-800">Quick Contact</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-blue-600 mr-3" />
                      <div>
                        <p className="font-semibold text-blue-800">+91 99948 24697</p>
                        <p className="text-blue-600 text-sm">Direct line for urgent inquiries</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-blue-600 mr-3" />
                      <div>
                        <p className="font-semibold text-blue-800">raghav@raghavelectric.com</p>
                        <p className="text-blue-600 text-sm">Email for project discussions</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="bg-gray-50">
                <CardHeader>
                  <CardTitle className="text-lg">Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Stay connected for updates on our latest projects and services</p>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" className="bg-white">
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm" className="bg-white">
                      Facebook
                    </Button>
                    <Button variant="outline" size="sm" className="bg-white">
                      Twitter
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized electrical engineering solutions for diverse industrial sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Bulk Material Handling",
              "Cement Industries",
              "Steel Industries",
              "Oil and Gas Industries",
              "Renewable Energy",
              "Power Plant",
              "Port Handling",
              "Ship Unloader & Wagon Tippler",
            ].map((industry, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow p-4">
                <CardContent>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold text-lg">{index + 1}</span>
                  </div>
                  <p className="font-semibold text-gray-800 text-sm">{industry}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about our electrical engineering services and capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What industries do you specialize in?",
                answer:
                  "We specialize in Cement Plants, Steel Plants, Oil & Gas facilities, Bulk Material Handling, Ship Unloaders, Wagon Tipplers, and industrial automation systems.",
              },
              {
                question: "Do you provide end-to-end solutions?",
                answer:
                  "Yes, we provide complete end-to-end solutions including Design, Engineering, and Supply with single point responsibility for large projects.",
              },
              {
                question: "What software do you use for design?",
                answer:
                  "We use advanced software including E PLAN for electrical design, AutoCAD for technical drawings, and Dialux for lighting calculations.",
              },
              {
                question: "Do you offer E-House services?",
                answer:
                  "Yes, we provide complete E-House solutions including sizing, supply, panel location layout, and electrical integration services.",
              },
              {
                question: "What types of cables do you supply?",
                answer:
                  "We supply all types of cables including HT, LT, Communication, Control, and Instrumentation cables with proper termination kits.",
              },
              {
                question: "Do you provide maintenance services?",
                answer:
                  "Yes, we offer comprehensive maintenance services including motor winding, annual maintenance contracts (AMC), and technical support.",
              },
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{faq.answer}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
