import Image from "next/image";
import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { services } from "@/lib/data"; 
import type { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const { id } = await params;
  const service = services.find((s) => s.id === id);
  
  if (!service) {
    return {
      title: "Layanan Tidak Ditemukan | Semesta Data Digital",
      description: "Maaf, layanan yang Anda cari tidak ditemukan di Semesta Data Digital",
    };
  }

  return {
    title: `${service.title} | Semesta Data Digital`,
    description: service.longDescription,
    keywords: [service.badge, ...service.title.split(" "), "semesta data digital", "layanan teknologi", "solusi digital"],
    alternates: {
      canonical: `https://semestadatadigital.com/services/${id}`,
    },
    openGraph: {
      title: service.title,
      description: service.longDescription,
      type: "website",
      url: `https://semestadatadigital.com/services/${id}`,
      images: [
        {
          url: service.heroImage || "/placeholder.svg",
          width: 1200,
          height: 630,
          alt: `${service.title} - Semesta Data Digital`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.longDescription,
      images: [service.heroImage || "/placeholder.svg"],
    },
  };
}

    
export default async function ServicePage({ params }: Props) {
  const { id } = await params;
  const service = services.find((s) => s.id === id);

  if (!service) {
    notFound(); 
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: service.title,
            description: service.longDescription,
            url: `https://semestadatadigital.com/services/${id}`,
            provider: {
              '@type': 'Organization',
              name: 'Semesta Data Digital',
              url: 'https://semestadatadigital.com',
              logo: 'https://semestadatadigital.com/logo.png',
            },
            serviceType: service.badge,
            image: service.heroImage || "/placeholder.svg",
          }),
        }}
      />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section
          className="relative py-20 md:py-28"
          style={{
            background: `linear-gradient(to bottom, var(--${service.color.light}), white)`,
          }}
        >
          <div className="container mx-auto px-4">
            <Link
              href="/#services"
              className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-8 transition-colors"
              aria-label="Kembali ke daftar semua layanan"
            >
              <ChevronLeft className="mr-1 h-4 w-4" /> Back to all services
            </Link>

            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <Badge
                  className="mb-4 px-3 py-1 text-sm"
                  style={{
                    backgroundColor: `var(--${service.color.accent}-100)`,
                    color: `var(--${service.color.primary}-700)`,
                  }}
                >
                  {service.badge}
                </Badge>
                <h1
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                  style={{ color: `var(--${service.color.primary}-800)` }}
                >
                  {service.title}
                </h1>
                <p className="text-slate-700 text-lg mb-8 leading-relaxed">{service.longDescription}</p>
              </div>
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={service.heroImage || "/placeholder.svg"}
                  alt={`Fitur ${service.title} - Semesta Data Digital`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority 
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 container mx-auto px-4">
          <h2
            className="text-2xl md:text-3xl font-bold mb-12 text-center"
            style={{ color: `var(--${service.color.primary}-800)` }}
            id="features-section"
          >
            Features of {service.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-8">
                {service.features.map((feature, index) => (
                  <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div
                          className="mt-1 p-2 rounded-full"
                          style={{ backgroundColor: `var(--${service.color.accent}-100)` }}
                        >
                          <feature.icon className="h-5 w-5" style={{ color: `var(--${service.color.primary}-700)` }} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                            <span
                              className="rounded-full w-6 h-6 flex items-center justify-center text-sm text-white"
                              style={{ backgroundColor: `var(--${service.color.primary}-700)` }}
                            >
                              {index + 1}
                            </span>
                            <span style={{ color: `var(--${service.color.primary}-700)` }}>{feature.title}</span>
                          </h3>
                          <p className="text-slate-600">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl order-1 md:order-2">
              <Image
                src={service.featuresImage || "/placeholder.svg"}
                alt={`Features ${service.title} - Semesta Data Digital`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24" style={{ backgroundColor: `var(--${service.color.light})` }}>
          <div className="container mx-auto px-4">
            <h2
              className="text-2xl md:text-3xl font-bold mb-12 text-center"
              style={{ color: `var(--${service.color.primary}-800)` }}
              id="benefits-section"
            >
              Benefits of {service.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={service.benefitsImage || "/placeholder.svg"}
                  alt={`Benefit ${service.title} - Semesta Data Digital`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover"
                />
              </div>
              <div className="space-y-8">
                {service.benefits.map((benefit, index) => (
                  <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div
                          className="mt-1 p-2 rounded-full"
                          style={{ backgroundColor: `var(--${service.color.accent}-100)` }}
                        >
                          <benefit.icon className="h-5 w-5" style={{ color: `var(--${service.color.primary}-700)` }} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                            <span
                              className="rounded-full w-6 h-6 flex items-center justify-center text-sm text-white"
                              style={{ backgroundColor: `var(--${service.color.primary}-700)` }}
                            >
                              {index + 1}
                            </span>
                            <span style={{ color: `var(--${service.color.primary}-700)` }}>{benefit.title}</span>
                          </h3>
                          <p className="text-slate-600">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}