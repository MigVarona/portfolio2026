import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Varona Studio | Desarrollo web y producto digital",
  description:
    "Desarrollo web, SaaS, dashboards e integraciones a medida para empresas.",
  openGraph: {
    title: "Varona Studio | Desarrollo web y producto digital",
    description:
      "Desarrollo web, SaaS, dashboards e integraciones a medida para empresas.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Varona Studio | Desarrollo web y producto digital",
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
      <GoogleAnalytics gaId="G-WV9NX470NX" />
    </html>
  );
}
