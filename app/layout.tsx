import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tudominio.com"),
  title: {
    default: "Cabañas en Huasca de Ocampo | Descanso en el bosque",
    template: "%s | Cabañas en Huasca",
  },
  description:
    "Renta de cabañas elegantes en Huasca de Ocampo, Hidalgo. Escapadas románticas, cabañas familiares, fogata, naturaleza y descanso.",
  keywords: [
    "cabañas en Huasca",
    "cabañas Huasca de Ocampo",
    "renta de cabañas Hidalgo",
    "cabañas románticas Huasca",
    "hospedaje en Huasca",
    "cabañas con chimenea",
  ],
  authors: [{ name: "Cabañas Bosque Encantado" }],
  openGraph: {
    title: "Cabañas en Huasca de Ocampo",
    description:
      "Hospédate en cabañas elegantes rodeadas de bosque, tranquilidad y experiencias únicas.",
    url: "https://tudominio.com",
    siteName: "Cabañas Bosque Encantado",
    images: [
      {
        url: "/images/cabanas/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Cabañas en Huasca de Ocampo",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cabañas en Huasca de Ocampo",
    description:
      "Renta de cabañas elegantes para parejas, familias y escapadas de descanso.",
    images: ["/images/cabanas/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}