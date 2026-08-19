import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KanyaCSI | Skills Development and Learnerships",
  description:
    "KanyaCSI delivers QCTO and SETA accredited learnerships and skills programmes across agriculture, construction, and digital literacy in South Africa.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-white text-[#171717] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
