"use client"
import Link from "next/link"
import type React from "react"
import { motion } from "framer-motion"

interface FooterListProps {
  title: string
  items: Array<{
    icon?: React.ReactNode
    text: string
    href: string
  }>
}

export default function FooterList({ title, items }: FooterListProps) {  
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    }),
    hover: {
      scale: 1.05,
      x: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  }

  return (
    <div>
      <motion.h2
        className="text-2xl font-bold mb-11.5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 100, damping: 10 }}
      >
        {title}
      </motion.h2>
      <ul className="space-y-5">
        {items.map((item, index) => (
          <motion.li
            key={index}
            custom={index}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="flex items-center space-x-3.5"
          >
            {item.icon && <div>{item.icon}</div>}
            <Link 
              href={item.href} 
              className="text-foreground dark:text-foreground hover:text-primary dark:hover:text-primary transition-colors"
            >
              {item.text}
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}