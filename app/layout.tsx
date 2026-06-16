import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Miguel Varona | Desarrollo web y producto digital",
  description:
    "Desarrollo web, SaaS, dashboards e integraciones a medida para empresas.",
  openGraph: {
    title: "Miguel Varona | Desarrollo web y producto digital",
    description:
      "Desarrollo web, SaaS, dashboards e integraciones a medida para empresas.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Miguel Varona | Desarrollo web y producto digital",
    description:
      "Desarrollo web, SaaS, dashboards e integraciones a medida para empresas.",
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
