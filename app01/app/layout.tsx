import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ModaEstilo 2026 | Boutique Delicada",
  description: "Tendências de roupas urbanas e românticas com um toque de alta-costura.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" class="h-full antialiased">
      {/* bg-background e text-foreground aqui aplicam o rosa e o marrom em todas as páginas */}
      <body class="min-h-full bg-background text-foreground flex flex-col selection:bg-accent">
        {children}
      </body>
    </html>
  );
}
