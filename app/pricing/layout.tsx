import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Octaauto",
  description: "Lētākie apdrošināšanas kompāniju piedāvājumi vienā mājaslapā!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Suspense>{children}</Suspense>;
}
