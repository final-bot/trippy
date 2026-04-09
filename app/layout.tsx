import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "mapbox-gl/dist/mapbox-gl.css";
import "./globals.css";
import Providers from "./providers";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trippy — Travel Blog & booking tool",
  description:
    "Discover amazing destinations with a community of trusted travelers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
