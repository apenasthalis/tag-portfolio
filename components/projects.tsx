"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-commerce Premium",
    description: "Plataforma de vendas online com checkout otimizado, integração de pagamentos e painel administrativo completo.",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    category: "E-commerce",
    image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    description: "Sistema de análise de dados em tempo real com gráficos interativos e relatórios personalizados.",
    tags: ["React", "TypeScript", "Chart.js", "Node.js"],
    category: "SaaS",
    image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    id: 3,
    title: "App de Delivery",
    description: "Aplicação mobile-first para restaurantes com rastreamento de pedidos e sistema de avaliações.",
    tags: ["React Native", "Firebase", "Maps API", "Redux"],
    category: "Mobile",
    image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
  {
    id: 4,
    title: "Landing Page Institucional",
    description: "Site institucional de alta conversão com animações fluidas e otimização SEO avançada.",
    tags: ["Next.js", "Framer Motion", "SEO", "Analytics"],
    category: "Landing Page",
    image: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  },
  {
    id: 5,
    title: "Sistema de Agendamentos",
    description: "Plataforma completa para gestão de agendamentos com notificações automáticas e calendário integrado.",
    tags: ["Vue.js", "Supabase", "SendGrid", "Vercel"],
    category: "SaaS",
    image: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
  },
  {
    id: 6,
    title: "Portal de Notícias",
    description: "CMS headless com sistema de publicação, categorias e busca avançada por conteúdo.",
    tags: ["Next.js", "Sanity", "Algolia", "Vercel"],
    category: "Blog/CMS",
    image: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Projetos <span className="text-primary">Realizados</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Project Image */}
              <div
                className="h-48 relative overflow-hidden"
                style={{ background: project.image }}
              >
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button
                    type="button"
                    className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Ver projeto"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Ver código"
                  >
                    <Github className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <span className="text-xs font-medium text-primary">{project.category}</span>
                <h3 className="text-xl font-semibold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        
      </div>
    </section>
  )
}
