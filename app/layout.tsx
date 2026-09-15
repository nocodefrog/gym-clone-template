import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/data/site";

export const metadata: Metadata = {
 metadataBase: new URL("https://gym-clone-Template.app"),

  title: `${site.companyName} | ${site.tagline}`,
  description: site.description,

  openGraph: {
    title: `${site.companyName} | ${site.tagline}`,
    description: site.description,
    images: [site.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}