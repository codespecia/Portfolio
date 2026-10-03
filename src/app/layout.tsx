import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, Baumans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const baumans = Baumans({
  weight: "400",
  variable: "--font-baumans",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://codespecia.in"),
  title: "codespecia | Rakibur Rahman - Full Stack Developer",
  description:
    "Portfolio of Rakibur Rahman, a professional Full Stack Developer specializing in React.js, Next.js, Node.js, and high-performance web applications.",
  keywords: [
    "Rakibur Rahman",
    "codespecia",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React.js Developer",
    "Next.js Developer",
    "Software Engineer",
    "Web Developer",
    "UI/UX",
  ],
  authors: [{ name: "Rakibur Rahman", url: "https://codespecia.in" }],
  creator: "Rakibur Rahman",
  publisher: "Rakibur Rahman",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "codespecia | Rakibur Rahman - Full Stack Developer",
    description:
      "Explore the portfolio of Rakibur Rahman. Specializing in high-performance web applications with clean architecture and seamless UI/UX.",
    url: "https://codespecia.in",
    siteName: "codespecia",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/favicon.svg",
        width: 1200,
        height: 630,
        alt: "codespecia | Rakibur Rahman - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "codespecia | Rakibur Rahman - Full Stack Developer",
    description:
      "Explore the portfolio of Rakibur Rahman, a professional Full Stack Developer creating responsive, reliable, and user-focused web solutions.",
    images: ["/favicon.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${baumans.variable} h-full antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
