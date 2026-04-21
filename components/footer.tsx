"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and tagline */}
          <motion.div
            className="flex flex-col items-center md:items-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/356230858_626495576093895_7311191561093851770_n.-63GT8MfUOziafmRJSLe1zozYVL2iQ1.jpg"
                alt="AUPA Logo"
                width={56}
                height={56}
                className="rounded-full"
              />
              <div>
                <h3 className="font-bold text-xl">AUPA</h3>
                <p className="text-sm text-background/70">Colonia Recreativa</p>
              </div>
            </div>
            <p className="text-background/70 text-sm max-w-xs text-center md:text-left italic">
              &quot;La naturaleza como ambiente facilitador de encuentros sociales&quot;
            </p>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <a
              href="https://instagram.com/aupacolonia"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.017 0C8.396 0 7.989.013 6.756.072 5.52.13 4.648.322 3.88.6a5.888 5.888 0 00-2.135 1.39A5.888 5.888 0 00.355 4.125C.078 4.893-.115 5.765.072 7c-.059 1.234-.072 1.641-.072 5.262 0 3.62.013 4.028.072 5.261.058 1.235.25 2.107.528 2.875a5.888 5.888 0 001.39 2.135 5.888 5.888 0 002.135 1.39c.768.278 1.64.47 2.875.528 1.233.059 1.64.072 5.261.072 3.62 0 4.028-.013 5.261-.072 1.235-.058 2.107-.25 2.875-.528a5.888 5.888 0 002.135-1.39 5.888 5.888 0 001.39-2.135c.278-.768.47-1.64.528-2.875.059-1.233.072-1.64.072-5.261 0-3.62-.013-4.028-.072-5.261-.058-1.235-.25-2.107-.528-2.875a5.888 5.888 0 00-1.39-2.135A5.888 5.888 0 0019.895.6c-.768-.278-1.64-.47-2.875-.528C15.787.013 15.38 0 11.76 0h.257zm-.717 2.162c.355-.006.748 0 1.193 0 3.56 0 3.982.01 5.388.072 1.299.059 2.003.275 2.473.457.621.241 1.064.53 1.529.996.465.465.755.909.996 1.53.182.47.398 1.174.457 2.473.062 1.406.075 1.828.075 5.387 0 3.56-.013 3.981-.075 5.388-.059 1.299-.275 2.003-.457 2.473-.241.621-.53 1.064-.996 1.529-.465.465-.908.755-1.529.996-.47.182-1.174.398-2.473.457-1.406.062-1.828.075-5.388.075s-3.982-.013-5.388-.075c-1.299-.059-2.003-.275-2.473-.457a4.12 4.12 0 01-1.53-.996 4.12 4.12 0 01-.996-1.53c-.182-.47-.398-1.174-.457-2.473-.062-1.406-.072-1.828-.072-5.39 0-3.56.01-3.98.072-5.386.059-1.299.275-2.004.457-2.474.241-.621.53-1.064.996-1.53.465-.465.909-.755 1.53-.996.47-.182 1.174-.398 2.473-.459 1.231-.054 1.708-.069 4.195-.072v.003zm8.32 1.99a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88zm-6.62 1.684a6.183 6.183 0 100 12.366 6.183 6.183 0 000-12.366zM12 8a4 4 0 110 8 4 4 0 010-8z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://wa.me/message/COJ2PIBARQ6MA1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors"
              aria-label="WhatsApp"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <a
              href="mailto:aupacoloniarecreativa@hotmail.com"
              className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
            <p>&copy; {currentYear} AUPA Colonia Recreativa. Todos los derechos reservados.</p>
            <p className="flex items-center gap-1">
              Hecho con <Heart className="w-4 h-4 text-red-400 fill-current" /> para cada niño especial
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
