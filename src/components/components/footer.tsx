"use client"
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import FooterList from "./footerList";
import FooterAccordion from "./footerAccordion";
import dynamic from "next/dynamic";
const MapLocation = dynamic(() => import("../ui/mapLocation"), { ssr: false });

export default function Footer(){
    const contactUs =[
        { icon: <Mail size={18} />, text: "semestadigital@mail.com", href: "/about" },
        { icon: <Phone size={18} />, text: "(+62) 831 2476 1723", href: "/about" },
        { text: "About Us", href: "/about" }, // icon kosong
    ];

    const services =[
        { text: "Venture Capital & Startup Investment", href: "/about" },
        { text: "Big Data & AI Solutions", href: "/about" },
        { text: "Digital Transformation Consulting", href: "/about" },
        { text: "Talent Management & Tech Training ", href: "/about" }, 
        { text: "Enterprise Solutions & IT Consulting", href: "/about" }, 
    ];

    const accordionData = [
        {
            value: "item-1",
            trigger: "Contact Us",
            contents: contactUs
        },
        {
            value: "item-2",
            trigger: "Services",
            contents: services
        },
    ];
    
    
    return (
        <nav className="w-full bg-(--background) p-4">
            <div className="max-w-screen-xl flex flex-col mx-auto space-y-10">
            <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
                <Image  width={42} height={42} src="/logo.png" alt="Logo" />
                <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">Semesta Data Digital</span>
            </Link>
            <div className="hidden md:grid grid-cols-2 md:grid-cols-3 mt-4">
                <FooterList title="Contact Us" items={contactUs} />
                <FooterList title="Services" items={services} />
                <div>
                    <h2 className="text-2xl font-bold mb-11.5">Find Us</h2>
                    <div className="flex mb-5 space-x-3.5">
                        <div>
                            <MapPin size={24} />
                        </div>
                        <div className="text-wrap">
                            <p>Jl Persatuan UH III/549, Jl. Celeban, Tahunan, Kec. Umbulharjo, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55167</p>
                            <MapLocation/>
                        </div>
                    </div>
                </div>
            </div>
            <FooterAccordion accordionData={accordionData}/>
            <div>
                <div className="flex justify-center items-center rtl:space-x-reverse mb-3.5">
                    <hr className="h-[2px] bg-gradient-to-l from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] w-1/2"/>
                    <hr className="h-[2px] bg-gradient-to-r from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] w-1/2"/>
                </div>
                <p className="text-xs text-center text-gray-400">Copyright © 2025 Semesta Data Digital. All rights reserved</p>
            </div>
            </div>
        </nav>
    )
}