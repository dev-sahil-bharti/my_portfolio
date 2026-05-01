import { motion } from 'framer-motion';

export default function WorkSection() {
    return (
        <div className="bg-black text-white text-center pt-16 px-4 sm:px-8">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-3xl font-[Lora] font-semibold"
            >
                Work Experience
            </motion.h1>

            <div className="flex flex-col gap-10 max-w-7xl mx-auto py-10 mt-10">
                {workExperiences.map((experience, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 rounded-xl p-8 border border-slate-800 hover:border-slate-600 transition-colors duration-300 relative overflow-hidden group"
                        style={{
                            background: "linear-gradient(180deg, rgba(30, 41, 59, 0.4), rgba(15, 23, 42, 0.6))",
                            backdropFilter: "blur(10px)",
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer" />

                        {/* Left: Image */}
                        <div className="flex justify-center items-center border border-slate-700 p-6 rounded-xl bg-black/40 shadow-inner">
                            <img
                                src={experience.image}
                                className="w-full sm:w-80 md:w-96 h-auto rounded-md object-contain transform transition-transform duration-500 group-hover:scale-105"
                                alt={`${experience.company} logo`}
                            />
                        </div>

                        {/* Right: Text */}
                        <div className="text-left p-2 space-y-4 z-10">
                            <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
                                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                                    {experience.company}
                                </h2>
                                <span className="text-sm text-cyan-100/80 font-mono tracking-wide mt-1 sm:mt-0 bg-cyan-900/20 px-3 py-1 rounded-full border border-cyan-800/50">
                                    {experience.duration}
                                </span>
                            </div>
                            <h3 className="text-lg text-gray-300 font-medium border-b border-slate-700/50 pb-2">{experience.role}</h3>
                            <ul className="space-y-3 text-sm text-gray-400">
                                {experience.description.map((point, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="mr-2 text-cyan-400">▹</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

const workExperiences = [
    {
        company: "Croma Campus",
        role: "Java Full Stack",
        duration: "Aug 2025 - September 2025",
        image: "./img/logo/cromalogo.png",
        description: [
            "Designed and developed dynamic web applications using the Spring Boot stack, delivering responsive and scalable solutions for diverse business needs.",
            "Built server-side rendering (SSR) and static web applications with Next.js, optimizing performance and improving SEO for client projects.",
            "Integrated RESTful APIs and third-party services into applications, enhancing functionality and user engagement."
        ]
    },
    {
        company: "CodSoft Pvt Ltd",
        role: "Frontend Developer Intern",
        duration: "July 2025 - August 2025",
        image: "./img/logo/codesoft.JPG",
        description: [
            "Designed and developed dynamic web applications using the MERN stack, delivering responsive and scalable solutions for diverse business needs.",
            "Utilized React, Node.js, Express.js, and MongoDB for full-stack development and seamless data integration.",
        ]
    }
];
