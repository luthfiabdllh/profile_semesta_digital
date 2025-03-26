"use client"

import Link from "next/link";
import ModeToggle from "../modeToggle/modeToggle";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function NavBar(){
    const [isOpen, setIsOpen] = useState(false);
    const navItems = [
        {name: "Home", href: "#home"},
        {name: "About", href: "#about"},
        {name: "Services", href: "#services"},
        {name: "Contact", href: "#contact"}
    ];

    return(
        <nav className="bg-transparent sticky top-0 z-50">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image  width={64} height={64} src="/logo.png" alt="Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white hidden sm:block">Semesta Data Digital</span>
                </Link>
                <Button variant="outline" onClick={() => setIsOpen(!isOpen)} size="lg" className="inline-flex items-center p-2 w-10 h-10 justify-center md:hidden">
                    <span className="sr-only">Open main menu</span>
                    <Menu width={32} height={32} />
                </Button>
                
                <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700 items-center">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.href}
                                    className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                        <li>
                            <ModeToggle />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}