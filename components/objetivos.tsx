"use client";

import { motion } from "framer-motion";

const objetivos = [
  "Desarrollar habilidades motoras que impliquen movimientos funcionales y expresivos",
  "Respetar la naturaleza y la solidaridad entre las personas",
  "Desarrollar las habilidades sociales",
  "Fomentar el trabajo individual y en equipo",
  "Facilitar la relajación física y mental",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function Objetivos() {
  return (
    <section id="objetivos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Nuestros Objetivos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-heading">
            Objetivos
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {objetivos.map((objetivo, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#C7D2F8] rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <p className="text-foreground font-medium leading-relaxed">
                {objetivo}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
