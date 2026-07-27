import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { BRAND_INFO } from '@/data/car-detail-data';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'BM Car Detail | Detailing Profesional en Córdoba',
  description:
    'Taller de Detailing Profesional en Córdoba, Argentina. Tratamientos Cerámicos 9H, Pulido Corrección de Laca, Limpieza de Tapizados y PPF. Más que un lavado, una transformación.',
  keywords: [
    'Car Detail Córdoba',
    'Detailing Profesional Córdoba',
    'Tratamiento Cerámico Córdoba',
    'BM Car Detail',
    'Pulido de autos Córdoba',
  ],
  authors: [{ name: 'BM Car Detail' }],
  metadataBase: new URL('https://bmcardetail.com.ar'),
  openGraph: {
    title: 'BM Car Detail | Detailing Profesional en Córdoba',
    description: 'Más que un lavado, una transformación. Tratamientos Cerámicos 9H, Pulido Corrección de Laca y Detallado de Interiores.',
    url: 'https://bmcardetail.com.ar',
    siteName: 'BM Car Detail',
    locale: 'es_AR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BM Car Detail Córdoba - Tratamiento Cerámico y Detailing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BM Car Detail | Detailing Profesional en Córdoba',
    description: 'Más que un lavado, una transformación. Reserva de turnos por WhatsApp en Córdoba.',
    images: ['/og-image.jpg'],
  },
  other: {
    'theme-color': '#07070a',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <head>
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
      </head>
      <body className="min-h-screen bg-[#07070a] text-slate-100 font-sans antialiased selection:bg-purple-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
