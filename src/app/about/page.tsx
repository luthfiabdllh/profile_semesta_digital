import SectionImage from "@/components/components/sectionImage";
import { SectionTimeline } from "@/components/components/sectionTimeline";

export default function About() {
    return (
        <>
            <SectionImage background="Vision" title="Our Vision" subtitle="To become a leading data and artificial intelligence (AI) technology company, excelling in the implementation of products based on academic research, creating impactful social analytics solutions, enabling data-driven decision-making, contributing to the development of digital talent and future technologies, and evolving into a funding company that supports innovation and the growth of data-driven startups."/>
            <SectionImage background="Mission" title="Our Mission"  
            subtitle={
                <ol className="list-decimal pl-5 space-y-2">
                    <li>
                    Develop accurate, reliable, and innovative social analytics products powered by data and 
                    artificial intelligence (AI) to meet the needs of businesses, government, and society.
                    </li>
                    <li>
                    Transform academic research into practical, market-ready products that deliver real value 
                    and sustainable impact.
                    </li>
                    <li>
                    Support research and product development for data-driven startups through strategic funding 
                    and collaborative partnerships.
                    </li>
                    <li>
                    Bridge the gap between academia and industry by providing opportunities for students, 
                    researchers, and graduates to actively contribute to technology development.
                    </li>
                    <li>
                    Foster a culture of innovation, collaboration, and adaptability to stay ahead in a 
                    rapidly evolving technological landscape.
                    </li>
                </ol>
                }/>
            <SectionTimeline/>
        </>
    )
}