"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/10"
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 rounded-full bg-accent/15"
          animate={{ y: [0, 15, 0], scale: [1, 0.9, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-12 h-12 rounded-full bg-aupa-sky/20"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-60 right-1/3 w-24 h-24 rounded-full bg-aupa-coral/10"
          animate={{ y: [0, 20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span>Colonia Todo el Año</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="text-balance">Donde cada niño </span>
              <span className="text-primary">brilla</span>
              <span className="text-balance"> a su manera</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Colonia recreativa inclusiva para niñas, niños y adolescentes con autismo 
              y otros desafíos en el desarrollo. Un espacio de amor, contención y alegría.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a href="https://wa.me/message/COJ2PIBARQ6MA1" target="_blank" rel="noopener noreferrer">
                  <Heart className="w-5 h-5 mr-2" />
                  Contactanos
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 rounded-xl border-2 hover:bg-secondary transition-all duration-300"
                asChild
              >
                <a href="#quienes-somos">
                  Conocer Más
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="flex-1 w-full mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl lg:rounded-3xl transform rotate-3 scale-105 hidden lg:block" />
              <div className="relative h-64 lg:h-auto w-full overflow-hidden rounded-2xl lg:rounded-3xl shadow-xl lg:shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-31Q60u06pRMbmY9dfLjuTH9tWte8KW.png"
                  alt="Niño feliz disfrutando en la piscina de AUPA Colonia"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Floating badge - hidden on mobile */}
              <motion.div
                className="absolute -bottom-4 -right-4 bg-[#F8F6FF] px-6 py-3 rounded-2xl shadow-xl border border-border hidden lg:block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <p className="text-sm font-medium text-muted-foreground">Más de</p>
                <p className="text-2xl font-bold text-primary">5.200+</p>
                <p className="text-sm text-muted-foreground">seguidores</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
