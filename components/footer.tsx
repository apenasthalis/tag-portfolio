import Link from "next/link"
import { Github, Linkedin, Instagram, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/apenasthalis", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/thalis-gabriel", label: "LinkedIn" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/tagprogramming_/", label: "Instagram" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
  ]

  const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#projetos", label: "Projetos" },
    { href: "#recomendacoes", label: "Recomendações" },
    { href: "#contato", label: "Contato" },
  ]

  return (
    <footer className="py-12 border-border border-t">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="items-center gap-8 grid md:grid-cols-3">
          {/* Logo */}
          <div className="flex justify-center md:justify-start items-center gap-2">
            <span className="font-bold text-primary text-xl">{"<"}</span>
            <span className="font-bold text-foreground text-lg">TAG</span>
            <span className="font-bold text-primary text-xl">{" />"}</span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
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
                className="flex justify-center items-center bg-card border border-border hover:border-primary rounded-lg w-10 h-10 text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.label}
                target="_blank"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-border border-t text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Tag Programming. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
