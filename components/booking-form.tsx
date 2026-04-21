"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, PartyPopper } from "lucide-react";

function getNextSaturdays(count: number): string[] {
  const saturdays: string[] = [];
  const today = new Date();
  let current = new Date(today);
  
  // Find next Saturday
  const dayOfWeek = current.getDay();
  const daysUntilSaturday = (6 - dayOfWeek + 7) % 7 || 7;
  current.setDate(current.getDate() + daysUntilSaturday);
  
  for (let i = 0; i < count; i++) {
    saturdays.push(current.toISOString().split("T")[0]);
    current.setDate(current.getDate() + 7);
  }
  
  return saturdays;
}

const nextSaturdays = getNextSaturdays(8);

export function BookingForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    whatsapp: "",
    email: "",
    nombreChico: "",
    edadChico: "",
    cantidadPersonas: "",
    mensaje: "",
    fecha: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSelectedDate(formData.fecha);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    const date = new Date(dateStr + "T12:00:00");
    return date.toLocaleDateString("es-AR", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  };

  return (
    <section id="agendar" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Reserva
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-heading">
            Agendá tu visita
          </h2>
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium">
            <Calendar className="w-4 h-4" />
            <span>Quedan 4 lugares este sábado</span>
          </div>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="bg-card rounded-2xl p-8 shadow-lg border border-border/50"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Elegí un sábado
                    </label>
                    <select
                      name="fecha"
                      value={formData.fecha}
                      onChange={handleChange}
                      required
                      className="w-full h-10 px-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Seleccioná una fecha</option>
                      {nextSaturdays.map((date) => (
                        <option key={date} value={date}>
                          {formatDate(date)}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nombre completo
                    </label>
                    <Input
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="rounded-xl"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      WhatsApp
                    </label>
                    <Input
                      name="whatsapp"
                      type="tel"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      required
                      className="rounded-xl"
                      placeholder="+54 11 1234-5678"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="rounded-xl"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nombre del chico/a
                    </label>
                    <Input
                      name="nombreChico"
                      value={formData.nombreChico}
                      onChange={handleChange}
                      required
                      className="rounded-xl"
                      placeholder="Nombre"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Edad del chico/a
                    </label>
                    <Input
                      name="edadChico"
                      type="number"
                      min="1"
                      max="18"
                      value={formData.edadChico}
                      onChange={handleChange}
                      required
                      className="rounded-xl"
                      placeholder="Edad"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Cantidad de personas
                    </label>
                    <Input
                      name="cantidadPersonas"
                      type="number"
                      min="1"
                      max="10"
                      value={formData.cantidadPersonas}
                      onChange={handleChange}
                      required
                      className="rounded-xl"
                      placeholder="Cantidad de personas que asistirán"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      ¿Querés contarnos algo sobre tu hijo/a antes de venir? (opcional)
                    </label>
                    <textarea
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-3 py-2 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Contanos lo que quieras..."
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full mt-8 bg-primary hover:bg-primary/90 text-white rounded-xl py-6 text-lg font-medium"
                >
                  Confirmar visita <PartyPopper className="w-5 h-5 ml-2" />
                </Button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                className="bg-card rounded-2xl p-12 shadow-lg border border-border/50 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <PartyPopper className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  ¡Genial! Te esperamos el {formatDate(selectedDate)}
                </h3>
                <p className="text-muted-foreground">
                  Pronto nos ponemos en contacto.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
