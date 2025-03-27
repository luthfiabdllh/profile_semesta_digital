"use client"

import { motion } from "motion/react";
import { Highlight } from "@/components/ui/hero-highlight";

export default function SectionPersuasive({sentenceBefore, highlight, sentenceAfter}: {sentenceBefore: string, highlight: string, sentenceAfter: string}) {
    return (
        <motion.h1
        initial={{
            opacity: 0,
            y: 20,
        }}
        whileInView={{
            opacity: 1,
            y: [20, -5, 0],
        }}
        transition={{
            duration: 1,
            ease: [0.4, 0.0, 0.2, 1],
        }}
        viewport={{ once: true, amount: 1 }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-slate-700 dark:text-slate-300 max-w-4xl leading-relaxed lg:leading-snug mx-auto my-10 md:my-20"
        >
        {sentenceBefore} {" "}
        <Highlight className="text-black dark:text-white">
        {highlight}
        </Highlight>
        {sentenceAfter}
        </motion.h1>
    )
}