"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section id="contacto" className="py-28 bg-dark-section relative overflow-hidden">
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full bg-finnova-sky/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-accent" />
              <span className="text-accent font-semibold text-sm tracking-widest uppercase">
                Contacto
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              ¿Quieres acceder a{" "}
              <span className="text-gradient">fondos europeos</span>?
            </h2>
            <p className="text-lg text-primary-foreground/60 leading-relaxed mb-10">
              Nuestro equipo internacional de profesionales está listo para ayudarte a identificar
              las mejores oportunidades de financiación europea para tus proyectos de innovación,
              sostenibilidad y emprendimiento.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <a
                  href="https://finnova.eu/en/home_eng/#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar información
                  <ArrowRight className="ml-1" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-primary-foreground mb-1">Sede Central</h3>
                  <p className="text-sm text-primary-foreground/60">
                    Avenue des Arts, 56
                    <br />
                    Brussels 1000, Bélgica
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-primary-foreground mb-1">
                    Delegaciones España
                  </h3>
                  <p className="text-sm text-primary-foreground/60">
                    Madrid · Cataluña · Valencia · Andalucía · País Vasco
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-primary-foreground mb-1">Escríbenos</h3>
                  <p className="text-sm text-primary-foreground/60">
                    Completa nuestro formulario de contacto o escríbenos directamente para consultar
                    sobre oportunidades de financiación.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
