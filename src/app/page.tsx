
import Banner from "@/components/components/banner";
import SectionImage from "@/components/components/sectionImage";
import SectionPersuasive from "@/components/components/sectionPersuasive";
import { SectionTimeline } from "@/components/components/sectionTimeline";

export default function Home() {
    return(
        <>
            <Banner headline="Empowering Your Business with Data & AI Solutions" subHeadline="We provide innovative solutions in Big Data, AI, and Digital Transformation to drive your business growth"/>
            <SectionImage background="Vision" title="Our Vision" subtitle="Become a key driver of the digital ecosystem by encouraging innovation and supporting research initiatives." srcImage="https://assets.aceternity.com/templates/startup-2.webp" altImage="Vision Image"/>
            <SectionPersuasive sentenceBefore="Transform your business with" highlight="AI-driven insights & Big Data solutions" sentenceAfter=". Make smarter decisions, streamline operations, and drive growth with us!"/>
            <SectionTimeline/>
        </>
    )
}
