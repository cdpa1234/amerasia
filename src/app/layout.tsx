import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amerasia Technology Solutions - Cobranzas y Ventas",
  description:
    "Tu aliado estratégico que reduce costos y maximiza resultados en cobranzas y ventas. Ahorra hasta 30% con nuestras soluciones tecnológicas en Bogotá.",
  authors: [{ name: "Amerasia Technology Solutions" }],
  openGraph: {
    title: "Amerasia Technology Solutions - Cobranzas y Ventas",
    description: "Tu aliado estratégico que reduce costos y maximiza resultados en cobranzas y ventas.",
    type: "website",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lovable_dev",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
