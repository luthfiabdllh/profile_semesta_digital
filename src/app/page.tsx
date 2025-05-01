
import Banner from "@/components/components/banner";
import { Cta } from "@/components/components/cta";
import { Logo } from "@/components/components/partnership";
import SectionImage from "@/components/components/sectionImage";
import { SectionTimeline } from "@/components/components/sectionTimeline";

export default function Home() {
    return(
        <>
            <Banner headline="Empowering Your Business with Data & AI Solutions" subHeadline="We provide innovative solutions in Big Data, AI, and Digital Transformation to drive your business growth"/>
            <Logo/>
            <SectionImage background="Vision" title="Our Vision" subtitle="Become a key driver of the digital ecosystem by encouraging innovation and supporting research initiatives." srcImage="https://assets.aceternity.com/templates/startup-2.webp" altImage="Vision Image"/>
            <SectionImage imageRight={true} background="Mission" title="Our Vision" subtitle="As a Venture Capital firm, we focus on investing in innovative startups and initiatives to advance the digital ecosystem. We nurture talent, offer expert consulting in Big Data and AI, and help organizations leverage data-driven insights. Additionally, we act as a strategic partner in digital transformation, delivering human-centered solutions that benefit all stakeholders." srcImage="https://assets.aceternity.com/templates/startup-2.webp" altImage="Vision Image"/>
            <SectionTimeline/>
            <Cta/>
        </>
    )
}
