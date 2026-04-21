import type { Metadata, Viewport } from 'next'
import { Nunito, Quicksand } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const nunito = Nunito({ 
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const quicksand = Quicksand({ 
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

export const metadata: Metadata = {
  title: 'AUPA Colonia Recreativa | Inclusión y Diversión para Todos',
  description: 'Colonia recreativa inclusiva para niñas, niños y adolescentes con autismo y otros desafíos en el desarrollo. Arte, música, deportes, equinoterapia y más en un ambiente de amor y contención.',
  keywords: ['colonia recreativa', 'inclusión', 'autismo', 'niños', 'adolescentes', 'equinoterapia', 'arte', 'música', 'deportes', 'Uruguay'],
  generator: 'v0.app',
  openGraph: {
    title: 'AUPA Colonia Recreativa',
    description: 'Un espacio donde cada niño brilla. Actividades inclusivas diseñadas con amor.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#3B82F6',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${nunito.variable} ${quicksand.variable} bg-[#F8F6FF]`}>
      <body className="font-sans antialiased bg-[#F8F6FF]">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
