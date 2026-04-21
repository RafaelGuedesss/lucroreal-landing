import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Lucro Real — Descubra seu Lucro Real por Corrida",
  description:
    "Chega de trabalhar no escuro. O Lucro Real calcula automaticamente quanto você realmente ganha depois de descontar combustível, km rodado e todos os custos — em tempo real.",
  keywords: [
    "motorista uber",
    "controle financeiro",
    "lucro real",
    "entregador iFood",
    "freteiro",
    "rastreamento km",
    "lucro real app",
  ],
  openGraph: {
    title: "Lucro Real — Descubra seu Lucro Real",
    description:
      "A ferramenta que todo motorista profissional precisava. Saiba exatamente quanto você ganha por corrida.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${geist.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
