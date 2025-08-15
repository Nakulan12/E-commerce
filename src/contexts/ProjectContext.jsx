"use client"

import { createContext, useContext, useState } from "react"

const ProjectContext = createContext()

export const useProjects = () => {
  const context = useContext(ProjectContext)
  if (!context) {
    throw new Error("useProjects must be used within a ProjectProvider")
  }
  return context
}

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Smart City Infrastructure Development",
      description:
        "Complete electrical infrastructure design and implementation for a modern smart city project including IoT integration, smart lighting, and energy management systems.",
      image: "/smart-city-infrastructure.png",
      category: "Infrastructure",
      status: "Completed",
      year: "2024",
      client: "Municipal Corporation",
      duration: "18 months",
      budget: "₹2.5 Crores",
      technologies: ["IoT", "Smart Grids", "LED Systems", "Energy Management"],
      features: [
        "Smart street lighting with motion sensors",
        "Integrated traffic management system",
        "Real-time energy monitoring",
        "Automated fault detection and reporting",
      ],
    },
    {
      id: 2,
      title: "Industrial Automation System",
      description:
        "Advanced PLC-based automation system for manufacturing facility with SCADA integration and real-time monitoring capabilities.",
      image: "/industrial-automation-factory.png",
      category: "Industrial",
      status: "In Progress",
      year: "2024",
      client: "TechManufacturing Ltd",
      duration: "12 months",
      budget: "₹1.8 Crores",
      technologies: ["PLC", "SCADA", "HMI", "Industrial IoT"],
      features: [
        "Automated production line control",
        "Real-time quality monitoring",
        "Predictive maintenance system",
        "Energy optimization algorithms",
      ],
    },
    {
      id: 3,
      title: "Renewable Energy Grid Integration",
      description:
        "Solar and wind energy integration project with smart grid technology and battery storage systems for sustainable power generation.",
      image: "/renewable-energy-grid.png",
      category: "Renewable Energy",
      status: "Completed",
      year: "2023",
      client: "GreenPower Solutions",
      duration: "15 months",
      budget: "₹3.2 Crores",
      technologies: ["Solar PV", "Wind Turbines", "Battery Storage", "Grid Integration"],
      features: [
        "500kW solar installation",
        "200kW wind power generation",
        "Advanced battery storage system",
        "Smart grid synchronization",
      ],
    },
  ])

  const addProject = (project) => {
    const newProject = {
      ...project,
      id: Date.now(),
      technologies: Array.isArray(project.technologies) ? project.technologies : [],
      features: Array.isArray(project.features) ? project.features : [],
    }
    setProjects((prev) => [...prev, newProject])
  }

  const updateProject = (id, updatedProject) => {
    setProjects((prev) => prev.map((project) => (project.id === id ? { ...project, ...updatedProject } : project)))
  }

  const deleteProject = (id) => {
    setProjects((prev) => prev.filter((project) => project.id !== id))
  }

  const getProjectStats = () => {
    const total = projects.length
    const completed = projects.filter((p) => p.status === "Completed").length
    const inProgress = projects.filter((p) => p.status === "In Progress").length
    const planning = projects.filter((p) => p.status === "Planning").length
    const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0

    return {
      total,
      completed,
      inProgress,
      planning,
      completionRate,
    }
  }

  const getCategories = () => {
    const categories = ["All", ...new Set(projects.map((p) => p.category))]
    return categories
  }

  return (
    <ProjectContext.Provider
      value={{
        projects,
        addProject,
        updateProject,
        deleteProject,
        getProjectStats,
        getCategories,
      }}
    >
      {children}
    </ProjectContext.Provider>
  )
}
