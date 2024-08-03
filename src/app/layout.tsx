import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/ThemeProvider";
import { StaticNavbar } from "@/components/ui/Navbar";
import { Toaster } from "@/components/ui/Sonner"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discord Bot Dashboard",
  description: "Preview of the actual Dashboard, contains no functionality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <StaticNavbar />
          <Toaster />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
