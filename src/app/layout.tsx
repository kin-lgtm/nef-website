import type { Metadata } from "next";
import { Open_Sans } from "next/font/google"; // Open Sans for body
import { Oswald } from "next/font/google"; // Oswald for titles
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NEF - National Environmental Forum",
  description: "Promoting Environmental Awareness and Action in Sri Lanka",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${oswald.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}