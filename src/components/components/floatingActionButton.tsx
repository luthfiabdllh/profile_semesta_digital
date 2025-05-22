"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus, MessageCircle, Phone, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)

  const mainButtonVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
        delay: 0.2,
      },
    },
    bounce: {
      y: [0, -10, 0],
      transition: {
        duration: 1,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop" as const,
        ease: "easeInOut",
        repeatDelay: 3,
      },
    },
    tap: { scale: 0.9 },
  }

  const childButtonVariants = {
    closed: { scale: 0, opacity: 0 },
    open: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    }),
  }

  const actionButtons = [
    { icon: <MessageCircle size={20} />, label: "Chat", color: "bg-green-500 hover:bg-green-600" },
    { icon: <Phone size={20} />, label: "Call", color: "bg-blue-500 hover:bg-blue-600" },
    { icon: <Mail size={20} />, label: "Email", color: "bg-purple-500 hover:bg-purple-600" },
  ]

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[1000] flex flex-col-reverse items-center gap-3">
      {isOpen && (
        <div className="flex flex-col-reverse gap-3">
          {actionButtons.map((button, i) => (
            <motion.button
              key={i}
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg",
                button.color,
              )}
              initial="closed"
              animate="open"
              variants={childButtonVariants}
              custom={i}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={button.label}
            >
              {button.icon}
            </motion.button>
          ))}
        </div>
      )}

      <motion.button
        className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        onClick={toggleOpen}
        initial="initial"
        animate={["animate", "bounce"]}
        whileHover={{ scale: 1.1 }}
        whileTap="tap"
        variants={mainButtonVariants}
        aria-label="Open actions menu"
      >
        <Plus size={24} className={cn("transition-transform duration-300", isOpen && "rotate-45")} />
      </motion.button>
    </div>
  )
}
