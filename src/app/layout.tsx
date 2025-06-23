import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/components/themeProvider";
import Footer from "@/components/components/footer";
import ResizableNavbar from "@/components/components/resizableNavbar";
import FloatingActionButton from "@/components/components/floatingActionButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Semesta Data Digital | Solusi Digital & AI Terkemuka Indonesia",
  description: "Semesta Data Digital menyediakan solusi Big Data, AI, dan Transformasi Digital untuk mendorong pertumbuhan bisnis di Indonesia",
  keywords: ["big data", "artificial intelligence", "digital transformation", "data analytics", "ICT solutions", "layanan digital", "AI Indonesia"],
  icons: {
    icon: [
      { url: '/site-favicon.ico', sizes: 'any' },
      { url: '/site-favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/site-favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
      },
      {
        rel: 'android-chrome',
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
      },
    ],
  },
  manifest: '/site.webmanifest',
  authors: [{ name: "Semesta Data Digital" }],
  creator: "Semesta Data Digital",
  publisher: "Semesta Data Digital",
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL("https://semesta.vc"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Semesta Data Digital | Solusi Digital & AI Terkemuka Indonesia",
    description: "Solusi Big Data, AI, dan Transformasi Digital untuk mendorong pertumbuhan bisnis di Indonesia",
    url: "https://semesta.vc",
    siteName: "Semesta Data Digital",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Logo Semesta Data Digital",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning={true}>
      <head>
        <meta name="geo.region" content="ID-YO" />
        <meta name="geo.placename" content="Yogyakarta" />
        <meta name="geo.position" content="-7.797068;110.370529" />
        <meta name="ICBM" content="-7.797068, 110.370529" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Semesta Data Digital',
              url: 'https://semesta.vc',
              logo: 'https://semesta.vc/logo.png',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '(+62) 831-2476-1723',
                contactType: 'customer service',
                availableLanguage: ['Indonesian', 'English'],
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Gang Mawar 215, Jl. Krapyak Wetan, Krapyak Kulon, Panggungharjo, Kec. Sewon, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55188',
                addressLocality: 'Yogyakarta',
                addressRegion: 'DIY',
                postalCode: '55167',
                addressCountry: 'ID',
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
         attribute="class"
         defaultTheme="system"
         enableSystem
         disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <ResizableNavbar/>
            <div className="flex-grow container mx-auto">
              {children}
            </div>
            <FloatingActionButton />
            <Footer/>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}