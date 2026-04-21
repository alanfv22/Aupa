"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const talleres = [
  { name: "Sala sensorial", color: "bg-[#C7D2F8]", textColor: "text-foreground" },
  { name: "Taller de cocina", color: "bg-[#C7D2F8]", textColor: "text-foreground" },
  { name: "Actividades acuáticas", color: "bg-primary", textColor: "text-white" },
  { name: "Arte", color: "bg-[#C7D2F8]", textColor: "text-foreground" },
  { name: "Huerta", color: "bg-[#C7D2F8]", textColor: "text-foreground" },
  { name: "Deporte", color: "bg-accent", textColor: "text-white" },
  { name: "Taller de cine", color: "bg-[#C7D2F8]", textColor: "text-foreground" },
  { name: "Actividades con caballos", color: "bg-accent", textColor: "text-white" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function Talleres() {
  return (
    <section id="talleres" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image with overlay */}
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-64 md:h-80 lg:h-[500px] w-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xiXzaVHp16gmC8Yts3IFWG0i830QGv.png"
                alt="Nuestros talleres"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Talleres bubbles */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Nuestros Talleres
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 font-heading">
              8 talleres para explorar
            </h2>
            
            <motion.div
              className="flex flex-wrap gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {talleres.map((taller) => (
                <motion.div
                  key={taller.name}
                  variants={itemVariants}
                  className={`${taller.color} ${taller.textColor} px-6 py-3 rounded-full font-medium text-sm md:text-base shadow-md hover:shadow-lg transition-shadow duration-300 cursor-default`}
                  whileHover={{ scale: 1.05 }}
                >
                  {taller.name}
                </motion.div>
              ))}
            </motion.div>

            <p className="mt-8 text-muted-foreground leading-relaxed">
              Cada taller está diseñado para potenciar habilidades únicas en un ambiente 
              seguro, amoroso y lleno de diversión.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
