
import Banner from "@/components/components/banner";
import SectionPersuasive from "@/components/components/sectionPersuasive";
import { SectionTimeline } from "@/components/components/sectionTimeline";

export default function Home() {
    return(
        <>
            <Banner headline="Empowering Your Business with Data & AI Solutions" subHeadline="We provide innovative solutions in Big Data, AI, and Digital Transformation to drive your business growth"/>
            <SectionPersuasive sentenceBefore="Transform your business with" highlight="AI-driven insights & Big Data solutions" sentenceAfter=". Make smarter decisions, streamline operations, and drive growth with us!"/>
            <SectionTimeline/>
        </>
    )
}
