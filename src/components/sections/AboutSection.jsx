// use client directive removed
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";

export function AboutSection() {
    return (
        <section id="about" className="relative w-full">
            <LampContainer>
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mt-2 bg-gradient-to-br from-slate-200 to-slate-400 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl"
                >
                    About Me
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.4,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="px-4 sm:px-8 lg:px-16 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-center font-medium tracking-tight text-slate-300 max-w-3xl mx-auto mt-4"
                >
                    Full Stack Developer MERN with hands-on experience in building scalable web applications and RESTful APIs. Skilled in React.js, Node.js, and cloud deployment (AWS). Strong foundation in Data Structures and problem-solving, focused on efficient
                    and user-centric solutions.
                </motion.p>
            </LampContainer>
        </section>
    );
}
