"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Layers, Smile } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Todos los sábados",
  },
  {
    icon: Clock,
    title: "De 10:00 a 16:00hs",
  },
  {
    icon: Layers,
    title: "Múltiples talleres",
  },
  {
    icon: Smile,
    title: "Disfrute garantizado",
  },
];

export function Schedule() {
  return (
    <section className="py-16 bg-[#F5E6D3]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <feature.icon className="w-10 h-10 text-accent stroke-[1.5]" />
              </div>
              <p className="text-foreground font-medium text-sm md:text-base">{feature.title}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-[#C7D2F8] rounded-2xl p-6 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-foreground font-medium text-lg md:text-xl italic">
            &quot;La naturaleza como ambiente facilitador de encuentros sociales&quot;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
