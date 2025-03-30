import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin} from "lucide-react";
import Link from "next/link";
import { JSX } from "react";

import dynamic from "next/dynamic";
const MapLocation = dynamic(() => import("../ui/mapLocation"), { ssr: false });


interface Item {
    icon?: JSX.Element;
    text: string;
    href: string;
}

interface AccordionData {
    value: string;
    trigger: string;
    contents: Item[];
}

export default function FooterAccordion({accordionData}: {accordionData: AccordionData[]}) {
    return (
        <div className="md:hidden">
            <Accordion type="single" collapsible className="w-full">
                {accordionData.map((item) => (
                    <AccordionItem key={item.value} value={item.value}>
                        <AccordionTrigger >{item.trigger}</AccordionTrigger>
                        {item.contents.map((content, index) => (
                            <AccordionContent key={index} className="flex my-2.5 space-x-2.5 items-center">
                                {content.icon && content.icon}
                                <Link href={content.href}>{content.text}</Link>
                            </AccordionContent>
                        ))}
                    </AccordionItem>
                ))}
            </Accordion>
            <div>
                <div className="flex flex-col items-center mt-5">
                    <MapPin size={24} />
                    <h2 className="text-2xl font-bold mt-2">Find Us</h2>
                </div>
                <div className="flex mb-5 space-x-3.5 mt-5">
                    <div className="text-wrap text-center">
                        <p>Jl Persatuan UH III/549, Jl. Celeban, Tahunan, Kec. Umbulharjo, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55167</p>
                        <MapLocation/>
                    </div>
                </div>
            </div>
        </div>
    );
}