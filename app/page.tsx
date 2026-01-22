import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Metrics } from "@/components/metrics"
import { Projects } from "@/components/projects"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Metrics />
      <Projects />
      <Testimonials />
      <Contact />
      <About />
      <Footer />
    </main>
  )
}
