import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: {
    default: "Pulsefy",
    template: "%s | Pulsefy",
  },

  description:
    "Pulsefy is a modern offline music player with no ads, smooth performance, playlists, themes and premium music experience.",

  keywords: [
    "Pulsefy",
    "music player",
    "offline music player",
    "mp3 player",
    "android music app",
    "ad free music player",
    "music app",
    "offline songs",
    "Mahiman Labs",
  ],

  authors: [
    {
      name: "Mahiman Labs",
    },
  ],

  creator: "Mahiman Labs",

  metadataBase: new URL("https://pulsefy-app.vercel.app/"),

  openGraph: {
    title: "Pulsefy",
    description: "Offline music player with no ads and premium experience.",

    url: "https://pulsefy-app.vercel.app/",

    siteName: "Pulsefy",

    images: [
      {
        url: "/images/pulsefy_banner.png",
        width: 1200,
        height: 630,
        alt: "Pulsefy",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pulsefy",
    description: "Offline music player with no ads and premium experience.",
    images: ["/images/pulsefy_banner.png"],
  },

  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },

  alternates: {
    canonical: "https://pulsefy-app.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
