import Image from "next/image";
import React from "react";



export default function SectionImage({ imageRight, background, title, subtitle, srcImage, altImage }: { background : string, title : string, subtitle : React.ReactNode, srcImage : string, altImage : string, imageRight?: boolean }) {
    return (
        <div className="relative flex  justify-center px-4 items-center mt-8 h-[500px]">
            <h1 className="absolute hidden sm:block sm:text-[180px] md:text-[240px] lg:text-[280px] text-transparent bg-clip-text bg-gradient-to-b from-indigo-500/50 to-transparent to-75% font-bold text-center z-0">
                {background}
            </h1>
            <div className={`relative z-10 flex flex-col-reverse ${imageRight === true ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12`}>
                <div className="text-center md:text-left">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">{title}</h2>
                    <div className="text-neutral-600 dark:text-neutral-400 mt-6 max-w-md">{subtitle}</div>
                </div>
                <Image
                    src={srcImage || "/default-image-path.jpg"}
                    alt={altImage || "Default alt text"}
                    width={380}
                    height={380}
                    className="rounded-lg object-cover aspect-3/2 shadow-lg"
                />
            </div>
        </div>
    );
}