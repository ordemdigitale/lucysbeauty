import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
//import Navbar from "@/components/layout/Navbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lucy's Beauty | Produits de beauté premium",
  description: "Découvrez les meilleurs produits de beauté pour la femme moderne.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
        >
          <Navbar />
            <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
