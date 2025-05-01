"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

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
            className: "h-30 w-full",
        },
        {
            id: "logo-2",
            description: "Universitas Padjadjaran",
            image: "/images/partnerLogo/unpad.webp",
            className: "h-20 w-auto",
        },
        {
            id: "logo-3",
            description: "Ikopin",
            image: "/images/partnerLogo/ikopin.webp",
            className: "h-20 w-auto",
        },
        {
            id: "logo-4",
            description: "Humas Polri",
            image: "/images/partnerLogo/humaspolri.webp",
            className: "h-20 w-auto",
        },
        {
            id: "logo-5",
            description: "BNPB",
            image: "/images/partnerLogo/bnpb.webp",
            className: "h-20 w-auto",
        },
        {
            id: "logo-6",
            description: "Badan Pangan Nasional",
            image: "/images/partnerLogo/bpn.webp",
            className: "h-20 w-auto",
        },
        {
            id: "logo-7",
            description: "Indosat",
            image: "/images/partnerLogo/indosat.webp",
            className: "h-20 w-auto",
        },
        {
            id: "logo-8",
            description: "BIT",
            image: "/images/partnerLogo/bit.webp",
            className: "h-20 w-auto",
        },
        {
            id: "logo-9",
            description: "Gamatechno",
            image: "/images/partnerLogo/gamatechno.webp",
            className: "h-20 w-auto",
        },
        {
            id: "logo-10",
            description: "Kemenkop",
            image: "/images/partnerLogo/kemenkop.webp",
            className: "h-20 w-auto",
        },
        {
            id: "logo-11",
            description: "Datains",
            image: "/images/partnerLogo/datains.webp",
            className: "h-20 w-auto",
        },
        {
            id: "logo-12",
            description: "KPBS",
            image: "/images/partnerLogo/kpbs.webp",
            className: "h-20 w-auto pr-10",
        },
    ],
}: LogoProps) => {
    return (
        <section className="py-32">
            <div className="container flex flex-col items-center text-center">
                <h1 className=" my-3 text-2xl md:text-4xl lg:text-5xl font-bold text-pretty">
                    {heading}
                </h1>
                <h3 className="my-3 text-xl md:text-2xl lg:text-3xl font-semibold text-pretty text-neutral-600 dark:text-neutral-400">
                    {subHeading}
                </h3>
            </div>
            <div className="pt-10 md:pt-16 lg:pt-20">
                <div className="relative mx-auto flex items-center justify-center lg:max-w-7xl">
                    <Carousel
                        opts={{ loop: true }}
                        plugins={[AutoScroll({ playOnInit: true })]}
                    >
                        <CarouselContent className="ml-0">
                            {logos.map((logo) => (
                                <CarouselItem
                                    key={logo.id}
                                    className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                                >
                                    <div className="mx-10 flex shrink-0 items-center justify-center">
                                        <div>
                                            <Image
                                                width={100}
                                                height={100}
                                                src={logo.image}
                                                alt={logo.description}
                                                className={logo.className}
                                            />
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                    <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent"></div>
                    <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent"></div>
                </div>
            </div>
        </section>
    );
};

export { Logo };
