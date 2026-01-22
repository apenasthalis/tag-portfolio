"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Cardápio Digital - Rodrigo Burguer",
    description: "Aplicativo web para divulgação do cardápio digital de um restaurante, endereço para pedidos online e informações de contato da empresa rodrigo burguer.",
    tags: ["Next.js", "TypeScript", "TailwindCss"],
    category: "Landing Page",
    image: "/images/rodrigo-burguer.png",
    link: "https://rodrigo-burger-app.vercel.app/",
  },
  {
    id: 2,
    title: "Sistema de Gestão para Oficina Mecânica",
    description:
      "Sistema de gestão para oficina mecânica com controle de serviços, agendamentos, endereço para atendimentos e cultura da empresa Level Cars.",
    tags: ["Next.js", "TypeScript", "TailwindCss"],
    category: "Landing Page",
    image: "/images/level-cars.png",
    link: "https://levelcars-mechanic.vercel.app/",
  },
  {
    id: 3,
    title: "Construtor Visual de Workflows (Fluxos)",
    description: "Landing page para um produto, destacando suas funcionalidades, benefícios e planos de assinatura.",
    tags: ["Next.js", "TypeScript", "TailwindCss"],
    category: "Landing Page",
    image: "/images/workflow.png",
    link: "https://visual-workflow-builder-puce.vercel.app/",
  },
  {
    id: 4,
    title: "Portfólio Profissional de Fotografia",
    description: "Portfólio online para exibir trabalhos fotográficos, serviços oferecidos e informações de contato.",
    tags: ["Next.js", "TypeScript", "TailwindCss"],
    category: "Landing Page",
    image: "/images/fotografo.png",
    link: "https://v0-thalis-gabriel-portfolio-a4.vercel.app/",
  },
  {
    id: 5,
    title: "Portfólio Profissional de Desenvolvedor",
    description: "Portfólio online para exibir projetos, habilidades e experiências profissionais de um desenvolvedor.",
    tags: ["Next.js", "TypeScript", "TailwindCss"],
    category: "Landing Page",
    image: "/images/portfolio-dev.png",
    link: "https://portfolio-thalisgabriel.vercel.app/",
  },
  {
    id: 6,
    title: "Trainer App - Plataforma de Treinamento Físico",
    description: "Aplicativo web para gerenciamento de treinos, acompanhamento de progresso.",
    tags: ["Next.js", "TypeScript", "TailwindCss"],
    category: "SaaS",
    image: "/images/trainer-app.png",
    link: "https://trainer-app-eight.vercel.app/login",
  },
]

const categories = ["Todos", "E-commerce", "SaaS", "Mobile", "Landing Page", "Blog/CMS"]

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("Todos")

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projetos" className="py-20 md:py-32">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-bold text-foreground text-3xl md:text-4xl">
            Projetos <span className="text-primary">Realizados</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Uma seleção dos melhores projetos desenvolvidos para clientes de diversos segmentos.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.id}
              className="group block bg-card border border-border hover:border-primary/50 rounded-2xl overflow-hidden transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex justify-center items-center bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="flex items-center gap-2 bg-primary/90 px-4 py-2 rounded-full font-medium text-foreground">
                    <ExternalLink className="w-4 h-4" />
                    Ver Projeto
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <span className="font-medium text-primary text-xs">{project.category}</span>
                <h3 className="mt-2 mb-3 font-semibold text-foreground group-hover:text-primary text-xl transition-colors">
                  {project.title}
                </h3>
                <p className="mb-4 text-muted-foreground text-sm line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-secondary px-2 py-1 rounded-md text-secondary-foreground text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        
      </div>
    </section>
  )
}
