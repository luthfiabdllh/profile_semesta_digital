"use client"

import Particles from "../../components/ui/Particles/Particles";

export default function Home() {
    return(
        <>
            <div className="absolute inset-x-0 top-0 h-5/12 
                bg-gradient-to-b from-gray-100 via-blue-300 to-white 
                dark:from-gray-950 dark:via-indigo-900 dark:to-black 
                blur-3xl opacity-30 scale-100 z-[-1]">
            </div>
            <Particles
            particleColors={['#D0E8FF']}
            particleCount={400}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
            />
        </>
    )
}
