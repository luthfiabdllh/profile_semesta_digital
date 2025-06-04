import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Statistik Data | Semesta Data Digital",
  description: "Statistika data umum berita terkini sesuai topik pilihan. Meliputi grafik sentimen timeline dan pie chart serta redaksi berita lengkap.",
  keywords: ["statistik data", "analisis sentimen", "visualisasi data", "grafik sentimen", "media monitoring", "berita terkini"],
  alternates: {
    canonical: "https://semestadatadigital.com/statistic",
  },
  openGraph: {
    title: "Statistik Data | Semesta Data Digital",
    description: "Visualisasi data sentimen masyarakat dan kepolisian terkait berita terkini",
    url: "https://semestadatadigital.com/statistic",
    siteName: "Semesta Data Digital",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/statistic-preview.jpg", // Ganti dengan gambar preview yang sesuai
        width: 1200,
        height: 630,
        alt: "Dashboard Statistik Data Semesta Data Digital",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function StatisticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Dataset',
            name: 'Statistik Data Sentimen Berita',
            description: 'Statistika data umum berita terkini sesuai topik pilihan. Meliputi grafik sentimen timeline dan pie chart.',
            keywords: 'analisis sentimen, media monitoring, visualisasi data, grafik data',
            creator: {
              '@type': 'Organization',
              name: 'Semesta Data Digital',
              url: 'https://semestadatadigital.com'
            },
            dateModified: new Date().toISOString(),
            license: 'https://semestadatadigital.com/terms',
            variableMeasured: [
              'Sentimen Masyarakat', 
              'Sentimen Kepolisian'
            ]
          }),
        }}
      />
      {children}
    </>
  );
}