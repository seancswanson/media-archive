import type { Metadata } from "next";
import { BIZ_UDMincho } from "next/font/google";

import "./globals.css";


const bizUDMincho = BIZ_UDMincho({
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Media Archive",
  description: "Tracking what I've watched, read, and played.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bizUDMincho.className} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
