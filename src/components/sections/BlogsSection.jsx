import { motion } from "framer-motion";

export function BlogsSection() {
    return (
        <div id="blogs" className="py-24 bg-black text-white relative flex flex-col items-center justify-center px-4 border-t border-white/10">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-3xl text-center space-y-8"
            >
                <h2 className="text-3xl sm:text-5xl font-semibold font-[Lora] bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                    Read My Blogs
                </h2>
                <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
                    I love sharing my knowledge, documenting my journey, and writing about full-stack development, modern tech stacks, and my latest projects. Click the link below to read my articles!
                </p>
                <a 
                    href="https://medium.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-8 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300"
                >
                    Explore My Articles <i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
                </a>
            </motion.div>
        </div>
    );
}
