
import Banner from "@/components/components/banner";
import { Cta } from "@/components/components/cta";
import { Logo } from "@/components/components/partnership";
import SectionImage from "@/components/components/sectionImage";
import { SectionTimeline } from "@/components/components/sectionTimeline";
import ServicesCarousel from "@/components/components/ServiceCarousel";

export default function Home() {
    return(
        <>
            <Banner headline="Empowering Your Business with Data & AI Solutions" subHeadline="We provide innovative solutions in Big Data, AI, and Digital Transformation to drive your business growth"/>
            <Logo/>
            <ServicesCarousel/>
            <Cta/>
        </>
    )
}
