"use client"
import { Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import FooterList from "./footerList"
import FooterAccordion from "./footerAccordion"
import dynamic from "next/dynamic"
const MapLocation = dynamic(() => import("../ui/mapLocation"), { ssr: false })

export default function Footer() {
  const contactUs = [
    { icon: <Mail size={18} />, text: "semestadatadigital@gmail.com", href: "mailto:semestadatadigital@gmail.com" },
    { icon: <Phone size={18} />, text: "(+62) 85293037949", href: "https://wa.me/6285293037949" },
  ]

const services = [
  { text: "Venture Capital & Startup Mentorship", href: "/services/venture-capital" },
  { text: "Digital Transformation Consulting", href: "/services/digital-transformation" },
  { text: "Talent Management & Development", href: "/services/talent-management" },
  { text: "Custom ICT Solutions", href: "/services/custom-ict-solutions" },
]

  const accordionData = [
    {
      value: "item-1",
      trigger: "Contact Us",
      contents: contactUs,
    },
    {
      value: "item-2",
      trigger: "Services",
      contents: services,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.1,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  }

  const lineVariants = {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 0.8,
      },
    },
  }

  return (
    <motion.nav
      id="contact"
      className="w-full bg-background p-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="max-w-screen-xl flex flex-col mx-auto space-y-10">
        <motion.div variants={itemVariants} whileHover="hover">
          <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse w-fit">
            <motion.div variants={logoVariants} className="relative w-[42px] h-[42px]">
              <Image fill priority src="/logo.png" alt="Logo" className="object-contain" />
            </motion.div>
            <motion.span
              className="self-center text-lg font-semibold whitespace-nowrap dark:text-white"
              variants={itemVariants}
            >
              Semesta Data Digital
            </motion.span>
          </Link>
        </motion.div>

        <motion.div className="hidden md:grid grid-cols-2 md:grid-cols-3 mt-4" variants={itemVariants}>
          <motion.div variants={itemVariants}>
            <FooterList title="Contact Us" items={contactUs} />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FooterList title="Services" items={services} />
          </motion.div>
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-11.5">Find Us</h2>
            <div className="flex mb-5 space-x-3.5">
              <motion.div
                initial={{ scale: 1 }}
                animate={{
                  scale: [1, 1.2, 1],
                  transition: {
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    ease: "easeInOut",
                    repeatDelay: 5,
                  },
                }}
              >
                <MapPin size={24} />
              </motion.div>
              <div className="text-wrap">
                <p>
                  Jl Persatuan UH III/549, Jl. Celeban, Tahunan, Kec. Umbulharjo, Kota Yogyakarta, Daerah Istimewa
                  Yogyakarta 55167
                </p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <MapLocation />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <FooterAccordion accordionData={accordionData} />
          <motion.div className="md:hidden mt-5" variants={itemVariants}>
            <motion.div
                initial={{ scale: 1 }}
                animate={{
                  scale: [1, 1.2, 1],
                  transition: {
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    ease: "easeInOut",
                    repeatDelay: 5,
                  },
                }}
                className="flex justify-center items-center mb-4"
              >
                <MapPin size={24} />
                <h2 className="text-2xl font-bold ml-2.5">Find Us</h2>
              </motion.div>
            <div className="flex mb-5 space-x-3.5">
              <div className="text-wrap text-center">
                <p>
                  Jl Persatuan UH III/549, Jl. Celeban, Tahunan, Kec. Umbulharjo, Kota Yogyakarta, Daerah Istimewa
                  Yogyakarta 55167
                </p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <MapLocation />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>



        <motion.div variants={itemVariants}>
          <div className="flex justify-center items-center rtl:space-x-reverse mb-3.5">
            <motion.hr
              className="h-[2px] bg-gradient-to-l from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%]"
              variants={lineVariants}
              style={{ width: "50%" }}
            />
            <motion.hr
              className="h-[2px] bg-gradient-to-r from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%]"
              variants={lineVariants}
              style={{ width: "50%" }}
            />
          </div>
          <motion.p
            className="text-xs text-center text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            Copyright © 2025 Semesta Data Digital. All rights reserved
          </motion.p>
        </motion.div>
      </div>
    </motion.nav>
  )
}
