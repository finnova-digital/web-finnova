"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Rocket,
  GraduationCap,
  Video,
  Bell,
  Landmark,
  Briefcase,
  Trophy,
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Consultoría Europea",
    description:
      "Expertise en programas de financiación europeos: redacción de propuestas, gestión de proyectos y reporting. Experiencia en Horizon 2020, EIC Accelerator, LIFE, Interreg, Erasmus+ y Europe for Citizens.",
    link: "https://finnova.eu/en/consultoria-europea_eng",
  },
  {
    icon: Rocket,
    title: "Aceleradora de Startups",
    description:
      "Startup Europe Accelerathon identifica ideas innovadoras financiables por la UE, alineadas con los ODS. Aceleramos startups y PYMEs hacia modelos de negocio sostenibles y circulares.",
    link: "https://finnova.eu/en/aceleradora-de-startup_eng",
  },
  {
    icon: GraduationCap,
    title: "Cursos de Fondos Europeos",
    description:
      "Formación diseñada por expertos en UE. Plataforma e-learning gamificada con tutorías constantes. Obtén tu certificado oficial Finnova y accede a financiación para tus proyectos.",
    link: "https://finnova.eu/en/cursos-de-fondos-europeos_eng",
  },
  {
    icon: Video,
    title: "Organización de Webinarios",
    description:
      "Eventos online, conferencias y webinarios alineados con los ODS de la UE. Creamos contenido y acciones de networking para promover sinergias entre miembros.",
    link: "https://finnova.eu/en/organizacion-de-webinarios_eng",
  },
  {
    icon: Bell,
    title: "Sistema de Alertas Mailing",
    description:
      "Mantente informado de las últimas convocatorias de fondos europeos con nuestro sistema de alertas personalizado por sector y área de interés.",
    link: "https://finnova.eu/en/sistema-de-alertas-mailing_eng",
  },
  {
    icon: Landmark,
    title: "Programas NextGeneration",
    description:
      "Asesoramiento especializado para acceder a los fondos Next Generation EU. Te guiamos en todo el proceso de solicitud y ejecución de los fondos de recuperación.",
    link: "https://finnova.eu/en/nextgeneration_eng",
  },
  {
    icon: Briefcase,
    title: "Programas de Empleabilidad",
    description:
      "Programas de empleo y formación para jóvenes europeos. Plataformas de servicios de empleo y mentoría para ventures emprendedoras innovadoras.",
    link: "https://finnova.eu/en/empleabilidad_eng",
  },
  {
    icon: Trophy,
    title: "Startup Europe Awards",
    description:
      "Premios que reconocen las startups más innovadoras de Europa. Conectamos talento emprendedor con inversores, corporaciones y administraciones públicas.",
    link: "https://startupeuropeawards.eu/",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent font-semibold text-sm tracking-widest uppercase">
              Qué Hacemos
            </span>
            <div className="h-px w-12 bg-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Servicios para acceder a la{" "}
            <span className="text-gradient">financiación europea</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Desarrollamos servicios para spin-offs, startups, PYMEs y emprendedores en colaboración
            con instituciones públicas que promueven la sostenibilidad ambiental, la inclusión social
            y el emprendimiento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
          {services.map((service, i) => (
            <motion.a
              key={service.title}
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border border-border/50 flex flex-col"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {service.description}
              </p>
              <div className="mt-4 text-accent text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Más información →
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
