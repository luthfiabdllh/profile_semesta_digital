import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin} from "lucide-react";
import Link from "next/link";
import { JSX } from "react";

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
                        <iframe className="w-full h-55 mt-8.5 rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1950.5365445977136!2d110.38106739228559!3d-7.8154627188847625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5707bc824bf3%3A0x233e10b49f6db72a!2sKara%20Homestay!5e0!3m2!1sid!2sid!4v1743275308347!5m2!1sid!2sid"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}