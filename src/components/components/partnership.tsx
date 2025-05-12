"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { motion } from "framer-motion";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface LogoProps {
  heading?: string;
  subHeading?: string;
  logos?: Logo[];
  className?: string;
}

const Logo = ({
  heading = "Strategic Partnerships",
  subHeading = "We are proud to partner with leading companies in the industry",
  logos = [
    {
      id: "logo-1",
      description: "Universitas Gadjah Mada",
      image: "/images/partnerLogo/ugm.webp",
      className: "h-auto max-h-16 md:max-h-20 lg:max-h-24 w-auto",
    },
    {
      id: "logo-2",
      description: "Universitas Padjadjaran",
      image: "/images/partnerLogo/unpad.webp",
      className: "h-auto max-h-16 md:max-h-20 lg:max-h-24 w-auto",
    },
    {
      id: "logo-3",
      description: "Ikopin",
      image: "/images/partnerLogo/ikopin.webp",
      className: "h-auto max-h-16 md:max-h-20 lg:max-h-24 w-auto",
    },
    {
      id: "logo-4",
      description: "Humas Polri",
      image: "/images/partnerLogo/humaspolri.webp",
      className: "h-auto max-h-16 md:max-h-20 lg:max-h-24 w-auto",
    },
    {
      id: "logo-5",
      description: "BNPB",
      image: "/images/partnerLogo/bnpb.webp",
      className: "h-auto max-h-16 md:max-h-20 lg:max-h-24 w-auto",
    },
    {
      id: "logo-6",
      description: "Badan Pangan Nasional",
      image: "/images/partnerLogo/bpn.webp",
      className: "h-auto max-h-16 md:max-h-20 lg:max-h-24 w-auto",
    },
    {
      id: "logo-7",
      description: "Indosat",
      image: "/images/partnerLogo/indosat.webp",
      className: "h-auto max-h-16 md:max-h-20 lg:max-h-24 w-auto",
    },
    {
      id: "logo-8",
      description: "BIT",
      image: "/images/partnerLogo/bit.webp",
      className: "h-auto max-h-16 md:max-h-20 lg:max-h-24 w-auto",
    },
    {
      id: "logo-9",
      description: "Gamatechno",
      image: "/images/partnerLogo/gamatechno.webp",
      className: "h-auto max-h-16 md:max-h-20 lg:max-h-24 w-auto",
    },
    {
      id: "logo-10",
      description: "Kemenkop",
      image: "/images/partnerLogo/kemenkop.webp",
      className: "h-auto max-h-16 md:max-h-20 lg:max-h-24 w-auto",
    },
    {
      id: "logo-11",
      description: "Datains",
      image: "/images/partnerLogo/datains.webp",
      className: "h-auto max-h-16 md:max-h-20 lg:max-h-24 w-auto",
    },
    {
      id: "logo-12",
      description: "KPBS",
      image: "/images/partnerLogo/kpbs.webp",
      className: "h-auto max-h-16 md:max-h-20 lg:max-h-24 w-auto",
    },
  ],
  className,
}: LogoProps) => {
  const [autoScrollOptions, setAutoScrollOptions] = useState({
    playOnInit: true,
    speed: 0.5,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  // Adjust auto-scroll speed based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let speed = 0.8; // Default speed

      if (width < 640) {
        // Mobile
        speed = 0.6;
      } else if (width < 1024) {
        // Tablet
        speed = 0.7;
      }

      setAutoScrollOptions(prev => ({
        ...prev,
        speed,
      }));
    };

    // Set initial speed
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className={`py-12 sm:py-16 md:py-24 lg:py-32 ${className}`}>
      <div className="container px-4 sm:px-6 flex flex-col items-center text-center">
        <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-pretty mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
            {heading}
        </motion.h2>
        <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-pretty text-neutral-600 dark:text-neutral-400 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
            {subHeading}
        </motion.p>
      </div>
      
      <div className="pt-8 sm:pt-12 md:pt-16 lg:pt-20">
        <div className="relative mx-auto flex items-center justify-center max-w-full px-4 sm:px-6 lg:px-8">
          <Carousel
            opts={{ 
              loop: true,
              align: "start",
            }}
            plugins={[AutoScroll(autoScrollOptions)]}
            className="w-full"
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/2 xs:basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 xl:basis-1/8 pl-0 pr-4 sm:pr-6 md:pr-8"
                >
                  <div className="flex h-16 sm:h-20 md:h-24 w-full items-center justify-center px-2 sm:px-3 md:px-4">
                    <div className="relative h-full w-full flex items-center justify-center">
                      <Image
                        width={100}
                        height={100}
                        src={logo.image || "/placeholder.svg"}
                        alt={logo.description}
                        className={`object-contain ${logo.className}`}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          {/* Gradient overlays - responsive widths */}
          <div className="absolute inset-y-0 left-0 w-8 sm:w-12 md:w-16 lg:w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-8 sm:w-12 md:w-16 lg:w-20 bg-gradient-to-l from-background to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export { Logo };
