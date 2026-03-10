"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Users, Mic, Radio, Award, Rocket, Calendar } from "lucide-react";

const counters = [
  { icon: Rocket, value: 500, suffix: "+", label: "Empresas aceleradas" },
  { icon: Users, value: 10000, suffix: "+", label: "Personas formadas" },
  { icon: Calendar, value: 200, suffix: "+", label: "Webinarios realizados" },
  { icon: Mic, value: 1500, suffix: "+", label: "Ponentes en webinarios" },
  { icon: Radio, value: 80000, suffix: "+", label: "Asistentes a webinarios" },
  { icon: Award, value: 30, suffix: "+", label: "Hackathones realizados" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = Math.max(1, Math.floor(target / 50));
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 25);
    return () => clearInterval(interval);
  }, [started, target]);

  const display = count >= 1000 ? `${Math.round(count / 1000)}k` : `${count}`;

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-extrabold text-accent">
      {display}
      {suffix}
    </div>
  );
}

export default function ImpactSection() {
  return (
    <section className="py-24 bg-section-gradient">
      <div className="container mx-auto px-4">
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
              Impacto
            </span>
            <div className="h-px w-12 bg-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Nuestros <span className="text-gradient">resultados</span> hablan
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {counters.map((counter, i) => (
            <motion.div
              key={counter.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <counter.icon className="w-6 h-6 text-accent" />
              </div>
              <CountUp target={counter.value} suffix={counter.suffix} />
              <p className="text-sm text-muted-foreground mt-2">{counter.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
