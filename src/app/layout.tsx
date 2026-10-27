import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Kaushik Kalyan Bojja — UI/UX Designer & Flutter Developer",
  description:
    "Portfolio of Kaushik Kalyan Bojja. Sculpting high-precision design systems, ergonomic interaction design, and fluid, production-grade Flutter applications.",
  keywords: [
    "Kaushik Kalyan Bojja",
    "UI/UX Designer",
    "Flutter Developer",
    "Mobile Engineer",
    "Design Systems",
    "Frontend Architect",
    "Product Designer",
    "Cross-Platform",
  ],
  authors: [{ name: "Kaushik Kalyan Bojja" }],
  creator: "Kaushik Kalyan Bojja",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kaushikkalyan.dev",
    title: "Kaushik Kalyan Bojja — UI/UX Designer & Flutter Developer",
    description:
      "Sculpting high-precision design systems and translating them into fluid, production-grade Flutter applications.",
    siteName: "Kaushik Kalyan Bojja Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaushik Kalyan Bojja — UI/UX Designer & Flutter Developer",
    description:
      "Sculpting high-precision design systems and translating them into fluid, production-grade Flutter applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth antialiased bg-black`}
    >
      <body className="min-h-screen bg-black text-[#E2E8F0] font-sans selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
