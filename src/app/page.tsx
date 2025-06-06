
import Banner from "@/components/components/banner";
import { Cta } from "@/components/components/cta";
import { Logo } from "@/components/components/partnership";
import ServicesCarousel from "@/components/components/ServiceCarousel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Beranda | Semesta Data Digital',
  description: 'Semesta Data Digital menyediakan solusi Big Data, AI, dan Transformasi Digital untuk mendorong pertumbuhan bisnis di Indonesia',
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
    return(
        <>
            <main>
                <section aria-labelledby="banner-heading">
                    <h1 id="banner-heading" className="sr-only">Semesta Data Digital</h1>
                    <Banner 
                        headline="Empowering Your Business with Data & AI Solutions" 
                        subHeadline="We provide innovative solutions in Big Data, AI, and Digital Transformation to drive your business growth"
                    />
                </section>
                
                <section aria-labelledby="partners-heading">
                    <h2 id="partners-heading" className="sr-only">Mitra Kami</h2>
                    <Logo/>
                </section>
                
                <section id="services" aria-labelledby="services-heading">
                    <ServicesCarousel/>
                </section>
                
                <section aria-labelledby="cta-heading">
                    <h2 id="cta-heading" className="sr-only">Hubungi Kami</h2>
                    <Cta/>
                </section>
            </main>
        </>
    )
}
