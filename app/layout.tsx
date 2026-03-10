import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Finnova Foundation | Expertos en Fondos Europeos",
  description:
    "Fundación Europea que gestiona y obtiene financiación europea para empresas, regiones y municipios. Más de 15 años de experiencia en Horizon, LIFE, Interreg, Erasmus+ y NextGeneration EU.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
