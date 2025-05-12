"use client"

import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const Cta = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const checkItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.6 + i * 0.1,
      },
    }),
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.8,
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "hsl(var(--primary))",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.95 },
  }

  const arrowVariants = {
    hover: {
      x: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  }

  const checkVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          type: "spring",
          stiffness: 50,
          damping: 10,
          delay: 0.8 + i * 0.1,
        },
        opacity: {
          duration: 0.2,
          delay: 0.7 + i * 0.1,
        },
      },
    }),
  }

  return (
    <motion.section
      className="py-32 max-w-screen-xl flex flex-col mx-auto space-y-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.div
          className="flex flex-col items-center justify-between gap-8 rounded-lg bg-muted px-6 py-10 md:flex-row lg:px-20 lg:py-16"
          initial={{ borderRadius: "0.5rem" }}
          whileInView={{
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
            transition: { delay: 0.3, duration: 0.5 },
          }}
          viewport={{ once: true }}
        >
          <div className="md:w-1/2">
            <motion.h4 className="mb-1 text-2xl font-bold md:text-3xl" variants={itemVariants}>
              The Best Data Solutions for Your Business
            </motion.h4>
            <motion.p className="text-muted-foreground" variants={itemVariants}>
              Manage and optimize your company&apos;s data with cutting-edge technology to enhance efficiency and security.
            </motion.p>
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button className="mt-6 overflow-hidden">
                Get Started{" "}
                <motion.span variants={arrowVariants}>
                  <ArrowRight className="ml-2 size-4" />
                </motion.span>
              </Button>
            </motion.div>
          </div>
          <div className="md:w-1/2">
            <ul className="flex w-full flex-col space-y-2 text-sm font-medium sm:text-base">
              {[
                "Advanced technology for accurate data analysis.",
                "High-level security for reliable business operations.",
                "Seamless integration with existing systems.",
              ].map((item, i) => (
                <motion.li key={i} className="flex items-center" custom={i} variants={checkItemVariants}>
                  <div className="mr-4 size-4 flex-shrink-0 relative">
                    <Check className="absolute inset-0" />
                    <motion.svg
                      className="absolute inset-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <motion.path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        custom={i}
                        variants={checkVariants}
                      />
                    </motion.svg>
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export { Cta }