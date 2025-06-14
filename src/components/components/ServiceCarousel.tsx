"use client"

import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { services } from "@/lib/data"
import AutoScroll from "embla-carousel-auto-scroll";
import { useState } from "react"
import { motion } from "framer-motion"

export default function ServiceCarousel() {
  const router = useRouter()

  const handleCardClick = (id: string) => {
    router.push(`/services/${id}`)
  }

  const [autoScrollOptions] = useState({
    playOnInit: true,
    speed: 0.5,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  return (
    <div id="services" className="w-full py-10 px-4 md:px-10">
      <div className="container mb-12 px-4 sm:px-6 flex flex-col text-left">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-pretty mb-3 sm:mb-4"
        >
          Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-pretty text-neutral-600 dark:text-neutral-400 max-w-3xl"
        >
          Explore our wide range of services designed to meet your needs.
        </motion.p>
      </div>
      <div className="relative carousel-container">
        {/* Blur overlays */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10"></div>

        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          plugins={[AutoScroll(autoScrollOptions)]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {services.map((service, idx) => (
              <CarouselItem key={service.id} className="pl-4 sm:basis-4/5 md:basis-3/4 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  {/* <Card
                    className={cn(
                      "overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer h-full",
                    )}
                    onClick={() => handleCardClick(service.id)}
                  >
                    <CardContent className="p-0 flex flex-col h-full">
                      <div className="relative h-40 w-full flex-shrink-0">
                        <div
                          className="absolute inset-0 z-10 opacity-70"
                          style={{
                            background: `linear-gradient(to bottom right, var(--${service.color.primary}-600), var(--${service.color.secondary}-500))`,
                          }}
                        />
                        <Image
                          src={service.heroImage || "/placeholder.svg"}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-3 flex flex-col flex-grow">
                        <Badge
                          className="mb-2 self-start"
                          style={{
                            backgroundColor: `var(--${service.color.accent}-100)`,
                            color: `var(--${service.color.primary}-700)`,
                          }}
                        >
                          {service.badge}
                        </Badge>
                        <h3
                          className="text-xl font-bold mb-2 line-clamp-2"
                          style={{ color: `var(--${service.color.primary}-700)` }}
                        >
                          {service.title}
                        </h3>
                        <p className="text-slate-600 line-clamp-3 flex-grow">{service.description}</p>
                      </div>
                    </CardContent>
                  </Card> */}
                  <Card
                    className={cn(
                      "overflow-hidden border-none shadow-lg hover:shadow-xl transition-all py-0 duration-300 cursor-pointer h-87 relative ",
                    )}
                    onClick={() => handleCardClick(service.id)}
                  >
                    <CardContent className="p-0 flex flex-col h-full relative">
                      {/* Full card background image */}
                      <div className="absolute inset-0 w-full h-full">
                        <Image
                          src={service.heroImage || "/placeholder.svg"}
                          alt={service.title}
                          fill
                          className="object-cover"
                          priority
                        />
                        {/* Gradient overlay filter */}
                        <div 
                          className="absolute inset-0 z-10"
                          style={{
                            background: `linear-gradient(to bottom, 
                              rgba(0, 0, 0, 0.7), 
                              rgba(0, 0, 0, 0.4)), 
                              linear-gradient(to bottom right, 
                              var(--${service.color.primary}-600), 
                              var(--${service.color.secondary}-500))`,
                            opacity: 0.85,
                          }}
                        />
                      </div>
                      
                      {/* Content positioned at the bottom over the image */}
                      <div className="p-5 flex flex-col justify-end relative z-20 h-full">
                        <div className="bg-black/40 backdrop-blur-sm -mx-5 -mb-5 p-5 rounded-b-lg">
                          <Badge
                            className="mb-3 self-start dark:text-white bg-transparent" 
                          >
                            {service.badge}
                          </Badge>
                          <h3
                            className="text-xl font-bold mb-3 text-white"
                          >
                            {service.title}
                          </h3>
                          <p className="text-white/90">{service.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-[5%] z-20 md:size-12" />
          <CarouselNext className="right-[5%] z-20 md:size-12" />
        </Carousel>
      </div>
    </div>
  )
}