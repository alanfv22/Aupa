"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-31Q60u06pRMbmY9dfLjuTH9tWte8KW.png",
    alt: "Niño disfrutando en la piscina",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6CYwPvw5B1YJHuDB4Z0BzQCThPzIfi.png",
    alt: "Taller de arte",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EWPo4ue0d2DxHW5Qi4A7pkbqmls0ZS.png",
    alt: "Clase de música",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2zPadhmu03vlc6ZcEd0Yi3JaqZPNTN.png",
    alt: "Equinoterapia",
    span: "col-span-2 row-span-1",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tcLLdCylsIm17oq1KEJQ28123BPfIx.png",
    alt: "Celebración de fiestas",
    span: "col-span-2 row-span-1",
  },
];

export function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Galería
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Momentos que nos llenan el corazón
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Cada sonrisa, cada logro, cada momento de conexión es un tesoro que celebramos.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.alt}
              className={`relative rounded-2xl overflow-hidden gallery-image ${image.span}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-medium text-sm">{image.alt}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="https://instagram.com/aupacolonia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12.017 0C8.396 0 7.989.013 6.756.072 5.52.13 4.648.322 3.88.6a5.888 5.888 0 00-2.135 1.39A5.888 5.888 0 00.355 4.125C.078 4.893-.115 5.765.072 7c-.059 1.234-.072 1.641-.072 5.262 0 3.62.013 4.028.072 5.261.058 1.235.25 2.107.528 2.875a5.888 5.888 0 001.39 2.135 5.888 5.888 0 002.135 1.39c.768.278 1.64.47 2.875.528 1.233.059 1.64.072 5.261.072 3.62 0 4.028-.013 5.261-.072 1.235-.058 2.107-.25 2.875-.528a5.888 5.888 0 002.135-1.39 5.888 5.888 0 001.39-2.135c.278-.768.47-1.64.528-2.875.059-1.233.072-1.64.072-5.261 0-3.62-.013-4.028-.072-5.261-.058-1.235-.25-2.107-.528-2.875a5.888 5.888 0 00-1.39-2.135A5.888 5.888 0 0019.895.6c-.768-.278-1.64-.47-2.875-.528C15.787.013 15.38 0 11.76 0h.257zm-.717 2.162c.355-.006.748 0 1.193 0 3.56 0 3.982.01 5.388.072 1.299.059 2.003.275 2.473.457.621.241 1.064.53 1.529.996.465.465.755.909.996 1.53.182.47.398 1.174.457 2.473.062 1.406.075 1.828.075 5.387 0 3.56-.013 3.981-.075 5.388-.059 1.299-.275 2.003-.457 2.473-.241.621-.53 1.064-.996 1.529-.465.465-.908.755-1.529.996-.47.182-1.174.398-2.473.457-1.406.062-1.828.075-5.388.075s-3.982-.013-5.388-.075c-1.299-.059-2.003-.275-2.473-.457a4.12 4.12 0 01-1.53-.996 4.12 4.12 0 01-.996-1.53c-.182-.47-.398-1.174-.457-2.473-.062-1.406-.072-1.828-.072-5.39 0-3.56.01-3.98.072-5.386.059-1.299.275-2.004.457-2.474.241-.621.53-1.064.996-1.53.465-.465.909-.755 1.53-.996.47-.182 1.174-.398 2.473-.459 1.231-.054 1.708-.069 4.195-.072v.003zm8.32 1.99a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88zm-6.62 1.684a6.183 6.183 0 100 12.366 6.183 6.183 0 000-12.366zM12 8a4 4 0 110 8 4 4 0 010-8z"
                clipRule="evenodd"
              />
            </svg>
            Ver más en Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
