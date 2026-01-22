import Link from "next/link"
import { Github, Linkedin, Instagram, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
  ]

  const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#projetos", label: "Projetos" },
    { href: "#recomendacoes", label: "Recomendações" },
    { href: "#contato", label: "Contato" },
  ]

  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="text-primary font-bold text-xl">{"<"}</span>
            <span className="font-bold text-lg text-foreground">tag</span>
            <span className="text-primary font-bold text-xl">{"/>"}</span>
            <span className="font-semibold text-foreground">programming</span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-lg border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Tag Programming. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
