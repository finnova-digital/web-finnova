"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    name: "LIFE-ECODIGESTION 2.0",
    tag: "LIFE",
    area: "Medio Ambiente",
    description:
      "Escalado de tecnología para producción de biogás bajo demanda con lodos de EDAR, utilizando residuos agroalimentarios como cosustrato. Maximiza la producción de biogás y la capacidad de tratamiento de residuos.",
  },
  {
    name: "INTERREG CILIFO",
    tag: "INTERREG",
    area: "Cambio Climático",
    description:
      "Inversión para abordar riesgos específicos y garantizar la adaptación a desastres en el marco del programa POCTEP, con enfoque en adaptación al cambio climático.",
  },
  {
    name: "RES4CITY",
    tag: "HORIZON",
    area: "Energía Renovable",
    description:
      "Desarrollo de tecnologías de energía renovable sostenible en ciudades, promoviendo circularidad y desplegando programas educativos innovadores co-diseñados con stakeholders.",
  },
  {
    name: "CirCoAX",
    tag: "COSME",
    area: "Economía Circular",
    description:
      "Transformación de las industrias de moda y textil a través de innovación social, generando modelos de negocio circulares con la aceleradora CirCoAX.",
  },
  {
    name: "NextFumigreen",
    tag: "LIFE",
    area: "Agricultura",
    description:
      "Desarrollo de fumigantes naturales a partir de extractos vegetales para controlar plagas en cultivos hortícolas, mejorando la seguridad alimentaria y biodiversidad.",
  },
  {
    name: "INTERREG FIREPOCTEP",
    tag: "INTERREG",
    area: "Prevención Incendios",
    description:
      "Capitalización de buenas prácticas en prevención y extinción de incendios forestales, activando el EMPLEO VERDE en gestión de riesgos.",
  },
  {
    name: "INTERREG NAPOCTEP",
    tag: "INTERREG",
    area: "Turismo Cultural",
    description:
      "Promoción del patrimonio cultural del periodo napoleónico mediante la creación de rutas turísticas innovadoras entre Portugal y España.",
  },
  {
    name: "DESTINE",
    tag: "ERASMUS+",
    area: "Educación",
    description:
      "Diversidad y tolerancia en entornos de aprendizaje online, desarrollando competencias de profesores y formadores de FP en educación inclusiva.",
  },
  {
    name: "Multilevel Hybrid Learning",
    tag: "ERASMUS+",
    area: "Formación",
    description:
      "Modelo innovador que impulsa la formación profesional con la adquisición de nuevas competencias universitarias adaptadas a perfiles emergentes del mercado laboral.",
  },
];

const tags = ["Todos", "LIFE", "INTERREG", "HORIZON", "COSME", "ERASMUS+"];

const tagColors: Record<string, string> = {
  LIFE: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  INTERREG: "bg-sky-500/10 text-sky-600 border-sky-500/20",
  HORIZON: "bg-amber-500/10 text-amber-600 border-amber-500/20",
  COSME: "bg-rose-500/10 text-rose-600 border-rose-500/20",
  "ERASMUS+": "bg-indigo-500/10 text-indigo-600 border-indigo-500/20",
};

export default function ProjectsSection() {
  const [filter, setFilter] = useState("Todos");
  const filtered = filter === "Todos" ? projects : projects.filter((p) => p.tag === filter);

  return (
    <section id="proyectos" className="py-28 bg-section-warm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent font-semibold text-sm tracking-widest uppercase">
              Proyectos Europeos
            </span>
            <div className="h-px w-12 bg-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            En lo que <span className="text-gradient">participamos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre los proyectos europeos que gestionamos y en los que participamos activamente,
            abarcando medio ambiente, energía, educación, turismo y más.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === tag
                  ? "bg-accent text-accent-foreground shadow-md"
                  : "bg-card text-muted-foreground hover:text-foreground border border-border/50"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <motion.div
              key={project.name}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                    tagColors[project.tag] || "bg-muted text-muted-foreground"
                  }`}
                >
                  {project.tag}
                </span>
                <span className="text-xs text-muted-foreground">{project.area}</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                {project.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
