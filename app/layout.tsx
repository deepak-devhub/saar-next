import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalClickSpark from "@/components/ui/GlobalClickSpark";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SAAR Group | Engineering Excellence & Technical Training",
  description: "SAAR Group delivers innovative MEP engineering solutions and world-class technical training through SAAR Engineering Consultancy and SAAR MEP Academy.",
};

function GoldGradientDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(240, 229, 149, 1)" />
          <stop offset="50%" stopColor="rgba(222, 204, 128, 1)" />
          <stop offset="100%" stopColor="rgba(182, 150, 77, 1)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-black text-white`}
      >
        <GoldGradientDefs />
        <GlobalClickSpark
          sparkColor="#f4c430"
          sparkCount={12}
          sparkRadius={25}
          duration={600}
        />
        {children}
      </body>
    </html>
  );
}
