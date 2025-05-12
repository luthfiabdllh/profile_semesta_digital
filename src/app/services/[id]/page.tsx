import Image from "next/image"
import { notFound } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import { services } from "@/lib/data"
import { use } from "react"

export default function ServicePage({params}: {params: Promise<{ id: string }>}) {
  const { id } = use(params);
  const service = services.find((s) => s.id === id)

  if (!service) {
    notFound()
  }

  return (
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
            href="/"
            className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-8 transition-colors"
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
                alt={service.title}
                fill
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
              alt={`${service.title} Features`}
              fill
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
          >
            Benefits of {service.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src={service.benefitsImage || "/placeholder.svg"}
                alt={`${service.title} Benefits`}
                fill
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
  )
}
