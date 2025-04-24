"use client"

import Particles from "../ui/Particles";
import { motion } from "motion/react";

export default function Banner({ headline, subHeadline }: { headline: string, subHeadline: string }) {
    return (
        <section className="relative w-full h-screen">
            <div className="w-full absolute -top-1 h-5/12 
                bg-gradient-to-b from-gray-100 via-blue-300 to-white 
                dark:from-gray-950 dark:via-indigo-900 dark:to-black 
                blur-3xl opacity-30 scale-100 z-[-1]">
            </div>
            <Particles
            particleColors={['#D0E8FF', "#A5D8FF", "F4E3C1 "]}
            particleCount={400}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
            className="absolute inset-x-0 top-0"/>
            <div className="h-fit w-3/4 flex flex-col items-center justify-center overflow-hidden rounded-md absolute inset-0 m-auto translate-y-8">
                  <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
                    {headline
                        .split(" ")
                        .map((word, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                            transition={{
                            duration: 0.3,
                            delay: index * 0.1,
                            ease: "easeInOut",
                            }}
                            className="mr-2 inline-block leading-snug"
                        >
                            {word}
                        </motion.span>
                        ))}
                    </h1>
                    <motion.p
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.3,
                        delay: 0.8,
                    }}
                    className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
                    >
                    {subHeadline}
                </motion.p>
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.3,
                        delay: 1,
                    }}
                    className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
                    >
                    <button className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                        Learn More
                    </button>
                    <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
                        Contact Us
                    </button>
                    </motion.div>
                    <motion.div
                    initial={{
                        opacity: 0,
                        y: 10,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.3,
                        delay: 1.2,
                    }}
                    >
                </motion.div>
            </div>
        </section>
    )
}