"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 15, suffix: "+", label: "Años de experiencia" },
  { value: 50, suffix: "+", label: "Proyectos europeos" },
  { value: 8, suffix: "", label: "Programas EU" },
  { value: 100, suffix: "M€+", label: "Fondos gestionados" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = Math.max(1, Math.floor(target / 40));
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [started, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero-bg.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-float" />
        <div
          className="absolute bottom-40 left-10 w-72 h-72 rounded-full bg-finnova-sky/5 blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px w-12 bg-accent" />
              <span className="text-accent font-semibold text-sm tracking-widest uppercase">
                Fundación Europea desde 2010
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-primary-foreground leading-[1.1] mb-8"
            >
              Expertos en{" "}
              <span className="text-gradient">fondos europeos</span> e innovación
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-primary-foreground/70 leading-relaxed mb-10 max-w-xl"
            >
              Gestionamos y obtenemos financiación europea para empresas, regiones y municipios.
              Más de 15 años conectando innovación con los programas Horizon, LIFE, Interreg,
              Erasmus+ y NextGeneration EU.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button variant="hero" size="lg" asChild>
                <a href="#servicios">
                  Nuestros servicios
                  <ArrowRight className="ml-1" />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="#proyectos">Ver proyectos</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4 text-primary-foreground/50 text-sm"
            >
              <MapPin className="w-4 h-4" />
              <span>Bruselas · Madrid · Valencia · Barcelona · Sevilla · Bilbao</span>
            </motion.div>
          </div>

          {/* Right: Stats cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="bg-primary-foreground/5 backdrop-blur-md border border-primary-foreground/10 rounded-2xl p-6 text-center hover:bg-primary-foreground/10 transition-colors duration-300"
              >
                <div className="text-4xl font-extrabold text-accent mb-2">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-primary-foreground/60">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Descubre más</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path
            d="M0 60V30C360 0 720 10 1080 25C1260 32 1380 45 1440 30V60H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}
