import Image from "next/image";
import { Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Image
              src="/assets/finnova-logo.png"
              alt="Finnova"
              width={120}
              height={40}
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Fundación Europea que apoya la financiación de la innovación en empresas, regiones y
              municipios desde 2010.
            </p>
          </div>

          {/* Services links */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                { label: "Consultoría Europea", href: "https://finnova.eu/en/consultoria-europea_eng" },
                { label: "Aceleradora de Startups", href: "https://finnova.eu/en/aceleradora-de-startup_eng" },
                { label: "Cursos Fondos Europeos", href: "https://finnova.eu/en/cursos-de-fondos-europeos_eng" },
                { label: "NextGeneration EU", href: "https://finnova.eu/en/nextgeneration_eng" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Foundation links */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-4">Fundación</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-accent transition-colors">Sobre Nosotros</a></li>
              <li><a href="#proyectos" className="hover:text-accent transition-colors">Proyectos</a></li>
              <li>
                <a
                  href="https://finnova.eu/en/noticias_eng/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  Noticias
                </a>
              </li>
              <li><a href="#contacto" className="hover:text-accent transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contact & social */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-4">Contacto</h4>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>Avenue des Arts, 56</p>
              <p>Brussels 1000, Belgium</p>
            </div>
            <div className="flex gap-3 mt-4">
              {[
                { icon: Youtube, href: "https://www.youtube.com/channel/UCofL2UKVFOJKTcPE5-q4ySA", label: "YouTube" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/finnova-foundation/", label: "LinkedIn" },
                { icon: Twitter, href: "https://twitter.com/finnaborealUE", label: "Twitter" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Fundación Finnova. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Sede en Bruselas · Delegaciones en España
          </p>
        </div>
      </div>
    </footer>
  );
}
