import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.scss";

const helvetica = localFont({
  src: [
    {
      path: "../public/fonts/HelveticaNeueMedium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../public/fonts/HelveticaNeue-Thin.otf",
      weight: "300",
      style: "thin",
    },
    {
      path: "../public/fonts/HelveticaNeueBold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../public/fonts/HelveticaNeueItalic.ttf",
      weight: "300",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "Expense chart",
  description: "This app is about expense chart",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={helvetica.className}>{children}</body>
    </html>
  );
}
