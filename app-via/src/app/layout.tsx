import type { Metadata } from "next";
import "./globals.css";
import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Rodape from "@/components/Rodape/Rodape";
import Chatbot from "@/components/ChatBot/ChatBot"

export const metadata: Metadata = {
  title: "ViaMobilidade",
  description: "Generated by create next app",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="pt-br">
      <body>
        <Cabecalho />
        <div className="container min-h-[78vh]">
          {children}
        </div>
        <Rodape />
        <Chatbot />
      </body>
    </html>
  );
}