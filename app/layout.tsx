import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Kelvin Akaba - Full-stack developer",
    template: "%s | Kelvin Akaba - Full-stack developer",
  },
  description: "turning ideas into polished interfaces and powerful backend systems users can trust",
  openGraph: {
    title: "Kelvin Akaba - Full-stack developer",
    description: "turning ideas into polished interfaces and powerful backend systems users can trust",
    url: "",
    siteName: "",
    images: [
      {
        url: "",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Kelvin Akaba - Full-stack developer",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
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
        className={`bg-black ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
