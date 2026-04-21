"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Instagram, MapPin } from "lucide-react";

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Escribinos por WhatsApp",
    action: "Enviar mensaje",
    href: "https://wa.me/message/COJ2PIBARQ6MA1",
    color: "bg-green-500",
  },
  {
    icon: Mail,
    title: "Email",
    description: "aupacoloniarecreativa@hotmail.com",
    action: "Enviar email",
    href: "mailto:aupacoloniarecreativa@hotmail.com",
    color: "bg-primary",
  },
  {
    icon: Instagram,
    title: "Instagram",
    description: "@aupacolonia",
    action: "Seguir",
    href: "https://instagram.com/aupacolonia",
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
  },
];

export function Contact() {
  return (
    <section id="contacto" className="py-24 bg-section-alt relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Contacto
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Queremos conocerte
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Si tenés preguntas o querés saber más sobre AUPA, estamos acá para ayudarte.
            No dudes en contactarnos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              className="bg-card rounded-2xl p-8 text-center shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`w-16 h-16 ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <method.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{method.title}</h3>
              <p className="text-muted-foreground mb-6 text-sm">{method.description}</p>
              <Button
                variant="outline"
                className="w-full rounded-xl"
                asChild
              >
                <a href={method.href} target="_blank" rel="noopener noreferrer">
                  {method.action}
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Location info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-5 h-5" />
            <span>Colonia Todo el Año Abierta</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
