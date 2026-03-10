"use client";

import { motion } from "framer-motion";

const programs = [
  { name: "Horizon Europe", desc: "Investigación e innovación" },
  { name: "LIFE", desc: "Medio ambiente y clima" },
  { name: "Interreg", desc: "Cooperación territorial" },
  { name: "Erasmus+", desc: "Educación y formación" },
  { name: "COSME", desc: "Competitividad PYMEs" },
  { name: "NextGeneration EU", desc: "Fondos de recuperación" },
  { name: "EIC Accelerator", desc: "Aceleración de startups" },
  { name: "Green Deal", desc: "Transición ecológica" },
];

export default function EuProgramsSection() {
  return (
    <section className="py-24 bg-dark-section relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-finnova-sky/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent font-semibold text-sm tracking-widest uppercase">
              Nuestra Expertise
            </span>
            <div className="h-px w-12 bg-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Programas europeos que dominamos
          </h2>
          <p className="text-lg text-primary-foreground/60 max-w-2xl mx-auto">
            Más de una década de experiencia trabajando con los principales instrumentos de
            financiación de la Unión Europea
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {programs.map((program, i) => (
            <motion.div
              key={program.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-5 text-center hover:bg-primary-foreground/10 hover:border-accent/30 transition-all duration-300 group cursor-default"
            >
              <h3 className="text-base font-bold text-primary-foreground group-hover:text-accent transition-colors mb-1">
                {program.name}
              </h3>
              <p className="text-xs text-primary-foreground/50">{program.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
