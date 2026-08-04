import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abhishek Jampani | Full-Stack Developer",
  description:
    "Aspiring full-stack developer specializing in ReactJS, Spring Boot, and MySQL. Building scalable, user-friendly web applications. KL University CSE student with 9.02 CGPA.",
  keywords: [
    "Abhishek Jampani",
    "Full-Stack Developer",
    "ReactJS",
    "Spring Boot",
    "MySQL",
    "KL University",
    "Portfolio",
  ],
  authors: [{ name: "Abhishek Jampani" }],
  openGraph: {
    title: "Abhishek Jampani | Full-Stack Developer",
    description:
      "Portfolio of Abhishek Jampani — Full-Stack Developer building with React, Spring Boot & modern cloud technologies.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-mesh min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
