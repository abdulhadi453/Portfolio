import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import BentoNavbar from "@/components/BentoNavbar";

export const metadata: Metadata = {
  title: "Abdul Hadi - Full Stack Developer",
  description: "Modern portfolio showcasing full-stack development projects and skills",
  keywords: ["portfolio", "web developer", "full stack", "react", "next.js", "Abdul Hadi"],
  authors: [{ name: "Abdul Hadi" }],
  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Abdul Hadi - Full Stack Developer",
    description: "Modern portfolio showcasing full-stack development projects and skills",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Hadi - Full Stack Developer",
    description: "Modern portfolio showcasing full-stack development projects and skills",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        <CustomCursor />
        <BentoNavbar />
        {children}
      </body>
    </html>
  );
}
