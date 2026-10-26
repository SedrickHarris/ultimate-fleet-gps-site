import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { RevealObserver } from "@/components/motion/RevealObserver";
import { bodyFont, headingFont } from "@/lib/fonts";
import { SITE_URL } from "@/lib/metadata/base";
import "@/styles/globals.css";

export const metadata: Metadata = {
  // Resolves any relative metadata URL against the live domain.
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ultimate Fleet GPS",
    template: "%s | Ultimate Fleet GPS",
  },
  /*
    Icons are rasterized from ultimate-fleet-gps-favicon.svg in the brand kit
    (white pin on a solid brand-red tile). favicon.ico is the kit's multi-size
    export.
  */
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
      { url: "/icons/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icons/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
};

/**
 * Root layout.
 *
 * The skip link is the first focusable element on every page, ahead of the
 * header, so keyboard users can bypass navigation. It targets the main
 * landmark this layout renders, so every route has the target.
 */
export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${headingFont.variable}`}>
      <body className="flex min-h-screen flex-col pb-14 lg:pb-0">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-[var(--color-accent-blue-strong)] focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>

        <Header />

        <main id="main" tabIndex={-1} className="flex-1">
          {children}
        </main>

        <Footer />

        <MobileNavigation />

        <RevealObserver />
      </body>
    </html>
  );
}
