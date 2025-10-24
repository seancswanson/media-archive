import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
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
    <html lang="en" className={`${instrumentSerif.className} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
