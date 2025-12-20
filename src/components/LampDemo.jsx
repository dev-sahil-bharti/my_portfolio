"use client";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";

export function LampDemo() {
    return (
        <LampContainer>
            <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="px-4 sm:px-8 lg:px-16 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-center font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-slate-300 to-slate-100 max-w-3xl mx-auto mt-8"
            >
                Full-stack developer skilled in React, Node.js, Express.js, MongoDB, and AI integration. Experienced in developing chat applications, authentication systems, job portals, and AI-powered features including chatbots, automation, and intelligent data processing.
            </motion.h1>
        </LampContainer>
    );
}
