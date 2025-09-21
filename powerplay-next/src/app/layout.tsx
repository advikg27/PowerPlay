import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./styles.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "PowerPlay - Empowering Tomorrow's Champions",
  description: "PowerPlay - Empowering Tomorrow's Champions through sports tournaments and community building. Join us for exciting cricket and pickleball tournaments.",
  keywords: "sports, tournaments, cricket, pickleball, community, athletics, PowerPlay",
  authors: [{ name: "PowerPlay Team" }],
  openGraph: {
    title: "PowerPlay - Empowering Tomorrow's Champions",
    description: "Join us for exciting sports tournaments that bring communities together.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="preload" as="image" href="/images/home_background.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
