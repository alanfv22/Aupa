"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Users, Shield, Sparkles } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Amor Incondicional",
    description: "Cada niño es recibido con cariño y aceptación total.",
  },
  {
    icon: Users,
    title: "Inclusión Real",
    description: "Un espacio donde las diferencias son fortalezas.",
  },
  {
    icon: Shield,
    title: "Contención",
    description: "Equipo profesional capacitado para acompañar.",
  },
  {
    icon: Sparkles,
    title: "Diversión",
    description: "Porque aprender jugando es la mejor manera.",
  },
];

export function About() {
  return (
    <section id="quienes-somos" className="py-24 bg-section-alt relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Colonia Recreativa
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            ¿Quiénes somos?
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
          {/* Image Grid */}
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6CYwPvw5B1YJHuDB4Z0BzQCThPzIfi.png"
                    alt="Taller de arte en AUPA"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2zPadhmu03vlc6ZcEd0Yi3JaqZPNTN.png"
                    alt="Equinoterapia en AUPA"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tcLLdCylsIm17oq1KEJQ28123BPfIx.png"
                    alt="Celebración navideña en AUPA"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EWPo4ue0d2DxHW5Qi4A7pkbqmls0ZS.png"
                    alt="Música en AUPA"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-8 -left-8 w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl text-foreground mb-6 leading-relaxed font-medium">
              Somos una colonia con una propuesta recreativa, dirigida a niños, niñas y adolescentes 
              con autismo y otros desafíos del desarrollo.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              AUPA nació del sueño de crear un espacio donde cada niño pueda 
              disfrutar, aprender y crecer en un ambiente de amor y respeto. 
              Creemos en el poder de la naturaleza como ambiente facilitador de encuentros sociales.
            </p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Contamos con un equipo de profesionales apasionados y capacitados que 
              acompañan a cada participante en su camino único, celebrando sus logros 
              y apoyándolo en sus desafíos.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
