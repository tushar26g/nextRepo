import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { AdPanel } from "@/components/layout/AdPanel";
import { Footer } from "@/components/layout/Footer";
import ThemeProvider from "../context/ThemeContext"; // ✅ Theme for Dark Mode
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ SEO Metadata (Corrected)
export const metadata: Metadata = {
  title: "CA Ninjas - The Best CA Foundation, Inter & Final Resource Hub",
  description:
    "CA Ninjas is the ultimate platform for CA students preparing for CA Foundation, CA Inter, and CA Final. Access Past Year Questions (PYQ), RTPs, MTPs, and MCQs with solutions.",
  keywords:
    "CA Foundation, CA Inter, CA Final, ICAI, Past Year Questions, RTP, MTP, MCQs, CA Study Materials, Chartered Accountancy",
  authors: [{ name: "CA Ninjas", url: "https://caninjas.com/" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://caninjas.com/",
    title: "CA Ninjas - CA Foundation, Inter & Final",
    description:
      "Free access to PYQs, RTPs, MTPs, MCQs & solutions for CA students.",
    siteName: "CA Ninjas",
    images: [
      {
        url: "https://caninjas.com/meta-image.jpg", // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: "CA Ninjas - The Ultimate CA Resource Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ca_ninjas",
    title: "CA Ninjas - Free CA Study Resources",
    description:
      "Access CA Foundation, Inter & Final study materials for free. PYQs, RTPs, MTPs, and more!",
    images: ["https://caninjas.com/meta-image.jpg"], // Replace with actual image
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning> {/* ✅ Ensures dark mode is applied properly */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased transition-all`}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Navbar />
            <div className="flex-1 flex pt-16">
              <main className="w-full lg:w-3/4 xl:w-2/3 mx-auto p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg">
                {children}
              </main>
              <div className="hidden lg:block">
                <AdPanel />
              </div>
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
