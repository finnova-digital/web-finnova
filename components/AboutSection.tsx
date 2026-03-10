"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Globe, Users, Award } from "lucide-react";
import Image from "next/image";

const highlights = [
  { icon: Globe, text: "Sede en Bruselas, a pasos de las instituciones europeas" },
  { icon: Users, text: "Delegaciones en Madrid, Cataluña, Valencia, Andalucía y País Vasco" },
  { icon: Award, text: "Experiencia en Horizon 2020, LIFE, Interreg, Erasmus+ y más" },
  { icon: CheckCircle2, text: "Transferencia tecnológica y conexión interregional" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-28 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-hero">
              <Image
                src="/assets/about-team.png"
                alt="Equipo Finnova trabajando en proyectos europeos"
                width={800}
                height={600}
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-finnova-deep/30 to-transparent" />
            </div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-card rounded-xl p-5 shadow-card-hover border border-border/50 max-w-[220px]"
            >
              <div className="text-3xl font-extrabold text-accent mb-1">2010</div>
              <p className="text-sm text-muted-foreground">Año de fundación en Bruselas, Bélgica</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-accent" />
              <span className="text-accent font-semibold text-sm tracking-widest uppercase">
                Sobre Finnova
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              La fundación europea que impulsa la{" "}
              <span className="text-gradient">innovación</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Finnova es la Fundación Europea que trabaja por el compromiso constante con la
              innovación empresarial y la excelencia del conocimiento aplicado. Promovemos redes de
              alto nivel y eventos para buscar recursos y financiación europea relacionada con la
              transferencia tecnológica, la modernización y el desarrollo competitivo.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              Ofrecemos un diálogo estructurado e integrado en sistemas de información estratégica,
              formación, difusión de resultados y comunicación entre instituciones financieras
              internacionales, institutos tecnológicos, universidades, sector privado y
              administraciones públicas.
            </p>

            <div className="space-y-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-accent" />
                  </div>
                  <p className="text-foreground/80 text-sm">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
