import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Third Sight Consulting Corporation | TSCC | Data Engineering & Cloud Analytics",
  description: "TSCC — Third Sight Consulting Corporation. Expert data engineering, cloud infrastructure, and analytics consulting based in New York, NY.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-black text-[#f5f5f7]">{children}</body>
    </html>
  );
}
