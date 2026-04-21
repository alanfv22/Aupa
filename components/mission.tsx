"use client";

import { motion } from "framer-motion";

export function Mission() {
  return (
    <section id="mision" className="py-24 bg-section-alt relative overflow-hidden">
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-heading text-balance">
              Un espacio de disfrute y aprendizaje
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Que los/las concurrentes tengan un espacio de disfrute y aprendizaje 
              generando experiencias compartidas.
            </p>
          </motion.div>

          {/* Venn diagram */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <span className="block text-center text-2xl md:text-3xl font-heading font-bold text-accent mb-8">
                Prioridades
              </span>
              
              {/* Venn diagram circles */}
              <div className="relative h-80 w-full max-w-md mx-auto">
                {/* Disfrute circle - top left */}
                <motion.div
                  className="absolute top-0 left-1/2 -translate-x-[70%] w-40 h-40 md:w-48 md:h-48 rounded-full bg-accent/70 flex items-center justify-center shadow-lg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="text-white font-semibold text-lg md:text-xl">Disfrute</span>
                </motion.div>
                
                {/* Empatia circle - top right */}
                <motion.div
                  className="absolute top-0 left-1/2 -translate-x-[30%] w-40 h-40 md:w-48 md:h-48 rounded-full bg-accent/70 flex items-center justify-center shadow-lg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <span className="text-white font-semibold text-lg md:text-xl">Empatía</span>
                </motion.div>
                
                {/* Trabajo en equipo circle - bottom center */}
                <motion.div
                  className="absolute top-24 md:top-28 left-1/2 -translate-x-1/2 w-40 h-40 md:w-48 md:h-48 rounded-full bg-accent/70 flex items-center justify-center shadow-lg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <span className="text-white font-semibold text-lg md:text-xl text-center px-4">
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
