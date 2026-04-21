"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Visita de conocimiento",
    price: "GRATIS",
    description: "Vení un sábado a conocernos. De 10 a 16hs. Sin compromiso.",
    features: [],
    color: "border-green-500",
    badgeColor: "bg-green-500",
    badge: null,
    highlighted: false,
  },
  {
    name: "Colonia semanal",
    price: "$85.000",
    period: "/mes",
    description: "Acceso completo a todas las actividades.",
    features: [
      "Todos los sábados del mes",
      "Todos los talleres",
      "Almuerzo incluido",
      "Actividades al aire libre",
    ],
    color: "border-primary",
    badgeColor: "bg-primary",
    badge: "Más elegido",
    highlighted: true,
  },
  {
    name: "Taller individual",
    price: "$12.000",
    period: " por encuentro",
    description: "Elegí el taller que más le guste a tu hijo/a.",
    features: [],
    color: "border-accent",
    badgeColor: "bg-accent",
    badge: null,
    highlighted: false,
  },
];

export function Pricing() {
  const scrollToForm = () => {
    const formSection = document.getElementById("agendar");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="aranceles" className="py-24 bg-section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Aranceles
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-heading">
            Nuestros Aranceles
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative bg-card rounded-2xl p-8 shadow-lg border-2 ${plan.color} ${
                plan.highlighted ? "scale-105 shadow-2xl" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.badge && (
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 ${plan.badgeColor} text-white text-sm font-medium px-4 py-1 rounded-full`}>
                  {plan.badge}
                </div>
              )}
              
              <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl md:text-4xl font-bold text-foreground">{plan.price}</span>
                {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
              </div>
              <p className="text-muted-foreground mb-6 text-sm">{plan.description}</p>
              
              {plan.features.length > 0 && (
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              <Button
                onClick={scrollToForm}
                className={`w-full rounded-xl ${
                  plan.highlighted
                    ? "bg-primary hover:bg-primary/90 text-white"
                    : "bg-secondary hover:bg-secondary/80 text-foreground"
                }`}
              >
                Agendá tu visita
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-sm text-muted-foreground mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Los aranceles pueden actualizarse. Consultá disponibilidad.
        </motion.p>
      </div>
    </section>
  );
}
