import Link from "next/link";
import { JSX } from "react";

interface Item {
    icon?: JSX.Element;
    text: string;
    href: string;
}


export default function FooterList({title, items}: { title : string,items: Item[]}) {
    return (
        <div className="">
            <h2 className="text-2xl font-bold mb-11.5">{title}</h2>
            <ul className="space-y-5">
                {items.map((item, index) => (
                    <li key={index} className="flex space-x-2.5 items-center">
                        {item.icon && item.icon}
                        <Link href={item.href}>{item.text}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}