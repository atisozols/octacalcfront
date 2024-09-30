import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Octaauto",
  description: "Lētākie apdrošināšanas kompāniju piedāvājumi vienā mājaslapā!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-gradient-to-b from-slate-800 to-slate-400 text-white  min-h-screen`}
      >
        <Header />
        {children}
        <Partners />
        <Footer />
      </body>
    </html>
  );
}
