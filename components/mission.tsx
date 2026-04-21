"use client";

import { motion } from "framer-motion";

export function Mission() {
  return (
    <section id="mision" className="py-24 bg-[#DBEAFE] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Mission text */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Nuestra Misión
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A2E] mb-6 font-heading text-balance">
              Un espacio de disfrute y aprendizaje
            </h2>
            <p className="text-lg md:text-xl text-[#5A6A8A] leading-relaxed">
              Que los/las concurrentes tengan un espacio de disfrute y aprendizaje
              generando experiencias compartidas.
            </p>
          </motion.div>

          {/* Venn diagram */}
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <span className="block text-center text-2xl md:text-3xl font-heading font-bold text-accent mb-8">
                Prioridades
              </span>

              {/* Venn diagram — 3 círculos con colores distintos */}
              <div className="relative h-80 w-full max-w-sm mx-auto">

                {/* Disfrute — arriba izquierda — azul */}
                <motion.div
                  className="absolute top-0 left-[10%] w-44 h-44 rounded-full flex items-center justify-center shadow-md"
                  style={{ backgroundColor: "rgba(59, 91, 219, 0.55)" }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="text-white font-bold text-lg drop-shadow-sm">Disfrute</span>
                </motion.div>

                {/* Empatía — arriba derecha — coral */}
                <motion.div
                  className="absolute top-0 right-[10%] w-44 h-44 rounded-full flex items-center justify-center shadow-md"
                  style={{ backgroundColor: "rgba(244, 132, 95, 0.65)" }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <span className="text-white font-bold text-lg drop-shadow-sm">Empatía</span>
                </motion.div>

                {/* Trabajo en equipo — abajo centro — violeta */}
                <motion.div
                  className="absolute top-28 left-1/2 -translate-x-1/2 w-44 h-44 rounded-full flex items-center justify-center shadow-md"
                  style={{ backgroundColor: "rgba(124, 91, 219, 0.60)" }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <span className="text-white font-bold text-lg text-center leading-tight drop-shadow-sm px-4">
                    Trabajo<br />en equipo
                  </span>
                </motion.div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}