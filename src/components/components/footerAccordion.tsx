"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type React from "react"

import Link from "next/link"
import { motion } from "framer-motion"

interface FooterAccordionProps {
  accordionData: Array<{
    value: string
    trigger: string
    contents: Array<{
      icon?: React.ReactNode
      text: string
      href: string
    }>
  }>
}

export default function FooterAccordion({ accordionData }: FooterAccordionProps) {
  const accordionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 + i * 0.05,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    }),
    hover: {
      scale: 1.05,
      x: 5,
      color: "hsl(var(--primary))",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  }

  return (
    <motion.div className="md:hidden" variants={accordionVariants} initial="hidden" animate="visible">
      <Accordion type="single" collapsible className="w-full">
        {accordionData.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger className="text-lg font-semibold">{item.trigger}</AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-3 pl-2">
                {item.contents.map((content, index) => (
                  <motion.li
                    key={index}
                    custom={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    className="flex items-center space-x-3.5"
                  >
                    {content.icon && <div>{content.icon}</div>}
                    <Link href={content.href} className="hover:text-primary transition-colors">
                      {content.text}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  )
}
