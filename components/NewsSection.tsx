"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";

const news = [
  {
    date: "27 Feb 2026",
    title: "ONE-BLUE lanza la campaña final de muestreo del proyecto en el Océano Atlántico",
    excerpt:
      "ONE-BLUE lanzó oficialmente su última campaña en el Atlántico el martes 24 de febrero, partiendo desde Vigo...",
    link: "https://finnova.eu/en/one-blue-launches-the-final-sampling-campaign-of-the-project-in-the-atlantic-ocean/",
    image:
      "https://finnova.eu/wp-content/uploads/2026/02/Expedicion-One-Blue-Atlantic-en-el-Puerto-de-Vigo-2.jpeg.webp",
  },
  {
    date: "20 Feb 2026",
    title: "Finnova participará en Transfiere con el proyecto europeo ECOFFEE",
    excerpt:
      "Juanma Revuelta, CEO de Finnova, presentará el proyecto europeo ECOFFEE en un 'Elevator Pitch' y moderará una mesa redonda...",
    link: "https://finnova.eu/en/finnova-foundation-will-have-double-participation-in-transfiere-through-an-elevator-pitch-and-the-moderation-of-a-roundtable/",
    image: "https://finnova.eu/wp-content/uploads/2026/02/2.png.webp",
  },
  {
    date: "20 Feb 2026",
    title: "C-SUSTAIN reúne a 70 jóvenes europeos en un Makeathon internacional",
    excerpt:
      "Participantes de diferentes países trabajaron en siete equipos para abordar retos como la contaminación por plásticos...",
    link: "https://finnova.eu/en/the-c-sustain-project-brings-together-70-young-europeans-in-an-international-makeathon-on-circular-economy-and-entrepreneurship/",
    image: "https://finnova.eu/wp-content/uploads/2026/02/makeathon-1-after.png.webp",
  },
  {
    date: "18 Feb 2026",
    title: "ONE-BLUE en WEX Global 2026 en Sevilla",
    excerpt:
      "Participación en la sesión 'Navigating Emerging Contaminants & Regulatory Landscapes' con Juanma Revuelta, CEO de Finnova...",
    link: "https://finnova.eu/en/one-blue-at-wex-global-2026-in-seville/",
    image: "https://finnova.eu/wp-content/uploads/2026/02/Untitled-design-11.jpg.webp",
  },
];

export default function NewsSection() {
  return (
    <section id="noticias" className="py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-accent" />
              <span className="text-accent font-semibold text-sm tracking-widest uppercase">
                Actualidad
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Últimas <span className="text-gradient">noticias</span>
            </h2>
          </div>
          <a
            href="https://finnova.eu/en/noticias_eng/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent font-semibold text-sm hover:underline flex items-center gap-1 mt-4 md:mt-0"
          >
            Ver todas las noticias <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 hover:-translate-y-1 flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Calendar className="w-3 h-3" />
                  {item.date}
                </div>
                <h3 className="text-sm font-bold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2 flex-1">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                  {item.excerpt}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
