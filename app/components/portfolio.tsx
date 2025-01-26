"use client"

import { useState } from "react"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

type Project = {
  id: number
  name: string
  description: string
  image: string
  category: string
}

const projects: Project[] = [
  {
    id: 1,
    name: "AI Chatbot",
    description: "An intelligent chatbot powered by GPT-3",
    image: "/placeholder.svg",
    category: "AI",
  },
  {
    id: 2,
    name: "E-commerce Platform",
    description: "A full-featured online store",
    image: "/placeholder.svg",
    category: "Web",
  },
  {
    id: 3,
    name: "Mobile Fitness App",
    description: "Track your workouts and nutrition",
    image: "/placeholder.svg",
    category: "Mobile",
  },
  {
    id: 4,
    name: "Data Visualization Dashboard",
    description: "Interactive charts and graphs for big data",
    image: "/placeholder.svg",
    category: "Data",
  },
  {
    id: 5,
    name: "AI Image Generator",
    description: "Create unique images using AI",
    image: "/placeholder.svg",
    category: "AI",
  },
  {
    id: 6,
    name: "Social Media Analytics",
    description: "Track and analyze social media performance",
    image: "/placeholder.svg",
    category: "Web",
  },
]

const categories = ["All", "AI", "Web", "Mobile", "Data"]

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProjects = projects.filter(
    (project) =>
      (selectedCategory === "All" || project.category === selectedCategory) &&
      project.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">My Portfolio</h2>

      <div className="flex flex-col mb-6 gap-4">
        <Input
          type="text"
          placeholder="Search projects..."
          className="max-w-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-[#2a2a2a] rounded-lg overflow-hidden">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-400">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

