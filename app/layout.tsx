import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "WEARECAPA | Desarrollo web, SaaS y producto digital en Madrid",
  description:
    "Consultoría de producto digital en Madrid. Desarrollamos webs, SaaS, dashboards a medida e integraciones con IA para empresas que necesitan producto real, no solo una web bonita.",
  openGraph: {
    title: "WEARECAPA | Desarrollo web, SaaS y producto digital en Madrid",
    description:
      "Consultoría de producto digital en Madrid. Desarrollamos webs, SaaS, dashboards a medida e integraciones con IA para empresas que necesitan producto real, no solo una web bonita.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WEARECAPA | Desarrollo web, SaaS y producto digital en Madrid",
    description:
      "Consultoría de producto digital en Madrid. Desarrollamos webs, SaaS, dashboards a medida e integraciones con IA para empresas que necesitan producto real, no solo una web bonita.",
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
      <GoogleAnalytics gaId="G-WV9NX470NX" />
    </html>
  );
}
